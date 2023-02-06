const http = require("http");
const potrace = require("potrace"),
  fs = require("fs");
const { randomIntFromInterval } = require("./utils");

// You'll find the SVG's in converted folder
potrace.trace(
  `./images/3.jpg`,
  //   { steps: [40, 85, 135, 180], color: "#ccc", background: "#0000FF" }, PARAMS
  function (err, svg) {
    if (err) throw err;
    fs.writeFileSync(
      `./converted/output_${randomIntFromInterval(5, 1000)}.svg`,
      svg
    );
  }
);

http
  .createServer(function (req, res) {
    res.write(
      "<h1>Hey, this is a demo of how to get started with potrace!!!</h1>"
    );
    res.end();
  })
  .listen(8080);
