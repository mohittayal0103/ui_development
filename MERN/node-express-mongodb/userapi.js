
const express = require("express");
const router = express.Router();
module.exports = router;

const User = require("./userschema");

router.get("/", async(req, res)=>{
    let userlist = await User.find();
    res.status(200).json(userlist);
});

router.post("/", async(req, res)=>{
    let newuser = User({
        fullname:req.body.uname,
        mobile:req.body.umobile,
        email:req.body.uemail,
        address:req.body.uaddress
    });

    let info = await newuser.save(); 
    res.status(200).json(info);
})



router.get("/:id", async(req, res)=>{
    let id = req.params.id;
    let userlist = await User.findById(id);
    res.status(200).json(userlist);
});


// http://localhost:4444/user/deleteuser
router.delete("/deleteuser", async(req, res)=>{
    let id = req.body.id;
    let userinfo = await User.findById(id);
    if(userinfo==null){
        res.status(200).json({"message":"No Such Record"});
    }else{
        await userinfo.deleteOne();    
        res.status(200).json({"message":"Record Deleted Successfully"});
    }
});