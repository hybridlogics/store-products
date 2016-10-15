var storeApp = angular.module('storeApp', [
    'ngRoute',
    'storeControllers',
    'storeServices',
    'storeFilters',
    'frapontillo.bootstrap-switch',
    'xeditable',
    'ui.bootstrap',
    'ng-uploadcare'
]);

storeApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/admin', {
        templateUrl: 'a/partials/admin.html',
        controller: 'StoreAdminCtrl'
    }).
    when('/home', {
        templateUrl: 'a/partials/home.html',
        controller: 'StoreHomeCtrl'
    }).
    when('/storeAproducts', {
        templateUrl: 'a/partials/storeAndProducts.html',
        controller: 'StoreProductsCtrl'
    }).
    when('/pickup', {
        templateUrl: 'a/partials/pickup.html',
        controller: 'StorePickUpCtrl'
    }).
    when('/delivery', {
        templateUrl: 'a/partials/delivery.html',
        controller: 'StoreDeliveryCtrl'
    }).
    when('/schedule', {
        templateUrl: 'a/partials/schedule.html',
        controller: 'StoreScheduleCtrl'
    }).
    when('/email', {
        templateUrl: 'a/partials/email.html',
        controller: 'StoreEmailCtrl'
    }).
    when('/output', {
        templateUrl: 'a/partials/output.html',
        controller: 'StoreOutputCtrl'
    }).
    otherwise({
        redirectTo: '/admin'
    });
}]);

//Required to set theme for xeditable
storeApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});