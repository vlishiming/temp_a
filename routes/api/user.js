const Router = require('koa-router');
const router = new Router()
const User = require('../../models/user_reg')
const { user_info } = require('../../models')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
/**
 * @route GET  /api/users/test
 * @desc   测试接口地址
 *@access  接口是公开的
 * */
router.get('/test', async ctx => {
    ctx.status = 200
    ctx.body = { msg: 'users working.....' }
})

/**
 * @route POST  /api/users/register
 * @desc   测试接口地址
 *@access  接口是公开的
 * */
router.post('/register', async ctx => {
    const { name, phone, password, email } = ctx.request.body
    const findReult = await user_info.findAndCountAll({
        where: {
            phone: phone
        }
    })
    if (findReult && findReult.count > 0) {
        ctx.body = { msg: '手机号已经存在' }
    } else {
        let newUser = {
            icon: gravatar.url(email, { s: '200', r: 'pg', d: 'mm' }),
            name,
            email,
            phone
        }
        let hashPassword = await bcryptHash(password)
        newUser.password = hashPassword
        await user_info.create(newUser).then(user => {
            ctx.body = user.dataValues
        }).catch(err => {
            console.log(err);
        })
    }
})
function bcryptHash (password) {
    return new Promise((res, rev) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                res(hash)
            })
        })
    })

}



module.exports = router.routes()