'use strict';

var assert = require('assert');

assert.strictEqual(function(a, ...b) {}.length, 1); // eslint-disable-line no-unused-vars, max-len
assert.strictEqual(function(...c) {}.length, 0);    // eslint-disable-line no-unused-vars, max-len
