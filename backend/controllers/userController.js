const db = require('../db/queries');

const userController = {
    createUser: async (req,res) => {
        const username = 'test';
        const password = 'testPW';
        await db.createUser(username, password);
    },
};  

module.exports = userController;