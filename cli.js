#!/usr/bin/env node
'use strict';
const fs = require('fs');
const meow = require('meow');
const gineta = require('.');

const cli = meow(`
	Usage
		gineta [directory]

	Arguments
		directory: Specify the directory to get the git information from
	Examples
		$ gineta
// => {
				"date": "Wed Mar 27 15:11:39 CET 2019",
				"hostname": "vikepic.computer",
				"username": "vikepic",
				"gitCommitHash": "7858b44db7d0084466bafd1ab0681b10232ecba8",
				"gitVersion": "* commit 7858b44db7d0084466bafd1ab0681b10232ecba8 (HEAD -> master, origin/master)
				Author: vikepic <vikepic@mail.com>
				Date:   Wed Mar 27 14:07:37 2019 +0100

						:tada: Initial commit",
				"gitDirty": "",
				"gitChanges": "M cli.js
			 M index.js
			 M readme.md"
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
