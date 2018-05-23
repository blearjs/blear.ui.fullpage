/**
 * blear.ui.fullpage
 * @author ydr.me
 * @create 2016年06月04日14:09:36
 * @update 2018年05月23日10:44:59
 */

'use strict';

var layout = require('blear.core.layout');
var modification = require('blear.core.modification');
var selector = require('blear.core.selector');
var Slider = require('blear.ui.slider');
var array = require('blear.utils.array');
var object = require('blear.utils.object');
var Wheel = require('blear.classes.wheel');

var defaults = {
    el: '',
    slideAnimation: function (el, to, done) {
        done();
    }
};
var Fullpage = Slider.extend({
    className: 'Fullpage',
    constructor: function (options) {
        var the = this;

        the[_options] = object.assign({}, defaults, options);
        the[_el] = selector.query(the[_options].el)[0];
        the[_initNode]();
        Fullpage.parent(the, {
            el: the[_el],
            width: layout.width(window),
            height: layout.height(window),
            loop: false,
            auto: false,
            spring: false,
            direction: 'y',
            slideAnimation: options.slideAnimation
        });
        the[_initWheel]();
    },

    // add: function () {
    //
    // },
    //
    // remove: function () {
    //
    // },

    destroy: function () {
        var the = this;

        Fullpage.invoke('destroy', the);
    }
});
var sole = Fullpage.sole;
var proto = Fullpage.prototype;
var _options = sole();
var _initNode = sole();
var _initWheel = sole();
var _el = sole();
var _listEl = sole();
var _wheel = sole();


proto[_initNode] = function () {
    var the = this;
    var listEl = the[_listEl] = modification.create('div');
    var childEls = selector.children(the[_el]);

    array.each(childEls, function (index, el) {
        modification.insert(el, listEl);
    });

    modification.insert(listEl, the[_el]);
};

proto[_initWheel] = function () {
    var the = this;

    the[_wheel] = new Wheel({
        el: the[_el],
        smooth: false
    }).on('wheel', function (meta) {
        meta.direction === 'up' ? the.next() : the.prev();
    });
};

module.exports = Fullpage;
