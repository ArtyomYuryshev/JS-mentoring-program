/**
 * You need to write a parser, which takes the ./test.json file
 * and will create a new JSON file with the name parsed.json with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the ./test.json file
 * Please NOTE, that you should omit the .html extension
 * Check yourself by running npm run test:nodejs
 */
const fs = require("fs");

const jsonParser = (done) => {
  fs.readFile(
    "./tasks/nodeJs-callback/parser/test.json",
    "utf-8",
    function (err, content) {
      if (err) throw err;
      const data = JSON.parse(content);
      const docIds = data.list.entries.map(({ entry: { name } }) => ({
        docId: `http://doc.epam.com/${name.slice(0, name.length - 4)}`,
      }));
      fs.writeFile(
        "./tasks/nodeJs-callback/parser/parsed.json",
        JSON.stringify(docIds),
        function (error) {
          if (error) throw error;
          done();
        }
      );
    }
  );
};

module.exports = {
  jsonParser,
};
