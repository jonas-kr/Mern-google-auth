const userRegister = async (req, res) => {
    res.status(200).json(req.user)
}

module.exports = { userRegister }