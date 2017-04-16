function IndexCtrl($rootScope, $scope, $state, $filter, $localStorage, toastr) {

    "use strict";

    $scope.initialize = function(){
        console.log('lalalala');
    }


    $scope.initialize();
};
f8.controller('IndexCtrl', IndexCtrl);
IndexCtrl.$inject = ['$rootScope'
    , '$scope'
    , '$state'
    , '$filter'
    , '$localStorage'
    , 'toastr'
];
