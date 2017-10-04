let fs = require('fs');
let colors = require('colors');
let readCat = require('./modules/readCat');

fs.readFile('./text.txt', 'utf-8', (err, data) => {
	console.log('Dane przed zapisem!'.blue);
	console.log(data );
	fs.appendFile('./text.txt', '\nA tak wyglądają po zapisie! ', (err) => {
		if(err) throw err;
		console.log('Zapisano!'.blue);
		fs.readFile('./text.txt', 'utf-8', (err, data) => {
			console.log('Dane po zapisie'.blue)
			console.log(data);
		});
	});
});
readCat.print();