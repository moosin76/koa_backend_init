const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = "Hello Koa!";
})

const user = require('./user');
router.use('/user', user.routes())

module.exports = router;