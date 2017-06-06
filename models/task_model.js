var con=require('../dbconnection');
var Task={
getAllTask:function(callback)
{
    return con.query("select * from task",callback);
},
addTask:function(task,callback)
{
    return con.query("insert into task values(?,?,?)",[task.id,task.title,task.status],callback);
},
deleteTask:function(id,callback)
{
    return con.query("delete from task where id=?",[id],callback);
},
getTaskById:function(id,callback)
{
    return con.query("select * from task where id=?",[id],callback);
},
updateTaskById:function(id,task,callback)
{
    return con.query("update task set  title=?,status=? where id=?",[task.title,task.status,id],callback);
}
};
module.exports=Task;