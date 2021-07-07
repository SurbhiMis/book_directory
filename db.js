const mysql = require('mysql')

const pool = mysql.createPool({
    host : 'localhost',
    user: 'root',
    port : 3306 ,
    password : '',
    database : 'bookdb',
    connectionLimit : 10
})

pool.makeQuery = (query,params = [])=>{
    return new Promise((res,rej)=>{
        pool.query(query,params,(err,result)=>{
            if(err) rej(err)
            else res(result)
        })
    })
}

module.exports = pool;