const bcrypt = require("bcrypt");

const User = require("../models/User");

exports.register = (userData) => {
    if (userData.password !== userData.rePassword) {
        throw new Error('Password missmatch!');
    }

    const user = User.find({email: userData.email});

    if(user) {
        throw new Error('User exists!');
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

    // Generate token

    // return token
};
