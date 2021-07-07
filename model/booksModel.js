const pool = require('./../db')
Book = []

Book.createABook = async ({title,author,publication,file,created_by})=>{
    const query = `INSERT INTO BOOKS (TITLE, AUTHOR,PUBLICATION, FILE,CREATED_BY) VALUES (?,?,?,?,?) `
    const params = [title,author,publication,file,created_by];
    const res = await pool.makeQuery(query,params)
    return res;

}

Book.getAllBooks =async () =>{
    const query = `select * from books`
    const params = [];
    const res = await pool.makeQuery(query,params)
    return res;

}

Book.getABook =async (id) =>{
    const query = `Select * from books where id = ? `
    const params = [id];
    const res = await pool.makeQuery(query,params)
    return res[0];

}

Book.updateABook = async({title,author,publication,file,created_by,id}) =>{
    const query = `update books set title=?,author=?,publication=?,file=?,created_by =? where id = ?`
    const params = [title,author,publication,file,created_by,id];
    const res = await pool.makeQuery(query,params)
    return res;

}

Book.deleteABook =async (id) =>{
    const query = `delete from books where id = ? `
    const params = [id];
    const res = await pool.makeQuery(query,params)
    return res;

}

module.exports = Book;

