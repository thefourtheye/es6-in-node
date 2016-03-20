'use strict';

var assert = require('assert');

assert((function f(n) {
    if (n <= 0) {
        return 'foo';
    }
    return f(n - 1);
}(1e6)) === 'foo');
