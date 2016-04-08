(function () {
  angular.module('transportApp')
    .service('busStopService', busStopsService);

  function busStopsService() {
    var stops = [
      {
        name: 'Buraczana',
        bus: [
          {
            line: '145',
            destination: 'Tuwima',
            departures: ['0709', '0739', '0809', '0839', '0909',
              '0939', '1009', '1039', '1109', '1139', '1209', '1239', '1309',
              '1339', '1409', '1439', '1509', '1539', '1609', '1639', '1709', '1739',
              '1809', '1839', '1909', '1939', '2009']
          },
          {
            line: '145',
            destination: 'Strzelców',
            departures: ['0727', '0757', '0826', '0856', '0926',
              '0956', '1026', '1056', '1126', '1156', '1226', '1256', '1326',
              '1356', '1426', '1456', '1526', '1556', '1626', '1656', '1726', '1756',
              '1826', '1856', '1926', '1956', '2026']
          },
          {
            line: 'R',
            destination: 'Dworzec PKP',
            departures: ['0436', '0527', '0557', '0616', '0639',
              '0653', '0700', '0716', '0721', '0744', '0810', '0935', '1050',
              '1135', '1204', '1247', '1315', '1340', '1450', '1530', '1639', '1739',
              '1720', '1839', '1929', '1919', '2019']
          },
          {
            line: 'R',
            destination: 'Kacze Buki',
            departures: ['0420', '0515', '0547', '0606', '0629',
              '0633', '0700', '0726', '0741', '0754', '0814', '0939', '1055',
              '1125', '1224', '1247', '1305', '1320', '1430', '1510', '1629', '1739',
              '1730', '1819', '1919', '1939', '2019']
          }
        ]
      },
      {
        name: 'Gdańska',
        bus: [
          {
            line: '153',
            destination: 'Fiołkowa',
            departures: ['0808', '0838', '1036', '1124', '1239', '1347', '1424',
              '1532', '1634', '1755']
          },
          {
            line: '160',
            destination: 'Słonecza',
            departures: ['0807', '0837', '1930', '2025']
          }
        ]
      },
      {
        name: 'Tuwima',
        bus: [
          {
            line: '145',
            destination: 'Strzelców',
            departures: ['0721', '0751', '0821', '0851', '0921',
              '0951', '1021', '1051', '1121', '1151', '1221', '1235', '1305',
              '1351', '1421', '1451', '1521', '1551', '1621', '1651', '1721', '1751',
              '1821', '1851', '1921', '1951', '2021']
          }
        ]
      },

      {
        name: 'Strzelców',
        bus: [
          {
            line: '145',
            destination: 'Tuwima',
            departures: ['0705', '0735', '0805', '0835', '0905',
              '0935', '1005', '1035', '1105', '1135', '1205', '1235', '1305',
              '1335', '1405', '1435', '1505', '1535', '1605', '1635', '1705', '1735',
              '1805', '1835', '1905', '1935', '2005']
          }
        ]
      },

      {
        name: 'Słoneczna',
        bus: [
          {
            line: '153',
            destination: 'Fiołkowa',
            departures: ['0805', '0835', '1030', '1120', '1235', '1343', '1420',
              '1532', '1630', '1750']
          },
          {
            line: '160',
            destination: 'Słoneczna',
            departures: ['0809', '0840', '1940', '2030']
          }
        ]
      }
    ];

    this.getStops = function () {
      return stops;
    }
  }
})();