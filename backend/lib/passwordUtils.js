const bcrypt = require('bcryptjs');

const genHash = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
};

module.exports = { genHash };

