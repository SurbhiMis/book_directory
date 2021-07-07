const { getAllBooks } = require("../../model/booksModel");

async function getBooks(req,res,next){
    try{
        const result = await getAllBooks();
        res.send({
            success: true,
            records: result
        })
    }
    catch(e){
        res.status(500).send({
            success: false,
            error: e.message
        })
    }
}

module.exports = getBooks;