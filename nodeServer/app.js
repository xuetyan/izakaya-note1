// 导入koa模块
const Koa = require('koa')
// 创建koa的实例app
const app = new Koa();

const bodyparser = require('koa-bodyparser')
app.use(bodyparser({multipart: true}))

// 路由模块
const Router = require('koa-router')

const routerModules = require('./router/index.js')

// 创建koa-router的实例router
const router = new Router()

for (const route of routerModules) {
    if (route.type === 'get') {
        router.get(route.url, route.method)
    } else if (route.type === 'post') {
        router.post(route.url, route.method)
    }
}

app.use(router.routes())

// 监听端口
const server = app.listen(8999, () => {
    const { port } = server.address()
    const nets = require('os').networkInterfaces()
    const ip = Object.values(nets).flat().find(i => (i.family === 'IPv4' || i.family === 4) && !i.internal)?.address || '127.0.0.1'
    console.log(`run success: http://${ip}:${port}`)
})