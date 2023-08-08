

const express =  require('express');
const app = express();
const multer = require('multer');


require('dotenv').config();

let PORT = process.env.PORT;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
    let random = Math.ceil(Math.random()*10000);
      cb(null, random+' '+file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })

app.post('/api/file',upload.single('myFile'),(req,res)=>{
    console.log(req.file)
    console.log(req.body.name)
    res.status(200).json({
        msg:'this file is upload successfully',
        name:req.body.name,
        surname:req.body.surname
    })
})



app.listen(PORT,()=>{
    console.log(`this server is running on PORT ${PORT}`)
})