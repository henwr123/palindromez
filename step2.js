var fs = require('fs');
var os = require('os');

console.log('This will convert sentences into words into a new file.');

fs.readFile('new.txt', 'utf8', function (err, contents) {

    var words = contents.split(" ");
    words.sort();

    var final = [];

    words.forEach(word => {
        if (final.indexOf(word) === -1) {
            final.push(word);
        }
    });

    final.sort();

    //fs.unlinkSync('final.txt');

    var file = fs.createWriteStream('final.txt');

    final.forEach(line => {

        line = line.trim();

        file.write(line + '\n');

    });

    file.end();

});