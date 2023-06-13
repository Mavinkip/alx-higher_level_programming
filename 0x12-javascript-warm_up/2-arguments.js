#!/usr/bin/node
let m = process.argv.length;
const print = console.log;
if (m == 2) {
    print('No argument');
}else if (m == 3) {
    print('Argument found');
}else {
    print('Arguments found');
}
