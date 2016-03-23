'use strict';

var assert = require('assert');

assert.strictEqual(['a', ...'bcd', 'e'][3], 'd');
