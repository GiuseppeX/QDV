app.controller('ctrlBUMain', function ($scope, $http) {
    console.log('ctrlBUMain loaded');

    $scope.dtEndDate = new Date();
    $scope.dtStartDate = $scope.dtEndDate;

    $scope.passData = function () {
        console.log('passData loaded');

        var strSDate = $scope.dtStartDate.getFullYear() + '-' + ($scope.dtStartDate.getMonth() + 1) + '-' + $scope.dtStartDate.getDate();
        var strSTime = $scope.dtStartDate.toLocaleTimeString();
        var strEDate = $scope.dtEndDate.getFullYear() + '-' + ($scope.dtEndDate.getMonth() + 1) + '-' + $scope.dtEndDate.getDate();
        var strETime = $scope.dtEndDate.toLocaleTimeString();
        
        apiUrl = 'http://localhost:5000/api/';
        url = apiUrl + 'time?argSDate=' + strSDate + '&argSTime=' + strSTime + '&argEDate=' + strEDate + '&argETime=' + strETime;

        function success(res) {
            console.log('data passed', res);
            $scope.data = res;
        }

        function error() {
            console.log('error');
        }
        $http.get(url).then(success, error);

    };

});