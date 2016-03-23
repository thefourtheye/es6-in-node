'use strict';

var assert = require('assert');

var iterable = (function*() {
    yield 1;
    yield 2;
    yield 3;
}());
assert.strictEqual(Math.max(...iterable), 3);
