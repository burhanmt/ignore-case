# ignore-case

[![npm version](https://badge.fury.io/js/ignore-case.svg)](https://badge.fury.io/js/ignore-case)
[![Build Status](https://api.travis-ci.org/nickuraltsev/ignore-case.svg?branch=master)](https://travis-ci.org/nickuraltsev/ignore-case)
[![Coverage Status](https://coveralls.io/repos/nickuraltsev/ignore-case/badge.svg?branch=master&service=github)](https://coveralls.io/github/nickuraltsev/ignore-case?branch=master)

A JavaScript micro library that provides case-insensitive string helpers.

## Installation

Install using [npm](https://www.npmjs.org/):

```
npm install ignore-case
```

## Example

```javascript
var ignoreCase = require('ignore-case');
ignoreCase.equals('FOO', 'Foo'); // => true
```

## API

##### equals(string1, string2)

Returns `true` if the specified strings are equal, ignoring case; otherwise, `false`.

##### includes(string, searchString[, position])

Returns `true` if `string` contains `searchString`, ignoring case; otherwise, `false`.

##### startsWith(string, searchString[, position])

Returns `true` if `string` starts with `searchString`, ignoring case; otherwise, `false`.

##### endsWith(string, searchString[, position])

Returns `true` if `string` ends with `searchString`, ignoring case; otherwise, `false`.

##### indexOf(string, searchString[, position])

Returns the index of the first occurrence of `searchString` in `string`, ignoring case, or `-1` if `searchString` is not found.

## License

[MIT](https://github.com/nickuraltsev/ignore-case/blob/master/LICENSE)
