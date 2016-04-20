# gulp-democase [![Build Status](https://travis-ci.org/lyweiwei/gulp-democase.svg?branch=master)](https://travis-ci.org/lyweiwei/gulp-democase)

> My hunky-dory gulp plugin


## Install

```
$ npm install --save-dev gulp-democase
```


## Usage

```js
const gulp = require('gulp');
const democase = require('gulp-democase');

gulp.task('default', () => {
	gulp.src('src/file.ext')
		.pipe(democase())
		.pipe(gulp.dest('dist'))
);
```


## API

### democase([options])

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

MIT © [Wei Wei](https://lyweiwei.github.io)
