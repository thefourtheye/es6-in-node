'use strict';

var assert = require('assert');

var a = Array(...[, , ]);
assert('0' in a);
assert('1' in a);
assert.strictEqual(a[0], undefined);
assert.strictEqual(a[1], undefined);
