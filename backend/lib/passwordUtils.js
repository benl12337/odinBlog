const bcrypt = require('bcryptjs');

const genHash = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
};

const verifyPw = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

module.exports = { genHash, verifyPw };

