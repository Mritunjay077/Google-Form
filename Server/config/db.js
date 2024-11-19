const mysql = require('mysql2');

// Use environment variables for database credentials
const mysqlSetting = {
    host: process.env.MYSQLHOST || 'localhost', // Railway provides this as MYSQLHOST
    user: process.env.MYSQLUSER || 'root',     // Railway provides this as MYSQLUSER
    password: process.env.MYSQLPASSWORD || 'root', // Railway provides this as MYSQLPASSWORD
    port: process.env.MYSQLPORT || 3306,       // Railway provides this as MYSQLPORT
    database: process.env.MYSQLDATABASE || 'flutteapp', // Railway provides this as MYSQLDATABASE
    multipleStatements: true,
};

// Create a connection pool
const conn = mysql.createPool(mysqlSetting);

// Export the connection pool
module.exports = conn;
