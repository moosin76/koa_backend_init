require('dotenv').config() // .env 환경설정 불러오기
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

//바디파서 사용
app.use(bodyParser());

// 라우트 
const routeBundle = require('routes');
router.use('', routeBundle.routes());
app.use(router.routes()).use(router.allowedMethods());

// 서버 응답
app.listen(process.env.PORT, ()=>{
  console.log(`Server listen at http://localhost:${process.env.PORT}/`);
})