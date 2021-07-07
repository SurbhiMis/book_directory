const { deleteABook } = require("../../model/booksModel");



async function deleteBook(req,res,next){
    const id = parseInt(req.params.id);
    try{
        const result = await deleteABook(id);
        if(result.affectedRows == 1){
            res.send({
                success: true,
                message: "Record Deleted Successfully!!",
                result :result
            })
        }
        else{
            res.status(400).send({
                success: false,
                error: "Record not exists!!"
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

module.exports = deleteBook