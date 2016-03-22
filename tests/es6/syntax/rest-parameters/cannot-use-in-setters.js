'use strict';

var assert = require('assert');

(function() {
    try {
        eval('({set e(...args){}})');
        assert(false);
    } catch (e) {
        assert(true);
    }
}());
