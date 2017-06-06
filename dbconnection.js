var mysql=require('mysql');
var con=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'rest_db'
});
module.exports=con;
