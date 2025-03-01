const db = require('../db/queries');
const { genHash, verifyPw } = require('../lib/passwordUtils');
const jwt = require('jsonwebtoken');

const userController = {
    login: async (req, res, next) => {
        const { username, password } = req.body;
        try {
            // check if user exists
            const user = await db.getUserByName(req.body.username);
            if (!user) return res.status(400).json({ message: "user does not exists" });

            // check password matches
            const pwMatches = await verifyPw(password, user.hash);
            if (!pwMatches) return res.status(400).json({ message: "incorrect password" })

            // generate jwt (contains user id and role information)
            const payload = {
                id: user.id,
                role: user.role
            };
            const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });

            res.json({ message: "successfully logged in!", token: accessToken }); 

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error });
        }

    },
    createUser: async (req, res, next) => {

        const { username, password, secret } = req.body;

        try {
            // hash the input password and create account
            const hashedPw = await genHash(password);
            await db.createUser(username, password, secret);
            return res.status(201).json({
                message: "user created",
            })
        } catch (error) {
            console.log(error);

        }
    },
};

module.exports = userController;