function busStopsController($scope,busStopService,$uibModal, lineDetailsService) {

  //symulacja serwera
  $scope.busStops = busStopService.getStops();

  $scope.linesDetails = lineDetailsService.getLinesDetails();
  $scope.selectedBusStopFromLinesTab = [];

  $scope.getDetails = getDetails;
  $scope.changeBusStopDetail = changeBusStopDetail;

  $scope.$watch('ifTabSelected(1)', function() {
    $scope.changeBusStopDetail(selectedBusStopName);
     });

  function changeBusStopDetail(selectedBusStopName){
    $scope.selectedBusStop = $scope.busStops.filter(function(singleBusStop){
      return singleBusStop.name === selectedBusStopName;
    });
    $scope.showBusStopDetail($scope.selectedBusStop[0]);
  }

  function getDetails(busLine, busDestination, departureTime, busStopName, departureIndex) {

    $scope.busDetailsArray = [busLine, busDestination, departureTime, busStopName];
    openModal();

    $scope.filteredLineToAllDestinations = $scope.linesDetails
      .filter(function (busLine) {return busLine.line === $scope.busDetailsArray[0];})
      .map(function(destination){return destination.destination;});

    $scope.filteredLineToSpecificDestination = $scope.filteredLineToAllDestinations[0]
      .map(function(destination){return destination;})
      .filter(function(destination){return destination.destinationName === $scope.busDetailsArray[1];});

    $scope.allDepartures = $scope.filteredLineToSpecificDestination
      .map(function(item){return item.departure});

    $scope.timetable = $scope.allDepartures[0]
      .map(function(item){return item;})
      .filter(function(item){return item.index === departureIndex;});

    $scope.selectedBusStopIndex = $scope.filteredLineToSpecificDestination[0].busStops.indexOf(busStopName);
    $scope.pastBusStops = $scope.filteredLineToSpecificDestination[0].busStops.slice(0,$scope.selectedBusStopIndex);
    $scope.remainingBusStops = $scope.filteredLineToSpecificDestination[0].busStops.slice($scope.selectedBusStopIndex);

    function openModal() {
      $uibModal.open({
        animation: true,
        templateUrl: 'templates/busLineDetailsTemplate.html',
        controller: 'ModalInstanceCtrl',
        size: 'md',
        scope: $scope
      });
    }
  }
}