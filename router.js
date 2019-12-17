/*
 * @Description: 
 * @Autor: cuiJian
 * @Date: 2019-12-16 15:59:50
 * @LastEditors: cuiJian
 * @LastEditTime: 2019-12-17 14:19:00
 */
const express = require("express");
const r = express.Router();
r.get("/",(req ,res) => {
    res.send("999")
})
r.get("/testGet",(req,res) => {
    res.send({
        status: 200,
        data: "请求过来的"
    })
})
r.get("/getData",(req , res) => {
    res.send("data")
})
// 这样写的话 前端请求地址为
// http://localhost:3000/getList?pageSize=5&currentPage=91
r.get("/getList",(req,res) => {
    const {pageSize, currentPage} = req.query;
    res.send({
        message: "success",
        currentPage,
        pageSize,
        data: [1,2,3]
    })
})
// 这样写的话 前端请求地址为
// http://localhost:3000/getList/90
// 两个都可以的
r.get("/getList/:id",(req,res) => {
    const id = req.params.id;
    res.send({
        id: id,
        status: 200,
        message: "success"
    })
})
r.get("/getOne",(req, res) => {
    res.send("one")
})
r.post("/login",(req , res) => {
    console.log(req.body);
    res.send({
        status: 200,
        message: "success"
    })
})
module.exports = r;