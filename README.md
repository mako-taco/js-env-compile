js-env-compile
==============

Replaces special directives in your javascript files with environment variables

Example:

```bash
TEST_BOOL=true
TEST_NUMBER=5.12 
TEST_OBJECT={hi:\'mom\'} 
TEST_STRING="'hello world'"

./bin/jsenv <test/fixtures/test.js
```

```js
/* global $ENV */
var num = $ENV.TEST_NUMBER;
var str = $ENV.TEST_STRING;
var bool = $ENV.TEST_BOOL;
var object = $ENV.TEST_OBJECT;
var missing = $ENV.TEST_MISSING;

console.log(num, str, bool, object);
```

Output:

```js
/* global $ENV */
var num = 5.12;
var str = 'hello world';
var bool = true;
var object = {hi:'mom'};
var missing = null
```