'use strict';

var assert = require('assert');

var iterable = (function*() {
    yield 1;
    yield 2;
    yield 3;
}());
assert.deepStrictEqual([0, ...iterable, 4], [0, 1, 2, 3, 4]);
