 // there is some errors
 // todo find out why 
 
 var zlib = require("zlib");
 var gzip = zlib.createGzip();
 var fs = require('fs');
 var inFile = fs.createReadStream('fileZlib.js');
 var outFile = fs.createWriteStream('zlib_file.gz');
 inFile.pipe(gzip).pipe(outFile);
 gzip.flush();
 outFile.close();
 var gunzip = zlib.createGunzip();
 var inFile = fs.createReadStream('zlib_file.gz');
 var outFile = fs.createWriteStream('zlib_file.unzipped');
 inFile.pipe(gunzip).pipe(outFile);