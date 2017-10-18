const net = require("net");
const { Transform } = require("stream");

/* Example of a transform stream */
var printInput = new Transform({
  /**
    * transform <Function>
    * @chunk - <Buffer>
    * @callback - <Function>
    *   @err - <Object>
    *   @chunk - <Buffer>
    */
  transform: (chunk, encoding, callback) => {
    console.log("Received chunk: " + chunk.toString());
    callback(null, chunk);
  }
});

net.createServer((stream) => {
  stream
    .pipe(printInput)
    .pipe(net.connect(5000))
    .pipe(stream);
}).listen(process.argv[2]);
