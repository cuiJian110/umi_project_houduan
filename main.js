/*
 * @Description: 
 * @Autor: cuiJian
 * @Date: 2019-12-16 15:57:51
 * @LastEditors: cuiJian
 * @LastEditTime: 2019-12-16 17:38:47
 */
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router");
app.use(bodyParser.json())
app.use(cors());
app.use(router);
app.listen(3000,() => console.log("3000 running......"))