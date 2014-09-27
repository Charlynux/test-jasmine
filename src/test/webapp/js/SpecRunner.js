require.config({
    baseUrl: "../../../main/webapp/js/",
    urlArgs: 'cb=' + Math.random(),
    paths: {
        jquery: 'jquery',
        underscore: 'underscore-min',
        jasmine: '../../../test/webapp/js/jasmine-standalone-2.0.0/lib/jasmine-2.0.0/jasmine',
        'jasmine-html': '../../../test/webapp/js/jasmine-standalone-2.0.0/lib/jasmine-2.0.0/jasmine-html',
        boot : '../../../test/webapp/js/jasmine-standalone-2.0.0/lib/jasmine-2.0.0/boot',
        rivets : 'rivets',
        spec: '../../../test/jasmine/spec/'
    },
    shim: {
        underscore: {
            exports: "_"
        },
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'boot': {
                deps: ['jasmine', 'jasmine-html'],
                exports: 'window.jasmineRequire'
              }
    }
});

window.store = "TestStore"; // override local storage store name - for testing
require(['boot'], function(){

    var specs = [];
    specs.push('spec/SimpleTest');

        require(specs, function(){
            window.onload();
        });
});