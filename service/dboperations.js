let config = require('./dbconfig');
const sql = require('mssql');


async function getTasks(){
    try{
        let pool = await sql.connect(config);
        let tasks = await pool.request().query("select * from task;");
        
        return tasks.recordsets;
    } catch(error) {
         console.log(error);
    }
}

async function addTasks(task){

    try{
        let pool = await sql.connect(config);
        let insertTasks = await pool.request()
        .input('name', sql.NChar, task.name)
        .input('description', sql.NText, task.description)
        .execute('InsertTask');

        return insertTasks.recordsets;
    } 
    catch(error) {
         console.log(error);
    }
}

async function updateTask(task){
    try {
        let pool = await sql.connect(config);
        let updateTask = await pool.request()
        .input('id', sql.Int, task.id)
        .input('name', sql.NChar, task.name)
        .input('description', sql.NText, task.description)
        .execute('UpdateTask');

        return updateTask.recordsets;
    }catch(err){
        console.log(err)
    }
}

async function deleteTask(task){
    try {
        let pool = await sql.connect(config);
        let deleteTask = await pool.request()
        .input('id', sql.Int, task.id)
        .execute('DeleteTask');

        return deleteTask.recordsets;
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getTasks : getTasks,
    addTasks : addTasks,
    updateTask : updateTask,
    deleteTask : deleteTask
}