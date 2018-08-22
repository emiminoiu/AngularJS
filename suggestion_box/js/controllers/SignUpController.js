app.controller('SignUpController', ['$scope', 'accounts', function($scope, accounts) {


    $scope.AccList = accounts.AccList;

    $scope.addSuggestionsToBox = function() {

        //if input empty, don't submit
        if (!$scope.title || $scope.title === "") {
            return;
        }

        //push suggestion posts in suggestions.js
        $scope.posts.push({
            title: $scope.title,
            upvotes: 0,

        });

        //after submit, clear input

        $scope.title = '';
    }


    $scope.upVotes = function(post) {

        post.upvotes += 1;
    };


    /*  $scope.upVotes = function(post){
          $scope.post = {
              index : $scope.posts.indexOf(post),
              post:angular.copy(post)
          }
      }; */
}]);