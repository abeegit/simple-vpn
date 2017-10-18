const net = require("net");
const { Transform } = require("stream");

var toUpper = new Transform({
  transform: (chunk, encoding, callback) => {
    callback(null, chunk.toString().toUpperCase());
  }
});

net.createServer((stream) => {
  stream
    .pipe(toUpper)
    .pipe(stream);
}).listen(5000);
