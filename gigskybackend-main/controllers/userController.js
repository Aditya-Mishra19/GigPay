const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('../middlewares/bcrypt');
const { revokeToken } = require('../middlewares/authMiddleware');

const createUser = async (req, res) => {
    try {
        const isEmail = await User.findOne({ email: req.body.email });
        if (isEmail) {
            return res.status(400).send({
                success: true,
                message: "Email is Already Registered please login",
            });
        }

        const hashedPassword = await bcrypt.hashPassword(req.body.password);
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(200).json({
            success:true,
            message : `account created successfully login!`
        });
    } catch (err) {
        console.log("Error in signup",err);
        res.status(500).json(err);
    }
};

const login = async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(email)

        const userDB = await User.findOne({ email: email });
        console.log(userDB)
        if (!userDB) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }
        const check = await bcrypt.comparePassword(password, userDB.password);
        if (!check) {
            return res.status(404).send({
                success: false,
                message: "Invalid userId or Password",
            });
        }

        const payload = { userName: userDB.userName };
        const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: "1h"
        });
        res.status(200).send({
            success: true,
            message: "You have successfully login",
            token,
        });

    } catch (err) {
        console.log('Erro in login',err);
        res.status(500).json(err);
    }
}


module.exports ={
    createUser,
    login

}