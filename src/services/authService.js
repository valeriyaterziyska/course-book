const bcrypt = require("bcrypt");
const jwt = require("../lib/jsonwebtoken");

const User = require("../models/User");
const SECRET = "SOMESECRETKEY";

exports.register = (userData) => {
    if (userData.password !== userData.rePassword) {
        throw new Error("Password missmatch!");
    }

    const user = User.findOne({ email: userData.email });

    if (user) {
        throw new Error("User exists!");
    }

    return User.create(userData);
};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error("Invalid email or password");
    }

    const payload = {
        _id: user._id,
        user: user.username,
        email: user.email,
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2h' });

    return token;
};
