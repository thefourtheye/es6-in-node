'use strict';

var assert = require('assert');

assert.strictEqual(function(a, ...b) {}.length, 1);
assert.strictEqual(function(...c) {}.length, 0);
