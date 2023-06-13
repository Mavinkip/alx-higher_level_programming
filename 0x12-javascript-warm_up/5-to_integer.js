#!/usr/bin/node
const number = parseInt(process.argv[2]);
const k = process.argv;
if (Number(k[2])) {
  console.log(`My number: ${number}`);
} else {
  console.log('Not a number');
}
