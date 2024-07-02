const mongoose=require("mongoose")
const conn=async (req,res)=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/new_todo").then(
            ()=>{
                console.log("Connected")
            }
        )
    }catch(err){
        res.status(400).json(
            {message:"not connected"},
        );
    }
    
}
conn()

