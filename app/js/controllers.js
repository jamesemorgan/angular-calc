'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('CalcCtrl', function CalcCtrl($scope, $log){

  	$scope.history 	= "";
  	$scope.result	= "";

	$scope.digit = function(val) {
		$log.info("Digit : " + val);
		$scope.history += val;
	}

	$scope.action = function(val) {
		$log.info("Action : " + val);
		$scope.history += val;
	}

	$scope.answer = function(){
		try {
			var equation = $scope.history.replace(/x/g, '*').replace(/÷/g, '/');
			$scope.result = eval(equation)			
		} catch(e) {
			$scope.result = "Error";
		}
	}

	$scope.clear = function(){
		$scope.result 	= "";
		$scope.history	= "";
	}

	$scope.back = function(){
		$scope.result 	= "";
		$scope.history	= $scope.history.substring(0, $scope.history.length - 1);
	}

  });