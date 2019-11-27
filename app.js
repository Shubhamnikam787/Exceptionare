
 //create database exceptionare;
 //use exceptionare;
 //create table image_files (img_id int(10) not null auto_increment, img blob not null,file_name varchar(50) not null,primary key (img_id));

var upload = require ("./models/uploadImg");

var upExcell = require ("./models/uploadExcel");

upExcell.uploadExcel("file_path"); //FilePath



//upload.upload("file_path"); ////image path in parameter including filename



 
 
