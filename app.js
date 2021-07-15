// 引入koa  koa-router
const koa = require('koa');
const Router = require('koa-router');
var bodyParser = require('koa-bodyparser')
// require('./database')
//实例化 koa  koa-router
const app = new koa()
const router = new Router()
app.use(bodyParser())


const argUtil = require('./util/args')
const args = argUtil.parseArg()
global.config = require('./config')(args)


const Users = require('./routes/api/user')
//配置路由地址
router.use('/api/users', Users)
// const Middles = require('./middleware/');

// app.use(Middles.router(app, { root: './controllers', ignore: ['test'] }));
// app.use(Middles.router(app, { root: './controllers', ignore: ['test'] }));
//配置路由
app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 5000;

console.log('PORT', PORT)
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})