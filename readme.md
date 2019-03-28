# gineta [![Build Status](https://travis-ci.org/lts-beratung/gineta.svg?branch=master)](https://travis-ci.org/lts-beratung/gineta)

> Get the version information of a github repository in json format.

## Install

```
$ npm install --global gineta
```

```
$ gineta --help

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
```

## License

MIT © [lts-beratung](https://lts-beratung.de)
