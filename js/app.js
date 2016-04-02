angular.module('transportApp', ['ngAnimate', 'ui.bootstrap']);

//hamburger menu
angular.module('transportApp')
  .controller('collapseMenu', function ($scope) {
  $scope.isCollapsed = true;
});


angular.module('transportApp').controller('busStopAccordion', function ($scope) {
  $scope.oneAtATime = true;

  $scope.busStops = [
    {
      name: 'Buraczana',
      bus: '145',
      destination: 'Karwiny szkoła',
      departures: ['0808', '0838', '0908']
    },
    {
      name: 'Strzelców',
      bus: '125',
      destination: 'Źródło Marii',
      departures: ['0805', '0835', '0905']
    }
    ]
});