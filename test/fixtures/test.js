/* global $ENV */
var num = $ENV.TEST_NUMBER;
var str = $ENV.TEST_STRING;
var bool = $ENV.TEST_BOOL;
var object = $ENV.TEST_OBJECT;
var missing = $ENV.TEST_MISSING;
console.log(num, str, bool, object);
