'use strict';

var assert = require('assert');

assert.strictEqual([...'𠮷𠮶'][0], '𠮷');
