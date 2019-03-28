#!/usr/bin/env node
'use strict';
const fs = require('fs');
const meow = require('meow');
const gineta = require('.');

const cli = meow(`
  Usage
    gineta [directory] [output]

	Arguments
		directory: Specify the directory to get the git information from.
		output: Specify the optional output directory to write the output to.
  Examples
    $ gineta
// => {
				"date": "Thu Mar 28 12:22:58 CET 2019",
				"hostname": "vikepic.local",
				"username": "vikepic",
				"commit": {
					"hash": "7375605bd043d979a3a9edf09dee4964ca2c17c2",
					"subject": "Added one-lined output",
					"body": "",
					"author": "vikepic",
					"date": "Thu, 28 Mar 2019 12:21:35 +0100",
					"changes": "1 file changed, 17 insertions(+), 7 deletions(-)"
				}
			}
`);

const originPath = cli.input[0];

const jsonResult = gineta(originPath || '.');
const jsonString = JSON.stringify(jsonResult, null, 2);
const jsonReplaced = jsonString.replace(/\\n/g, '\n');

const destinationPath = cli.input[1];
if (destinationPath) {
	fs.writeFileSync(destinationPath, jsonReplaced);
} else {
	console.log(jsonReplaced);
}
