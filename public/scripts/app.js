angular
  .module('wineApp', ['ngRoute'])
  .config(config)
  .controller('wineShowController', wineShowController)
  .controller('wineIndexController', wineIndexController)
  // .directive('card', CardDirective)

// function CardDirective() {
//   var directive = {
//     restrict: 'EA',
//     templateUrl: '/views/templates/item.html',
//     replace: true,
//     scope: {
//       item = '='
//     }
//   };
//   return directive;
// }

config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/wineindex.html', // check if it needs .html
      controller: 'wineIndexController',
      controllerAs: 'wineIndexCtrl'
    })
    .when('/wines/:id', {
      templateUrl: '/view/templates/wineshow.html',
      controller: 'wineShowController',
      controllerAs: 'wineShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode ({
      enabled: true,
      requireBase: false
    });
};

wineIndexController.$inject = ['$http'];
function wineIndexController( $http ) {
  var vm = this;
  vm.wines = {};
  $http ({
    method: 'get',
    url: 'https://super-crud.herokuapp.com/wines'
  }).then(function successCallback(response) {
    // console.log('get req successful. response data is ', response.data.wines)
    vm.wines = response.data.wines
  }, function errorCallback(response) {
    console.log('get req error ', response)
  });
}

wineShowController.$inject = ['$http'];
function wineShowController( $http ) {

}
