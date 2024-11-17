const express = require('express');
const router = express.Router();
const db = require('../config/db.js');
const { exeCommand } = require('../config/cmdExecution.js');
const { json } = require('body-parser');
const {logwrite } = require("../config/errorWrite.js")



//Student Login
router.post('/loginUser', (req, res) => {
    const rollno = req.body.rollno;
    const pass = req.body.password;

    const query = `select * from mmu where rollno='${rollno}' and password='${pass}' limit 1`;
    exeCommand(query).then((result) => {
        console.log(result, 123456789);

        if (result.length > 0) {
            res.json({ msg: "success", data: result });
        } else {
            res.json("error");
        }
    }).catch((err) => {
        console.log(err);
    })
});

//Teacher Login
router.post('/teacherlogin', (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    const query = `select * from teacher_mmu where email='${email}' and password='${pass}' limit 1`;
    exeCommand(query).then((result) => {
        console.log(result, 123456789);

        if (result.length > 0) {
            res.json({ msg: "success", data: result });
        } else {
            res.json("error");
        }
    }).catch((err) => {
        console.log(err);
    })
});

module.exports = router;