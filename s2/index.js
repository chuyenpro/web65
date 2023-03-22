// const express =require('express'); 
import express from "express";
import router from "./router/student.js";

const app=express();
app.get('/', (req,res)=>{
    res.send('hello')
})
app.get('/login', (req,res)=>{
    res.json([
        {
            id:1,
            name:'Alice'
        },
        {
            id:2,
            name:'Bob'
        }
    ])
})
app.use('/students',router)

app.post('/api/signup', (req, res) => {
    // Lấy thông tin tài khoản từ body của request
    const { username, email, password } = req.body;
  
    // Xử lý yêu cầu đăng ký tài khoản ở đây
  
    // Trả về thông tin tài khoản đã đăng ký
    res.json({ username, email });
  });
  
app.listen(8080, (err)=>{
    console.log('server is running');
})
