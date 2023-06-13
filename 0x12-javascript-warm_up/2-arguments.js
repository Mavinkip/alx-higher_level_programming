#!/usr/bin/node
const num = process.argv;
if (num.length === 2) {
  console.log('No argument');
} else if (num.length === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
