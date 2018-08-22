app.controller('LoginController', function($scope, $location) {
    $scope.submit = function() {

        if ($scope.username === "username" && $scope.password === "password") {
            $location.path('/home');
        }
    };

});