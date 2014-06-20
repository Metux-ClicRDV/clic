var clicApp = angular.module('clicApp', []);

clicApp.factory('CurrentEmployee', function(){
	var current = {};

	return {
		setEmployee : function(e){
			current = e;
		},

		getEmployee : function() {
			return current;
		}
	};
});

clicApp.controller('ModalCtrl', function ($scope, CurrentEmployee, $interval) {
  	$interval(function() {
  		$scope.profil = CurrentEmployee.getEmployee();
  	}, 1000);
});

clicApp.controller('IndexCtrl', function ($scope, $http, CurrentEmployee) {
  	
  $http.get(window.location + '/employees.json').success(function(data) {
    $scope.employees = data;
  });

	$scope.handleClick = function(emp){
		CurrentEmployee.setEmployee(emp);
	}

});
