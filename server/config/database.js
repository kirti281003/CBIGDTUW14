const mongoose=require("mongoose");
mongoose.set('strictQuery', true);

const connectDatabase=()=>
{
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>
{console.log(`Functional database:${data.connection.host}`);

})

}
module.exports=connectDatabase;