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

Output:

```js
/* global $ENV */
var num = 5.12;
var str = 'hello world';
var bool = true;
var object = {hi:'mom'};
var missing = null
```