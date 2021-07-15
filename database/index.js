const Sequelize = require('sequelize')
const sequelize = new Sequelize('user', 'root', '12345678', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
})
sequelize
    .authenticate()
    .then(() => {
        console.log('数据库连接成功')
    })
    .catch((error) => {
        console.log('数据库连接失败', error)
    })
module.exports = { Sequelize, sequelize }