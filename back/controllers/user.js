const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.signup = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });
        const savedUser = await user.save();
        res.status(201).json({ User: savedUser, message: "User created !" });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ error: "User NOT found !" });
        }
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid) {
            return res.status(401).json({ error: "INVALID password !" });
        }
        res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, `${process.env.REACT_APP_JWT_KEY}`, { expiresIn: `${process.env.REACT_APP_JWT_EXPIRE}` }),
        });
    } catch (error) {
        res.status(500).json({ error });
    }
};
