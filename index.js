var fs = require("fs"),
    readline = require('readline');

var converter = function(filename, callback){
	var jconf = {};
	var reader = readline.createInterface({
	    input: fs.createReadStream(filename),
	    output: process.stdout,
	    terminal: false
	});

	reader.on('line', function(line) {
	    var splittedline = line.split("=");
	    jconf[splittedline[0]] = splittedline[1];
	});

	reader.on('close', function(){
		callback(true, jconf);
	})
}

module.exports = converter;