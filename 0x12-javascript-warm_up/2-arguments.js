#!/usr/bin/node
let m = process.argv.length -2;
if (!m) {
    console.log('No argument');
}else if (m == 1) {
    console.log('Argument found');
}else {
    console.log('Arguments found');
}
