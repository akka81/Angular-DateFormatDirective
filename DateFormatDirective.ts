﻿import moment = require('moment');
interface IvalidationAttribute extends ng.IAttributes {
    dateformatValidation: string;
    dateisafterValidation: string;
    dateisbeforeValidation: string;
    kFormat: string;
    ngModel;
}
export class dateformatValidation implements ng.IDirective {
    restrict = 'A';
    require = 'ngModel';
    replace = true;
    $scope: {};

    public link(scope: any, element: ng.IAugmentedJQuery, attrs: IvalidationAttribute, ctrl: any) {
        var Validate = () => {
            
            var valFormat = "D/M/YYYY"; //"M/D/YYYY";
            var isValid = true;
            if (attrs.dateformatValidation)
                valFormat = attrs.dateformatValidation;

            if (!ctrl.$viewValue)
                isValid = true;
            else {

                if (!moment.utc(ctrl.$viewValue, valFormat, true).isValid()) {
                    if (attrs.kFormat) {
                        if (!moment.utc(ctrl.$viewValue, attrs.kFormat.replace(/'/g, "").toUpperCase(), true).isValid())
                            isValid = false;
                        else
                            isValid = true;
                    }
                    else
                        isValid = false;

                }
                else
                    isValid = true;
            }

            //Se formato valido, verifico eventuale regola isAfter
            if (isValid) {
                if (attrs.dateisafterValidation) {
                    var isAfter = true;
                    var otherDate = moment.utc(ctrl.$$parentForm[attrs.dateisafterValidation].$viewValue, ["L", "LL"]);
                    if (otherDate.isAfter(moment.utc(ctrl.$viewValue, ["L", "LL"]))) {
                        isAfter = false;
                    }
                    else {
                        isAfter = true;
                    }
                    ctrl.$setValidity('dateisafterValidation', isAfter);
                }
            }

            //Se formato valido, verifico eventuale regola isBefore
            if (isValid) {
                if (attrs.dateisbeforeValidation) {
                    var isBefore = true;
                    if (ctrl.$$parentForm[attrs.dateisbeforeValidation].$viewValue != null && ctrl.$$parentForm[attrs.dateisbeforeValidation].$viewValue != '') {
                        var otherDate = moment.utc(ctrl.$$parentForm[attrs.dateisbeforeValidation].$viewValue, ["L","LL"]);
                        if (otherDate.isBefore(moment.utc(ctrl.$viewValue, ["L", "LL"]))) {
                            isBefore = false;
                        }
                        else {
                            isBefore = true;
                        }
                    }
                    ctrl.$$parentForm[attrs.dateisbeforeValidation].$setValidity('dateisafterValidation', isBefore);
                }
            }

            ctrl.$setValidity('dateformatValidation', isValid);
            return ctrl.$viewValue;
        }
        ctrl.$parsers.unshift(Validate);
        ctrl.$formatters.push(function (modelValue) { return modelValue; });
        attrs.$observe("dateformatValidation", () => { Validate(); })
    }
}
//creating directive Module
var DataValDirective = angular.module("DataValidationDirective", []);
DataValDirective.directive("dateformatValidation", () => new dateformatValidation());


  