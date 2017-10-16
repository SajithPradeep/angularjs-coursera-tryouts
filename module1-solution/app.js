(function() {
    'use strict';

    angular.module('lunchApp', [])

    .controller('lunchController', lunchController);

    lunchController.$inject = ['$scope'];

    function lunchController($scope) {
        $scope.noFood = true;
        $scope.message = "";
        $scope.foodArray = "";

        $scope.checkFoodCount = function() {
            var foods = $scope.foodArray.split(",");
            var foodCount = 0;
            for (var i = 0; i < foods.length; i++) {
                if(foods[i].trim() != "") {
                    foodCount += 1;
                }
            }
            if(foodCount <= 3 && foodCount != 0) {
                $scope.message = "Enjoy!";
                $scope.noFood = false;
            } else if (foodCount > 3) {
                $scope.message = "Too much!";
                $scope.noFood = false;
            } else {
                $scope.message = "Please Enter Data first";
                $scope.noFood = true;
            }

        }
    };
})();