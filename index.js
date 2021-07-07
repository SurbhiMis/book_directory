const express = require("express")
const app = express()
const authRouter = require('./routes/authRoute')
const bookRouter = require('./routes/booksRoute')
const fileUpload = require('express-fileupload')
const authmiddleware = require('./middleware/authmiddleware')

app.use(express.json());

app.use(fileUpload());

app.use('/auth', authRouter);

app.use('/books' ,authmiddleware, bookRouter);

app.listen(4000 , ()=> console.log("App running at port 4000"));
