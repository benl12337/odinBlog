const db = require('../db/queries');

const userController = {
    login: (req,res) => {
        res.json({
            message: 'logging in...',
        });
    },
    createUser: async (req,res) => {
        const username = 'test';
        const password = 'testPW';
        await db.createUser(username, password);
    },
};  

module.exports = userController;