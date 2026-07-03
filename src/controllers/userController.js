const userService=require("../services/userService");
const user=require("../models/User");



const createUser= (req,res)=>
{
    const {name,email}=req.body;
    if(!name || !email)
        {
            return res.status(400).json({
                message:"name and email are required"
            });
        }

        // const temp=user.findOne({email:req.email});
        //     if(temp)
        //     {
        //         return res.status(409).json({
        //         message:"A user with this email already exists"
        //          });
                
        //     }

    

    try{
        
    const user=userService.createUser(req.body);
    return res.status(200).json({
        
        id:user.id,
        name: req.body.name,
        email:req.body.email,
        
    });

    }
    catch(error)
    {
        res.status(500).json({
        message:"Something went wrong, please try again"
    });
    }
    
};


module.exports={
    createUser
};