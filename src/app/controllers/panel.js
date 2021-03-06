var selectedBusStopName = "";
var selectedLineName = "";

function panelController($scope, busStopService, lineDetailsService, $log) {
  $log.info('panel controller initialized');
  $scope.accordion = 0;
  $scope.tab = 1;
  $scope.isCollapsed = true;

  busStopService.getStops(function(stops){
    $scope.busStops = stops;
    $scope.$apply();
  });
  lineDetailsService.getLinesDetails(function(lines) {
    $scope.linesDetails = lines;
  });

  $scope.selectTab = function (setTab) {
    if (setTab >0 && setTab<=4){
      $scope.tab = setTab;
      $scope.isCollapsed = !$scope.isCollapsed
    }
    else $scope.tab = 1;
  };

  $scope.ifTabSelected = function (checkTab) {
    return $scope.tab === checkTab;
  };

  $scope.showBusStopDetail = function showBusStopDetail(busStop){
    $scope.busStop = busStop;
  };

  $scope.readSelectedBusStop = function readSelectedBusStop(busStop){
    $scope.selectTab(1);
    selectedBusStopName = busStop;
  };

  $scope.readSelectedLine = function readSelectedLine(line){
    $scope.selectTab(2);
    selectedLineName = line;
  };

  $scope.changeBusStopDetail = function changeBusStopDetail(selectedBusStopName) {
    if ($scope.busStops !== undefined) {
      $scope.selectedBusStop = $scope.busStops.filter(function (singleBusStop) {
        return singleBusStop.name === selectedBusStopName;
      });
      $scope.showBusStopDetail($scope.selectedBusStop[0]);
    }
  };
}
