'use strict';

var assert = require('assert');

(function(a = function() {
    return typeof b;
}) {
    var b = 1;
    assert.strictEqual(a(), 'undefined');
}());
