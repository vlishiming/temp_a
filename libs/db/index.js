const Sequelize = require('sequelize')
const { database, username, password, dialect, host, port } = global.config.mysql

const options = {
    host,
    dialect,
    port,
    logging: false,
    pool: {
        max: 20,
        min: 10,
        idle: 10000
    },
    timezone: '+08:00',
    define: {
        timestamps: false
    }
}

const sequelize = new Sequelize(database, username, password, options)

sequelize.authenticate().then(() => console.log('MySql Connected Success')).catch(err => console.log(err))

module.exports = sequelize

