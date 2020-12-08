var fs = require('fs');
fs.stat('fileStats.js', function(err, stats){
    if(!err){
        console.log('stats: ' + JSON.stringify(stats, null,
        " "));
    }

    console.log(stats.isFile() ? "Is a File" : "Is not a File");

    console.log(stats.isDirectory() ? "Is a Folder" : "Is not a Folder");

    console.log(stats.isSocket() ? "Is a Socet" : "Is not a Socet");

    stats.isDirectory();
    stats.isBlockDevice();
    stats.isCharacterDevice();
    stats.isFIFO();
    stats.isSocket();
})