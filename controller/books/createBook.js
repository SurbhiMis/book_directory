const { createABook } = require("../../model/booksModel");


async function createBook(req,res,next){
    const book = req.body;
    // console.log(book);
    const file = req.files.fileName;
    const fname = file.name;
    
    // console.log(req.files);
    const created_by = req.created_by;

    try{
        file.mv((__dirname, 'assets/files/')+ fname ,(err)=>{
            if(err) return res.status(500).send({success:false,error:err.message+"!!"});
            console.log("File Uploaded")
        })
        const result  =  await createABook({...book,file:fname,created_by});
        res.send({
            success : true,
            message : "Book Created Successfully..."
        })

    }
    catch(e){
        res.status(500).send({
            success : false,
            error : e.message+"!!"
        })
    }
}

module.exports = createBook;