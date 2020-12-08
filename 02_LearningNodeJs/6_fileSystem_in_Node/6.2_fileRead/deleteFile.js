var fs = require('fs');


// you should create new.txt file in same directory
// before run that code
fs.unlink("new.txt", function(err){ 
    console.log(err ? "File Delete Failed" :  "File Deleted"); 
  }); 