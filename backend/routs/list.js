const router= require("express"). Router();
const User=require("../models/user");
const List=require("../models/todolist");
const verifyToken=require("./verifyToken")

//Add task
router.post("/addTask", verifyToken, async (req, res) => {
    try {
      const { name, gender, email, phone, image, id } = req.body.contact
      const existingUser = await User.findById(id);
      if (existingUser) {
        const list = new List({ name, gender, phone, image, user: existingUser });
        await list.save().then(() => res.status(200).json({ list }));
        existingUser.list.push(list);
        await existingUser.save();
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  });

 //update task
 router.put("/updateTask/:id", async (req, res) => {
    try {
    const { name,gender,email,phone,image,id }= req.body.contact;
    const existingUser= await User.findById(id)
    if (existingUser){
        const list=await List.findByIdAndUpdate(req.params.id,{name,gender,phone,image})
        list.save().then(()=>res.status(200).json({ message:"List is updated" }))
        }
    }
    catch (error) {
        console.log(error);
    }
 });


 //Delete the Task
 router.delete("/deleteTask/:id", async (req, res) => {
    try {
    const { id }= req.body;
    const existingUser= await User.findByIdAndUpdate(id,{$pull:{list:req.params.id}})
    if (existingUser){
        await List.findByIdAndDelete(req.params.id).then(
            ()=>res.status(200).json({ message:"List is Deleted" }))
        }
    }
    catch (error) {
        console.log(error);
    }
 });

//get the Task 
 router.get("/getTasks",verifyToken, async (req, res) =>
     {
        //const list = await List.find({ user: req.params.id }).sort({createdAt:-1});
        const list = await List.find().sort({ createdAt: -1 });
        if(list.length != 0){
            res.status(200).json({ list });
        }
        else{
            res.status(200).json({"message":"No item" });
        }
        
});



module.exports = router