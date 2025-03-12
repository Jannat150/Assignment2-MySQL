const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const mysql=require('mysql2')
const PORT=process.env.PORT
const db=mysql.createConnection({host:process.env.DB_HOST, user:process.env.DB_USER, password:process.env.DB_PASSWORD,database:process.env.DB_NAME})
const connection=db.connect((error)=>{
    if(error){
        console.log(error)
        return 
    }else{
        console.log("db connected successfully")
    }
})

app.listen(PORT,async()=>{
    try{
        await connection
        console.log(`App is listening on ${PORT}`)
    }catch(err){
        console.log(err)
    }
})