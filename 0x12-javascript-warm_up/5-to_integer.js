#!/usr/bin/node
const k = process.argv;
const number = parseInt(process.argv[2]);
if (!k[2] === number) {
  console.log('first argument converted in integer');
} else {
  console.log('Not a number');
}
