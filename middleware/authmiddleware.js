const jwt = require('jsonwebtoken');
const isAuthorized = require('../utils/permission');


async function authmiddleware(req,res,next){
    const token = req.headers['authentication'];
    const {id,role} = jwt.verify(token,"SECRETKEY");
    // console.log(decode);
     //console.log(req.method,req.originalUrl);
    try{
        const authorized = await isAuthorized(role,req.method,req.originalUrl.split('/')[1]);
        if(authorized){
            req.created_by  = id;
            next();
        }
        else{
            res.status(500).send({
                success: false,
                Message : "Unauthorized Access"
            })
        }

    }catch(e){
        res.status(500).send({
            success: false,
            error : e.message
        })
    }

}


module.exports = authmiddleware;