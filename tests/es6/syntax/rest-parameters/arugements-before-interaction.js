'use strict';

var assert = require('assert');

(function(foo, ...args) {
    foo = 'qux';
    // The arguments object is not mapped to the
    // parameters, even outside of strict mode.
    assert.strictEqual(arguments.length, 3);
    assert.strictEqual(arguments[0], 'foo');
    assert.strictEqual(arguments[1], 'bar');
    assert.strictEqual(arguments[2], 'baz');

    assert(typeof args, 'array');
    assert.strictEqual(args.length, 2);
    assert.strictEqual(args[0], 'bar');
    assert.strictEqual(args[1], 'baz');

    assert.strictEqual(foo, 'qux');
}('foo', 'bar', 'baz'));
