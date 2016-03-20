'use strict';

var assert = require('assert');

assert(new Function("a = 1", "b = 2",
    "return a === 3 && b === 2;"
)(3));
