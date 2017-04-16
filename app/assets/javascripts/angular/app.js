var f8 = angular.module('f8',[
	'ui.router',
	'ui.bootstrap',
    'ngStorage',
    'toastr',
    'duScroll',
    '720kb.tooltips',
    'angular-loading-bar',
    'naif.base64',
    '720kb.datepicker',
    'ngAnimate',
    'djds4rce.angular-socialshare'
]);

f8.config(["$provide", function ($provide) {
	$provide.value("$apiRoot", "/");
}]);
f8.config(["$httpProvider", function ($httpProvider) {
    csrfToken = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.post['X-CSRF-Token'] = csrfToken;
    $httpProvider.defaults.headers.put['X-CSRF-Token'] = csrfToken;
    $httpProvider.defaults.headers.patch['X-CSRF-Token'] = csrfToken;
}]);

f8.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++) {
            input.push(i);
        }
        return input;
    };
});

f8.config(function (toastrConfig) {
    angular.extend(toastrConfig, {
        allowHtml: false,
        closeButton: true,
        closeHtml: '<button>&times;</button>',
        extendedTimeOut: 1000,
        iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning'
        },
        messageClass: 'toast-message',
        onHidden: null,
        onShown: null,
        onTap: null,
        progressBar: false,
        tapToDismiss: true,
        templates: {
            toast: 'directives/toast/toast.html',
            progressbar: 'directives/progressbar/progressbar.html'
        },
        timeOut: 5000,
        titleClass: 'toast-title',
        toastClass: 'toast'
    });
});
// f8.config(function($locationProvider){
//     $locationProvider.html5Mode(true).hashPrefix('!');
// });