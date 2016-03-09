define(["require", "exports"], function (require, exports) {
    "use strict";
    var indexController = (function () {
        function indexController() {
        }
        indexController.prototype.contructor = function ($scope) {
            this.dateSample = "";
        };
        indexController.$inject = ["$scope"];
        return indexController;
    }());
    exports.indexController = indexController;
});
