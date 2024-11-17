const express = require('express');
const router = express.Router();
const db = require('../config/db.js');
const { exeCommand } = require('../config/cmdExecution.js');
const { json } = require('body-parser');
const {logWriter } = require("../config/errorWrite.js")

// Route to get all user information
router.post('/userrInfo', (req, res) => {
    const id = req.body.id;
    // Query to select user information from the database
    const query = `SELECT * FROM mmu where id=${id} limit 1`;
console.log("Query for get userinfo",query);

    exeCommand(query).then((result) => {
        console.log(result,12345);
        exeCommand(query)
        .then((result)=>res.json(result))
          .catch((err)=>logWriter(query,err))

    }).catch((err) => {
        console.log(err);
    });
});


router.post('/userrInfo/update', (req, res) => {
    const { id, name, rollno, email, phone, hostelStatus, institute, course, semester } = req.body;

    const query = `UPDATE mmu SET name = ?, rollno = ?, email = ?, phone = ?, hostelStatus = ?, institute = ?, course = ?, semester = ? WHERE id = ?`;
    db.query(query, [name, rollno, email, phone, hostelStatus, institute, course, semester, id], (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            logWriter(query, err);
            return res.status(500).json({ error: 'Database query failed' });
        }

        res.json({ message: 'User profile updated successfully' });
    });
});



// router.post('/userrInfo/update',(req,res)=>{
//     const id=req.body.id;
//     const name=req.body.name;
//     const rollno=req.body.rollno;
//     const email=req.body.email;
//     const phone=req.body.phone;
//     const username=req.body.username;

//     const query=`update mmu set name='${name}',email='${email}',phone='${phone}',username='${username}',rollno='${rollno}' where id='${id}'`;
    
//     exeCommand(query).then((result)=>{
//         res.json("success"); 
//     }).catch((err)=>{
//        console.log(err);
//     })
//  });



 router.post('/userrInfo/updatePassword',(req,res)=>{
    console.log(req.body,"Update Password");
    const oldPass=req.body.oldpassword;
    const newPass=req.body.newPassword;
    const userid=req.body.id;

    const query=`select * from master_user where id='${userid}' and password='${oldPass}'`;
    exeCommand(query).then((result)=>{
       if(result.length>0){
           const query=`update master_user set password='${newPass}' where id='${userid}'`;
           exeCommand(query).then((result)=>{
            res.status(200).json({error:'Password Updated Successfully',msg:'success'});
              }).catch((err)=>{
                 console.log(err);
              })
       }else{
        res.status(500).json({error:'Old Password Does not match , Please Check',msg:'error'});
       }

    }).catch((err)=>{
       console.log(err);
    })
    
 });    
module.exports = router;
