'use strict';

var assert = require('assert');

function f(n) {
    if (n <= 0) {
        return 'foo';
    }
    return g(n - 1);
}

function g(n) {
    if (n <= 0) {
        return 'bar';
    }
    return f(n - 1);
}

assert(f(1e6) === 'foo')
assert(f(1e6 + 1) === 'bar');
