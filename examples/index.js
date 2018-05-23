/**
 * 文件描述
 * @author ydr.me
 * @create 2016-06-27 17:34
 */


'use strict';


var Animation = require('blear.classes.animation');
var Fullpage = require('../src/index');

window.fp = new Fullpage({
    el: '#demo',
    slideAnimation: function (el, to, done) {
        var an = new Animation(el);

        an.transit(to);
        an.start(done);
        an.destroy();
    }
})
    .on('beforeSlide', function (index) {
        console.log('beforeSlide', index);
    })
    .on('afterSlide', function (index) {
        console.log('afterSlide', index);
    });

