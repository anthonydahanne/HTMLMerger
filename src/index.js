var cheerio = require('cheerio');
var fs = require("fs"); //Load the filesystem module
const inputDir = "../test/";
const outputDir = "../results/";

fs.readdir(inputDir, function (err, files) {
  console.log("Files found : " + files);
  for (var i = 0; i < files.length; i++) {
    (function (i) {
      console.log(files[i]);
      fs.readFile(inputDir + files[i], 'utf8', function (err, data) {
        $ = cheerio.load(data);
        console.log(files[i]);
        fs.writeFile(outputDir + files[i], $("body").html(), 'utf8', function (err, data) {
          if (err) {
            console.log(err)
          } else {
            console.log("Successfully converted " + files[i])
          }
        })
      })
    })(i);
  }
});
