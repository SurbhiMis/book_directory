const { getABook } = require("../../model/booksModel");


async function fetchABook(req,res,next){
    const id = parseInt(req.params.id);
    try{
        const result = await getABook(id);
        
        if(result){
            res.send({
                success: true,
                result: result
            })
        }
        else{
            res.status(400).send({
                success: false,
                error: "Book not exist!!"
            })
        }
        
    }
    catch(e){
        res.status(500).send({
            success: false,
            error: e.message
        })
    }
}

module.exports = fetchABook