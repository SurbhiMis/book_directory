const { updateABook, getABook } = require("../../model/booksModel");
const fs = require('fs')
async function updateBook(req,res,next){
    const id = parseInt(req.params.id);
    const book = req.body;
    const file = req.files.file;
    const fname = file.name;
    
    // console.log(file);
    const created_by = req.created_by;

    try{
        const oldBook = await getABook(id);
        console.log(oldBook);
        if(!oldBook){
            res.status(400).send({
                success : false,
                error : "Book id not exist..."
            })
        }else{
            const oldfilename = oldBook.file;
            fs.unlinkSync((__dirname,"assets/files/")+oldfilename);
            console.log("Unlinked Succesfully");

            try{
                file.mv((__dirname, 'assets/files/')+ fname ,(err)=>{
                    if(err) return res.status(500).send({success:false,error:err.message});
                    console.log("File Uploaded")
                })
                const result  =  await updateABook({...book,file:fname,created_by,id});
                res.send({
                    success : true,
                    message : "Book updated Successfully..."
                })
        
            }
            catch(e){
                res.status(500).send({
                    success : false,
                    error : e.message+"!!"
                })
            }

        }
    }
    catch(e){
        res.status(500).send({
            success : false,
            error : e.message+"!!"
        })

    }

    
}

module.exports = updateBook;