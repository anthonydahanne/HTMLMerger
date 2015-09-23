var cheerio = require('cheerio');
var fs = require("fs"); //Load the filesystem module
const inputDir = "test/example/";
const resultFileLocation = "results/result.html";
const tocFileName = "toc.html";

doItAll(inputDir, resultFileLocation, tocFileName);

function doItAll(inputDir, resultFileLocation, tocFileName ) {
  var buffer = "";
  fs.readFile(inputDir + tocFileName, 'utf8', function (err, data) {
    if (err) console.log(err)
    $ = cheerio.load(data);
    $("a").each(function (index, link) {
      var link = link.attribs.href;
      console.log("Processing : " + link);
      var data = fs.readFileSync(inputDir + link, 'utf8');

      $ = cheerio.load(data);
      $("pre").removeClass();
      $("pre").addClass("prettyprint");
      $("pre").addClass("highlight");
      var preContent = $("pre").html();
      $("pre").html("<code class=\"language-java\" data-lang=\"java\">" + preContent + "</code>");

      buffer = buffer + $("body").html();
    })
    fs.writeFile(resultFileLocation, buffer, 'utf8', function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        console.log("all done !");
      }
    })
  });
}

