'use strict';

var assert = require('assert');

(function(a = 1, b = 2) {
    assert(a === 1);
    assert(b === 3);
}(undefined, 3));
