const userService = require("../services/user.service");

//event loop -
//let const var - 1 bien (function, cuc bo , toan cuc)
class UserController {
    // ngam hieu createUser la 1 function
    async createUser(req, res) {
        try {
            const newUser = req.body;
            const result = await userService.createUser(newUser);
            res.status(201).json({ message: "User create successfully", data: result });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }

    async getAllUser(req, res) {
        try {
            const users = await userService.getAllUser();
            res.status(200).json({ message: "Users retrieved successfully", data: users });

        } catch (error) {
            res.status(500).json("Internal Server Error");

        }
    }

    async getUserById(req, res) {
        try {
            // lay id tu nguoi dung gui len
            const user = await userService.getUserById(req.params.id || res.status.id);
            res.status(200).json({ message: "User retrieved successfully", data: user });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }

    async deleteUserById(req, res) {
        try {
            const user = await userService.deleteUserById(req.params.id);
            res.status(200).json({ message: "User delete successfully", data: user });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }

    }
    async updateUserById(req, res) {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const user = await userService.updateUserById(id, updateData);

            if (!user) {
                return res.status(404).json({ message: 'User not found ' });
            }
            res.status(200).json({ message: "User update successfully", data: user });

        } catch (error) {
            res.status(400).json("Internal Server Error");

        }
    }


}

module.exports = new UserController();
// const userId = req.body;
