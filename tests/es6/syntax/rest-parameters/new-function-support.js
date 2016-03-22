'use strict';

var assert = require('assert');

assert(new Function('a', '...b',
    'return b instanceof Array && a+b === \'foobar,baz\';'
)('foo', 'bar', 'baz'));
