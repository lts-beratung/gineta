# gineta [![Build Status](https://travis-ci.org/lts-beratung/gineta.svg?branch=master)](https://travis-ci.org/lts-beratung/gineta)

> Get the version information of a github repository in json format.


## Install

```
$ npm install gineta
```


## Usage

```js
const gineta = require('gineta');

gineta('unicorns');
//=> 'unicorns & rainbows'
```


## API

### gineta(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `Object`

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global gineta
```

```
$ gineta --help

  Usage
    gineta [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ gineta
    unicorns & rainbows
    $ gineta ponies
    ponies & rainbows
```


## License

MIT © [valcaza](https://lts-beratung.de)
