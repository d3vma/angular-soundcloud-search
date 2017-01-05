app.controller("mainCtrl",function($scope, $http) {
    $scope.seach_input = '';
    $scope.client_id = "b1d604e6c71ffb73a022a80766d869f1";
    $scope.limit = 200;
    $scope.tracks = [];
    $scope.search = function() {
        $http({ url: "http://api.soundcloud.com/tracks/", 
            params: {
                q: $scope.seach_input,
                client_id: $scope.client_id,
                limit: $scope.limit
            }
        }).success(
            function(data) {
                $scope.tracks = data;
                console.log(data);
            }
        )
    };
});
