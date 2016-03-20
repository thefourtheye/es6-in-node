'use strict';

var assert = require('assert');

(function(a = 1, b = 2) {
    assert(a === 3);
    assert(b === 2);
}(3));
