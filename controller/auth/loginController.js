const { loginUser } = require("../../model/userModel");
const jwt = require('jsonwebtoken');
const isValidate = require("./validate");
const crypto = require('crypto')

async function loginController(req,res,next){
    const user = req.body;
    const validate = isValidate(user)
    if(!validate.success){
        return res.status(400).send(validate);
    }

    try{
        const existedUser = await loginUser(user.email);
        if(existedUser){
            
            const hashedPwd = crypto.createHash('sha512').update(user.password).digest('hex');
            if(existedUser.password === hashedPwd){
                const token = jwt.sign({
                        id : existedUser.id,
                        role : existedUser.role                    
                },"SECRETKEY");

                res.send({
                    success: true,
                    message : "Login Successfully",
                    token : token
                })
            }
            else{
                res.status(500).send({
                    success : false,
                    error : "Email and password Doesn't match.."
                })
            }
        }else{
            return res.status(404).send({
                success: false,
                error : "User Not Found"
            })
        }
       
    }catch(e){
        res.status(500).send({
            success : false,
            error : e.message
        })
    }

}


module.exports = loginController;