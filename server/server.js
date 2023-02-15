const app=require("./app");
const dotenv=require("dotenv");
const connect=require("./config/database");
process.on("uncaughtException",err=>{
    console.log(`Error:${err.message}`);
    console.log("Shut Down");
   process.exit(1);
})
dotenv.config({path:"server/config/config.env"});
connect();

const server=app.listen(process.env.PORT,()=>
{
    console.log("Port running");
})
//Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log("Shut Down");
    server.close(()=>
    {
        process.exit(1);
    });
})