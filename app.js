/// <reference path="./typings/requirejs/require.d.ts" />
require.config({
    paths: {
        angular: 'node_modules/angular/angular.min',
        jQuery: 'node_modules/jquery/dist/jquery.min',
        moment: 'node_modules/moment/min/moment-with-locales.min',
        'DateFormatDirective': 'DateFormatDirective',
    },
    shim: {
        'angular': { deps: ['jQuery'], 'exports': 'angular' },
        'DateFormatDirective': { deps: ['angular'] }
    },
    waitSeconds: 20
});
//Application bootstrap
require(['angular', 'DateFormatDirective', 'indexController'], function (ng, dfd, indexCtrl) {
    var app = angular.module('dataValidationSample', ['DataValidationDirective']);
    app.controller('indexController', indexCtrl.indexController);
    angular.bootstrap(document, ['dataValidationSample']);
});
//# sourceMappingURL=require-config.js.map 
