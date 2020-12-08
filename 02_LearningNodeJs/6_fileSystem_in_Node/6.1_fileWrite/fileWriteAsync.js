var fs = require('fs');
var fruitBowl = ['apple', 'orange', 'banana', 'grapes'];

function writeFruit(fd){
    if(fruitBowl.length){
        var fruit = fruitBowl.pop() + " ";
        fs.write(fd, fruit, null, null, function(err, bytes){
            if(err){
                console.log('File Write Failed.');
            } else {
                console.log('Wrote: %s %d bytes', fruit, bytes);
                writeFruit(fd);
            }
        });
    } else {
        //without empty return get error
        fs.close(fd, ()=> { return;});
    }
}

fs.open('fruit.txt', 'w', function(err, fd){
    if(err) console.log(err);
    writeFruit(fd);
});