const mysql=require('mysql2');
const mysqlSetting={
    host:'mysql.railway.internal',
    user:'root',
    password:'egTiUHheMqFKZDUsuWXthSECTYQsjozZ',
    port:3306,
    database:'railway',
    multipleStatements:true,
};

const conn=mysql.createPool(mysqlSetting);

module.exports=conn;
