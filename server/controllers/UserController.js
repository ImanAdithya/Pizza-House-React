const User=require('../model/User');

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

}

module.exports=UserController