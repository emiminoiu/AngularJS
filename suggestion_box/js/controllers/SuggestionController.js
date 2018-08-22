app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {

    $scope.post = suggestions.posts[$routeParams.id];

    //$scope.comments = suggestions.posts.comments;

    $scope.upVotesComments = function(comment) {

        comment.upvotes += 1;

    };


    $scope.addComment = function() {

        if (!$scope.comment || $scope.comment === "") {
            return;
        }

        $scope.post.comments.push({
            body: $scope.comment,
            upvotes: 0
        });

        $scope.comment = "";
    };


}]);