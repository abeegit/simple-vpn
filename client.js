const net = require("net");

var stream = net.connect(process.argv[2], () => {
  console.log("Connection to VPN established");
});

process.stdin.pipe(stream).pipe(process.stdout);
