const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

// Repeat password validation mongoose
// userSchema.virtual('rePassword')
//     .set(function(value) {
//         if(value !== this.password) {
//             throw new Error('Password missmatch');
//         }
//     });

const User = mongoose.model("User", userSchema);

module.exports = User;
