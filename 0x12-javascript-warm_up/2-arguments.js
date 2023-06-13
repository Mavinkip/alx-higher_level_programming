#!/usr/bin/node
const m = process.argv.length;
if (m ===2) {
    console.log('No argument');
}
else if (m === 3) {
    console.log('Argument found');
}
else {
    console.log('Arguments found');
}
