var exceltojson = require("xlsx-to-json-lc");

function uploadExcel(path,res){
    console.log(path)
    
    exceltojson({
        input: path,
        sheet: "Sheet1",  //sheet name 
      }, function(err, data) {
        if(err) {
          console.error(err);
        } else {
            con.connect(function(err,connection){
                if(err){console.log(err)}
                else{
                    query = connection.query('INSERT INTO user SET ?', data, function(err,
                        result) {
                            if(err){
                                console.log(err);
                            }
                        console.log(result);
                    });
                }
                
            });
          
        }
      });
}
exports.uploadExcel = uploadExcel;
  