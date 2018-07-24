app.controller("ctrlBuMain", function ($scope, $location, servDatesTimes) {
    $scope.mainTitle = "Quality Defect Viewer: Building Main";

    $scope.toBuSummary = function () {
        servDatesTimes.set($scope.dtStartDate)
        $location = "#/buSumm.htm";
    }
});

app.controller("ctrlBuSumm", function ($scope, servDatesTimes) {
    $scope.msg = servDatesTimes.get();
});