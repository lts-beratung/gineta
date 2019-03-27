# gineta [![Build Status](https://travis-ci.org/lts-beratung/gineta.svg?branch=master)](https://travis-ci.org/lts-beratung/gineta)

> Get the version information of a github repository in json format.

## Install

```
$ npm install --global gineta
```

```
$ gineta --help

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
```

## License

MIT © [lts-beratung](https://lts-beratung.de)
