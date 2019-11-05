var fs = require('fs');
var os = require('os');



console.log('Let us find palindrones!');
console.log('');

fs.readFile('new.txt', 'utf8', function (err, contents) {

    var test = contents.split(os.EOL);

    var found = 0;
    var longest = 0;
    var longestPalindrone = [];

    test.forEach(function (content, index) {

        if (palindrome(content)) {

            console.log('Index ' + ( index + 1 ) + ' - ' + content);

            found++;

            if (content.length > longest) {
                longest = content.length;
                longestPalindrone = [];
                longestPalindrone.push(content);
            } else if (content.length === longest) {
                longestPalindrone.push(content);
            }
        }
    });

    console.log('');
    console.log('We found ' + found + ' palindrones');
    console.log('The longest palindrones found were "' + longestPalindrone + '"');
    console.log('The longest palindrone found was ' + longest + ' characters.');
});


function palindrome(str) {

    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');

    if (lowRegStr.length < 2) {
        return;
    }

    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
