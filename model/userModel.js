const pool =  require('./../db')

User = []

User.createUser = async({name,email,password})=>{
    const query = "INSERT INTO USERS (NAME,EMAIL,PASSWORD) VALUES (?,?,?)";
    const params = [name,email,password];
    const res = await pool.makeQuery(query,params);
    return res;
}

User.loginUser = async(email) =>{
    const query = "SELECT * FROM USERS WHERE EMAIL = ?";
    const params = [email];
    const res = await pool.makeQuery(query,params);
    return res[0];
}

module.exports = User;

