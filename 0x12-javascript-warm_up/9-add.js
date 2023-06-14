#!/usr/bin/node
function add (a, b) {
  const sum = a + b;
  console.log(sum);
}
const f = parseInt(process.argv[2]);
const s = parseInt(process.argv[3]);

if (!isNaN(f) && !isNaN(s)) {
  add(f, s);
} else {
  console.log('Invalid arguments');
}
