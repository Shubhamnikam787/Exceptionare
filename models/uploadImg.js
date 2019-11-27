var fs = require("fs");
var con = require(__dirname+"/connectDb");


function upload(path){
    
    var imagePath = path; 



    var cat = {
        img: fs.readFileSync(imagePath),
        file_name: 'exceptionare image'
    };

    con.connect(function(err,connection){
        if(err){console.log(err)}
        else{
            query = connection.query('INSERT INTO image_files SET ?', cat, function(err,
                result) {
                    if(err){
                        console.log(err);
                    }
                console.log(result);
            });
        }
        
    });


}


exports.upload = upload;