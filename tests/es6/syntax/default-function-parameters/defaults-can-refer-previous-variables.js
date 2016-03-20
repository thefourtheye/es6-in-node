'use strict';

var assert = require('assert');

(function(a, b = a) {
    assert(b === 5);
}(5));
