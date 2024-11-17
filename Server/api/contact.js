const express = require('express');
const router=express.Router();
const db=require('../config/db.js');
const {exeCommand} =require('../config/cmdExecution.js');
const { logWriter } = require('../config/errorWrite.js');
const { body } = require('http-client');

router.post('/contact/insert',(req,res)=>{
   console.log("Information Got");
   
   const name=req.body.name;
   const phone=req.body.phone;
   const email=req.body.email;
   const msg=req.body.msg;

   const query=`insert into contact (name,phone,email,msg) values('${name}','${phone}','${email}','${msg}')`;

   exeCommand(query)
   .then((result)=>res.json('success'))
   .catch((err)=>logWriter(query,err))
   console.log(body);
   
});
router.get('/contact/get',(req,res)=>{    
    const query=`select *from contact`;
    console.log("hjitt");
    
    exeCommand(query)
    .then((result)=>req.json(result))
    .catch((err)=>logWriter(query,err))

 });


module.exports = router;