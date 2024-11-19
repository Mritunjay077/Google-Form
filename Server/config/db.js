const mysql=require('mysql2');
const mysqlSetting={
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'flutteapp',
    multipleStatements:true,
};

const conn=mysql.createPool(mysqlSetting);

module.exports=conn;
