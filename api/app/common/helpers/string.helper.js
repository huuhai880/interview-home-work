const bcrypt = require('bcryptjs')

const toLowerCaseString = (text = '') => (text || '').trim().toLowerCase()

const hashPassword = (password) => {return bcrypt.hashSync(password, 10)}

module.exports = {
    toLowerCaseString,
    hashPassword
}

