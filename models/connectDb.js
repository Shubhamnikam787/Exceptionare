var mysql = require('mysql');

    function connect(req,res){
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'exceptionare',
            debug: false,
        });
        connection.connect(function(err,result){
            if (err){
                res(err);
            }else{
                res(null,connection) ;
            }
        });
    }
    function disconnect(con){
        con.end();
    }

exports.connect = connect;
