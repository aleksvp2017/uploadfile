var express = require('express') 
var app = express()

var cors = require('cors')
app.use(cors())

const multer = require("multer")

//fileuploaded must match the parameter name in the front-end, the one set in formData
app.post("/endpoint", multer().array("fileuploaded"), function (req, res) {
    console.log("files:", req.files);
    const streamifier = require('streamifier');
    var stream = streamifier.createReadStream(req.files[0].buffer)
    res.status(200).json({ message: 'File received' })    
});

let port = 3001
app.listen(port, () => { console.log('Server up and listening at ' + port)})
