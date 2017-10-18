const net = require("net");

net.connect(process.argv[2], (stream) => {
  process.stdin
    .pipe(stream)
    .pipe(process.stdout);
});
