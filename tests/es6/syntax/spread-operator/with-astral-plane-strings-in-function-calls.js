'use strict';

var assert = require('assert');

assert.strictEqual(Array(...'𠮷𠮶')[0], '𠮷');
