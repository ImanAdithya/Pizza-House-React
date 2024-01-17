const User=require('../model/User');
const {colors} = require("debug");



const UserController={

    saveUser: async function (req, res, next) {
        try {
            const UserData = req.body;

            const user = await User.create(UserData);

            res.status(200).json(user);

        }catch (err){
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

    findUser: async function (req, res, next) {
        try {

            const user = req.body;
            console.log(user)
            const userInfo = await User.findOne(user);

            if (userInfo) {
                res.status(200).json(userInfo);
            }
        }catch (err){
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

    getAllUsers:async function (req, res, next) {
        try {
            const UserList = await User.find();

            res.status(200).json(UserList);
        }catch (err){
            console.log(err);
            res.status(500).json({error:'something went wrong !'});
        }
    },

    deleteUser:async function (req, res, next) {
        try {
            //const userName = req.body;
            const { userName } = req.query;

            console.log("User ID is "+userName);

            const user = await User.deleteOne({userName: userName});

            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    }

}

module.exports=UserController