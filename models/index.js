const sequelize = require('../libs/db');
const User = require('../models/user_reg');
const user_info = User(sequelize);
module.exports= {
    user_info
}
