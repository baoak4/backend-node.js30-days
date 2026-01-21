const userModel = require("../models/user.model");
const throwError = require("../utils/throwError");
const { pick } = require("lodash");

class AuthService {
    async register(userData) {
        const user = await userModel.create(userData);
        return user
    }

    async login(userData) {
        const user = await userModel.findOne({ email: userData.email });
        if (!user) { throwError("Invalud email or password"); }

        const isMatch = await user.comparePassword(userData.password);
        if (!isMatch) { throwError("Password not compare"); }

        const safeUser = pick(user, ["_id", "email", "name", "role"]);

        return safeUser;
    }
}

module.exports = new AuthService();
