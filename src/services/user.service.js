const userModel = require("../model/user.model");

class UserService {
    // tao nguoi dung moi
    createUser(newUser) {
        return userModel.create(newUser);
    }

    //lay ve tat ca nguoi dung
    getAllUser() {
        return userModel.find({});
    }

    // lay 1 nguoi dung
    getUserById(id) {
        return userModel.findById(id)
    }

    deleteUserById(id) {
        return userModel.findByIdAndDelete(id)
    }
    // cap nhat nguoi dung theo id(co id nguoi dung va du lieu moi) id dung
    updateUserById(id, updateData) {
        return userModel.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true

        });
    }

    

}


module.exports = new UserService();

