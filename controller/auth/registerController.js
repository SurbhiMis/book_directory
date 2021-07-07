const { createUser } = require("../../model/userModel");
const crypto = require('crypto');
const isValidate = require("./validate");


async function registerController(req,res,next){
    const user = req.body;
    const validate = isValidate(user);
    if(!validate.success){
        return res.status(400).send(validate);
    }

    try{
        const hashedPwd = crypto.createHash('sha512').update(user.password).digest('hex') 
        const result = await createUser({...user,password : hashedPwd});
        res.send({
            success: true,
            message : "Registered Successfully",
            result : result
        });

    }catch(e){
        res.status(500).send({
            success: false,
            error : e.message
        })
    }
}

module.exports = registerController;