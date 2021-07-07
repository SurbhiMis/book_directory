const Permission = {
    'user' : {
        'books' : ['GET']
    },
    'admin' :{
        'books' : ['GET','PUT','DELETE','POST']
    }

}

function isAuthorized(role,method,route){
    const permission = Permission[role];
    const permissionArray= permission[route];
    const idx = permissionArray.indexOf(method);
    //console.log(permissionArray,idx);
    if(idx < 0) return false
    return true
    
}

module.exports = isAuthorized ;