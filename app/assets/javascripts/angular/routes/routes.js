f8.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
    .state('base', {
        abstract: true,
        templateUrl: 'assets/angular/templates/base.html',
        controller: 'IndexCtrl'
    })
    .state('index', {
        url: '/index',
        parent: 'base',
        templateUrl: 'assets/angular/templates/index.html',
        controller: 'IndexCtrl'        
    })
});
f8.run(['$rootScope', '$localStorage', function ($rootScope, $localStorage, $state, Subdomain) {
    $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, from, fromParams, $state) {
    });
    $rootScope.$on('$stateChangeError', function (event, to, toParams, from, fromParams, error, $state, $localStorage) {
    });
}]);