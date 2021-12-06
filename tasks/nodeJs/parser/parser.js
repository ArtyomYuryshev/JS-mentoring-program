/**
 * 1. You need to write a parser, which takes the "./test.json" file
 * and will create a new JSON file with the name "./parsed.json" with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the "./test.json" file
 * Please NOTE, that you should omit the ".html" extension
 *
 * Use the callback version of FS module.
 * DOCS:
 * 		Callback example: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_callback_example
 * 		fs.readFile: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfile_path_options_callback
 * 		fs.writeFile: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
 *
 * 2. Check yourself by running "npm run test:nodejs"
 */
const fs = require('fs');
const path = require("path");

const jsonParser = (done) => {
	fs.readFile(path.join(__dirname, "test.json"), 'utf-8', (err, data) => {
		if (err) console.log(err);

		const parsed = JSON.parse(data)
			.list.entries.map(
				(entries) => "http://doc.epam.com/" + entries.entry.name.slice(0, -5)
			)
			.map((docId) => ({ docId }));

		const string = JSON.stringify(parsed, null, "\t");

		fs.writeFile(path.join(__dirname, "parsed.json"), string, err => {
			if (err) console.log(err);
			done();
		});
	})
};

module.exports = {
	jsonParser
};