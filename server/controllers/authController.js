const User = require("../models/UserSchema.js")
const JWT = require('jsonwebtoken')
require('dotenv').config()


/**************** Create JWT FUNCTION ***************/
const createToken = (id) => {
    return JWT.sign({ id }, process.env.SECRET_PHRASE)
}


/**************** Register FUNCTION ***************/
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const user = new User({ username, email, password })
        await user.save()
        return res.status(201).json({ message: "User is created succefully" })
    } catch (error) {
        return res.status(500).json({ message: `error is ${error.message}` })
    }
}

/**************** Login FUNCTION ***************/
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(500).json({ message: "Incorrect email" })

        }
        const validPassword = (user.password === password)
        if (!validPassword) {
            return res.status(500).json({ message: "Incorrect password" })
        }
        const token = createToken(user._id)

        const expiryDate = new Date(Date.now() + 3600000 * 24); // 1 hour
        res
            .cookie('access_token', token, { httpOnly: true, expires: expiryDate, sameSite: 'Lax' })
            .status(200)
            .json({ message: "user signed in", expiryDate });
    } catch (error) {
        return res.status(500).json({ message: `error is ${error.message}` })
    }
};


/**************** Google Login FUNCTION ***************/
const google = async (req, res) => {
    const { email, name, photo } = req.body
    try {
        const user = await User.findOne({ email });
        if (user) {
            const token = createToken(user._id)
            const expiryDate = new Date(Date.now() + 3600000 * 24); // 1 hour
            res
                .cookie('access_token', token, {
                    httpOnly: true,
                    expires: expiryDate,
                    sameSite: 'Lax'
                })
                .status(200)
                .json({ message: "User is signed in" });
        } else {

            const newUser = new User({
                username:
                    name.split(' ').join('').toLowerCase() +
                    Math.random().toString(36).slice(-8),
                email,
                profilePicture: photo,
            });
            await newUser.save();
            const token = createToken(newUser._id)
            const expiryDate = new Date(Date.now() + 3600000 * 24); // 1 hour
            res
                .cookie('access_token', token, {
                    httpOnly: true,
                    expires: expiryDate,
                    sameSite: 'Lax'
                })
                .status(200)
                .json({ message: "User is Saved to DB And signed in" });
        }
    } catch (error) {
        return res.status(500).json({ message: `error is ${error.message}` })
    }
};

const logout = (req, res) => {
    res.clearCookie('access_token').status(200).json('Logout success!');
};

module.exports = { register, google, login, logout }