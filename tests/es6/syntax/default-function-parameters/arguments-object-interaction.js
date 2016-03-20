'use strict';

var assert = require('assert');

(function(a = 'baz', b = 'qux', c = 'quux') {

    assert(arguments.length === 2);
    assert(arguments[0] === 'foo');
    assert(arguments[1] === 'bar');

    assert(a === 'foo');
    assert(b === 'bar');
    assert(c === 'quux');

    a = 'bar';
    b = 'foo';

    assert(arguments.length === 2);
    assert(arguments[0] === 'foo');
    assert(arguments[1] === 'bar');

    assert(a === 'bar');
    assert(b === 'foo');
    assert(c === 'quux');

}('foo', 'bar'));
