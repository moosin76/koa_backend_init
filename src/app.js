require('dotenv').config(); // .env 환경설정 불러오기

// 코아 사용
const Koa = require('koa');
const app = new Koa();

// 몽구스
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('error',(err)=>{
  console.error("MongoDB connection error");
});
mongoose.connection.on('open', ()=>{
  console.log("Successfully connected to mongodb");
});

//바디파서 사용
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// 라우트 
const Router = require('koa-router');
const router = new Router();
const routeBundle = require('routes');
router.use('', routeBundle.routes());
app.use(router.routes()).use(router.allowedMethods());

// 서버 응답
app.listen(process.env.PORT, ()=>{
  console.log(`Server listen at http://localhost:${process.env.PORT}/`);
})