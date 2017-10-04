let fs = require('fs');

function readCat () {
	fs.readdir('../NodeJS_FilesOperations', 'utf-8', (err, files) => {
		if(err) throw err;
		fs.writeFile('./katalog.txt', files, ['utf-8'],  (err) => {
			if(err) throw err;
			console.log(files);
			fs.readFile('./katalog.txt', 'utf-8', (err, data) => console.log(data.green));
		});
	});
}
exports.print = readCat;