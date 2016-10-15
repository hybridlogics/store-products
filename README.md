# Store Products App #

"Store Products" is a very small and simple bakery/food shop management application


## INSTRUCTIONS: ##

Use WAMP/XAMPP server to run the application.


## PROJECT STRUCTURE: ##

    a/
    -- css/
     -- app.css
     -- bootstrap.min.css
     -- bootstrap-select.css
     -- bootstrap-switch.min.css
     -- bootstrap-theme.min.css
     -- xeditable.css
     -- angular-toggle-switch.css
    -- fonts/
    -- js/
     -- app.js
     -- controllers.js
     -- filters.js
     -- services.js
     -- angular.min.js
     -- resource.js
     -- angular-bootstrap-switch.min.js
     -- angular-route.min.js
     -- angular-uploadcare.js
     -- bootstrap.min.js
     -- bootstrap-select.js
     -- bootstrap-switch.min.js
     -- bootstrap-transition.js
     -- transition.js
     -- tooltip.js
     -- tab.js
     -- ui-bootstrap.min.js
     -- xeditable.min.js
    -- partials/
     -- admin.html
     -- delivery.html
     -- email.html
     -- home.html
     -- output.html
     -- pickup.html
     -- schedule.html
     -- storeAndProducts.html
    data/
    -- store.json
    img/
    index.html


## FEATURES: ##

1- Store and Bakery page with image uploading ability.
   -Simple CRUD for products.

2- Email page to create Admin/Client mails

3- Schedule page with on click editing

4- Pickup Configuration page with on click editing
   -Set pickup locations
   
5- Delivery page with on click editing


## TECHNOLOGIES: ##

- HTML 5

- Bootstrap 3+

- AngularJs

- UI-Modules

- xeditable

- UploadCare


## CODE SNIPPETS: ##

1- Routing:-

    :::javascript
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
            otherwise({
                redirectTo: '/admin'
            });
        }]);


2- Controller:-

    :::javascript
        var storeControllers = angular.module('storeControllers', []);
        
        storeControllers.controller('StoreAdminCtrl', ['$scope',
            function ($scope) {
            $scope.store = null;
        }]);