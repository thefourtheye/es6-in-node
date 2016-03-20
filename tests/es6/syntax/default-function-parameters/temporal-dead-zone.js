'use strict';

var assert = require('assert');

(function() {
    assert.throws(function() {
        eval('(function(a=a){}())');
    }, /ReferenceError: a is not defined/);
    assert.throws(function() {
        eval('(function(a=b, b){}())');
    }, /ReferenceError: b is not defined/);
}());
