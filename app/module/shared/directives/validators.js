
'use strict';

var shared=angular.module('shared');
/*
 * Allows only Integer
 */
shared.directive('onlyNumber', function ($parse) {
  return {
    restrict: 'A',
    link: function ($scope, $elem, attrs) {
        $elem.onlyNumber();
    }
  }
});
/*
 * Directive to allow Integer and Float Values
 * 
 */
shared.directive('allowNumericwithdecimal', function () {
    return function (scope, element, attrs) {
        element.bind("keypress keyup blur", function (event) {            
          if ((event.which != 46 || angular.element(element).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
          }
        });
    };
});
/*
 * Allows only email in Element
 */
shared.directive('onlyEmail', function ($parse) {
  return {
    restrict: 'A',
    link: function ($scope, $elem, attrs) {
        $elem.onlyEmail();
    }
  }
});
/*
 * Allows only Letter
 */
shared.directive('onlyLetter', function ($parse) {
  return {
    restrict: 'A',
    link: function ($scope, $elem, attrs) {
        $elem.onlyLetter();
    }
  }
});

/*
 * Allows only Alphanumeric
 */
shared.directive('onlyAlphanumeric', function ($parse) {
  return {
    restrict: 'A',
    link: function ($scope, $elem, attrs) {
        $elem.onlyAlphaNumeric();
    }
  }
});

/*
 * OTP Common Directive to validate
 */
shared.directive('otpValidation', function ($parse) {
    return {
        restrict: 'A',
        link: function ($scope, $elem, attrs) {
            $elem.on("click", function () {
                var properties = angular.fromJson(attrs.otpValidation),
                ruleData = {required: true},
                msgData = {required: "Please fill in"},rules={}, messages ={};
                rules[properties.field] = ruleData;
                messages[properties.field] = msgData;
                $scope.ajaxForm = angular.element(".otpForm").validate({
                    errorElement: "div",
                    ignore: '.ignore',
                    highlight: function (element) {
                        var field = $(element);
                        if (field.is("select")) {
                            field.parent().addClass("field-error");
                        }
                        field.parent().parent().addClass("field-error");
                    },
                    unhighlight: function (element, errorClass) {
                        var field = $(element);

                        field.parent().parent().removeClass("field-error");
                    },
                    errorPlacement: function (error, element) {
                        if(properties.type == 'otp') {
                          element.closest('.fieldcontainer').find('.txt-sms-otp').before(error);
                        } 
                    },
                    rules: rules,
                    messages: messages
                });
                $scope.isValidOTP = $scope.ajaxForm.form();
            });
        }
    }
});

