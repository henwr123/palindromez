var fs = require('fs');
var os = require('os');

console.log('This will convert a file into single sentences per lines in a new file.');

fs.readFile('the-divine-comedy.txt', 'utf8', function (err, contents) {

    var lines = splitSentances(contents);

    var file = fs.createWriteStream('new.txt');

    lines.forEach(line => {

        line = line.trim();

        file.write(line + os.EOL);

    });

    file.end();

});

function splitSentances(str) {

    //replace all eol with space
    str = str.replace(/(\r\n|\n|\r)/gm," ");
    
    //return str.replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, "$1$2|").split("|");
    return str.match(/[^\.!\?]+[\.!\?]+/g);

}