const { DataTypes } = require('sequelize')
module.exports = sequelize => {
    const attributes = {
        name: {
            type: DataTypes.STRING(64),// 类型
            allowNull: false, //是否为空,false表示不能为空，默认值为true
            defaultValue: null, // defaultValue表示列的默认值
            primaryKey: false, //primaryKey表示是否为主键，值为true时表示为主键
            autoIncrement: false, // 是否自增
            comment: "用户名", //comment：这个是列的注释
            field: "name" //field：不使用对象名作为列名，而使用field的属性值
        },
        email: {
            type: DataTypes.STRING(64),// 类型
            allowNull: false, //是否为空,false表示不能为空，默认值为true
            defaultValue: null, // defaultValue表示列的默认值
            primaryKey: false, //primaryKey表示是否为主键，值为true时表示为主键
            autoIncrement: false, // 是否自增
            comment: "邮箱", //comment：这个是列的注释
            field: "email" //field：不使用对象名作为列名，而使用field的属性值
        },
        password: {
            type: DataTypes.STRING(64),// 类型
            allowNull: false, //是否为空,false表示不能为空，默认值为true
            defaultValue: null, // defaultValue表示列的默认值
            primaryKey: false, //primaryKey表示是否为主键，值为true时表示为主键
            autoIncrement: false, // 是否自增
            comment: "密码", //comment：这个是列的注释
            field: "password" //field：不使用对象名作为列名，而使用field的属性值
        },
        phone: {
            type: DataTypes.STRING(64),// 类型
            allowNull: false, //是否为空,false表示不能为空，默认值为true
            defaultValue: null, // defaultValue表示列的默认值
            primaryKey: false, //primaryKey表示是否为主键，值为true时表示为主键
            autoIncrement: false, // 是否自增
            comment: "手机号", //comment：这个是列的注释
            field: "phone" //field：不使用对象名作为列名，而使用field的属性值
        },
        icon: {
            type: DataTypes.STRING(64),// 类型
            allowNull: false, //是否为空,false表示不能为空，默认值为true
            defaultValue: null, // defaultValue表示列的默认值
            primaryKey: false, //primaryKey表示是否为主键，值为true时表示为主键
            autoIncrement: false, // 是否自增
            comment: "头像", //comment：这个是列的注释
            field: "icon" //field：不使用对象名作为列名，而使用field的属性值
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
            primaryKey: false,
            autoIncrement: false,
            comment: "更新时间",
            field: "updated_at"
        }
    }
    const options = {
        tableName: "user_info",
        comment: "",
        indexes: []
    };
    const testUserModel = sequelize.define("testUserModel", attributes, options)
    return testUserModel
}