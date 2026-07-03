const user=require("../models/User");

const createUser= (req)=>
{
    
   const User=user.create(req);
   User.id="u"+1;
    return User;
};

module.exports={
    createUser
};