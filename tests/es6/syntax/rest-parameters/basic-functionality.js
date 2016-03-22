'use strict';

var assert = require('assert');

(function(foo, ...args) {
    assert.strictEqual(foo, 'foo');
    assert(args instanceof Array);
    assert.strictEqual(args + '', 'bar,baz');
}('foo', 'bar', 'baz'));
