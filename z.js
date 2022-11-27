var fs = require('fs');
var crypto = require('crypto');

var cipher = crypto.createDecipheriv('aes-256-cbc', crypto.randomBytes(32),crypto.randomBytes(16));
var input = fs.createReadStream('z.txt');
var output = fs.createWriteStream('2.txt');

input.pipe(cipher).pipe(output);

output.on('finish', function() {
  console.log('Encrypted file written to disk!');
});