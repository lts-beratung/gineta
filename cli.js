#!/usr/bin/env node
'use strict';
const meow = require('meow');
const gineta = require('.');

const cli = meow(`
	Usage
	  $ gineta [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ gineta
	  unicorns & rainbows
	  $ gineta ponies
	  ponies & rainbows
`);

console.log(JSON.stringify(gineta(cli.input[0] || '.'), null, 2));
