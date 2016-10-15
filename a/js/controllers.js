var storeControllers = angular.module('storeControllers', []);

//Admin Controller
storeControllers.controller('StoreAdminCtrl', ['$scope', 'StoreService',
function ($scope, StoreService) {

        $scope.store = null;
        //To retrieve json data from 'StoreService' into a variable 'store'
        StoreService.success(function (data) {
            $scope.store = data.store;
        });

}]);

//Home Controller
storeControllers.controller('StoreHomeCtrl', ['$scope', 'StoreService',
function ($scope, StoreService) {

        $scope.store = null;
        //To retrieve json data from 'StoreService' into a variable 'store'
        StoreService.success(function (data) {
            $scope.store = data.store;
        });

}]);

//Store & Products Controller
storeControllers.controller('StoreProductsCtrl', ['$scope', 'StoreService',
function ($scope, StoreService) {

        $scope.store = null;

        //To retrieve json data from 'StoreService' into a variable 'store'
        StoreService.success(function (data) {
            $scope.store = data.store;

            //The variables for slice filter for product columns
            $scope.prodLengthSlice = $scope.store.products.length / 3;
            $scope.sl1c = 0;
            $scope.el1c = $scope.prodLengthSlice;
            $scope.sl2c = $scope.prodLengthSlice;
            $scope.el2c = $scope.prodLengthSlice * 2;
            $scope.sl3c = $scope.prodLengthSlice * 2;
            $scope.el3c = $scope.store.products.length;
        });

        //To refresh the product lists in 'Store & Products' page
        $scope.refreshList = function () {
            //The variables for slice filter for product columns
            $scope.prodLengthSlice = $scope.store.products.length / 3;
            $scope.sl1c = 0;
            $scope.el1c = $scope.prodLengthSlice;
            $scope.sl2c = $scope.prodLengthSlice;
            $scope.el2c = $scope.prodLengthSlice * 2;
            $scope.sl3c = $scope.prodLengthSlice * 2;
            $scope.el3c = $scope.store.products.length;
        }

        $scope.storePrintable = JSON.stringify($scope.store, null, 2);
        $scope.slug = "market_meals";
        $scope.newJSON = "";

        //To save data into the json
        $scope.save = function () {
            console.log("Saved!");
            if (!$scope.newJSON == "") {
                $scope.store = JSON.parse($scope.newJSON);
                $scope.newJSON = "";
                $scope.storePrintable = JSON.stringify($scope.store, null, 2);
            }
            for (x in $scope.store.products) {
                $scope.store.products[x].fromStore = $scope.slug;
                $scope.store.products[x].id = x;
                if ($scope.store.products[x].$$hashKey) {
                    delete $scope.store.products[x].$$hashKey
                }
            }
            //Remove $$hashKey from schedules too...
            for (x in $scope.store.options.ownZone.schedules) {
                if ($scope.store.options.ownZone.schedules[x].$$hashKey) {
                    delete $scope.store.options.ownZone.schedules[x].$$hashKey
                }
            }
            //DeliveryZone & DZ Name are based on the slug and store name.
            $scope.store.options.deliveryZone = $scope.slug
            $scope.store.options.deliveryZoneName = $scope.store.info.name;
            $scope.storePrintable = JSON.stringify($scope.store, null, 2);
        }

        $scope.titleShow = true;
        //To show/hide title
        $scope.toggle = function (thing) {
                if ($scope.titleShow == true) {
                    $scope.titleShow = false
                } else {
                    $scope.titleShow = true
                }
            }
            //To save user defined title into title's json object 
        $scope.saveTitle = function () {
            $scope.store.title = $scope.title;
        };
        $scope.taglineShow = true;
        //To show/hide tagline
        $scope.toggleTagline = function (thing) {
                if ($scope.taglineShow == true) {
                    $scope.taglineShow = false
                } else {
                    $scope.taglineShow = true
                }
            }
            //To save user defined tagline into tagline's json object 
        $scope.saveTagline = function () {
            $scope.store.tagline = $scope.tagline;
        };
        $scope.showcaseItemShow = {};
        //To show/hide products
        $scope.toggleShowcaseItem = function (key) {
            if ($scope.showcaseItemShow[key] == true) {
                $scope.showcaseItemShow[key] = false
            } else {
                $scope.showcaseItemShow[key] = true
            }
        }
        $scope.configShow = true;
        //To show/hide config button and options
        $scope.toggleConfig = function (thing) {
            if ($scope.configShow == true) {
                $scope.configShow = false
            } else {
                $scope.configShow = true
            }
        }
        $scope.categoryShow = false;
        //To show/hide category options
        $scope.toggleCategoryOptions = function (thing) {
            if ($scope.categoryShow == false) {
                $scope.categoryShow = true
            } else {
                $scope.categoryShow = false
            }
        }

}]);

//Pick Up Controller
storeControllers.controller('StorePickUpCtrl', ['$scope', 'StoreService',
function ($scope, StoreService) {

        $scope.store = null;
        //To retrieve json data from 'StoreService' into a variable 'store'
        StoreService.success(function (data) {
            $scope.store = data.store;

            //The variables for slice filter for location columns
            $scope.locLengthSlice = $scope.store.options.ownZone.locations.length / 3;
            $scope.sl1c = 0;
            $scope.el1c = $scope.locLengthSlice;
            $scope.sl2c = $scope.locLengthSlice;
            $scope.el2c = $scope.locLengthSlice * 2;
            $scope.sl3c = $scope.locLengthSlice * 2;
            $scope.el3c = $scope.store.options.ownZone.locations.length;
        });

        //To refresh the location lists in 'Pick Up' page
        $scope.refreshLocations = function () {
            //The variables for slice filter for location columns
            $scope.locLengthSlice = $scope.store.options.ownZone.locations.length / 3;
            $scope.sl1c = 0;
            $scope.el1c = $scope.locLengthSlice;
            $scope.sl2c = $scope.locLengthSlice;
            $scope.el2c = $scope.locLengthSlice * 2;
            $scope.sl3c = $scope.locLengthSlice * 2;
            $scope.el3c = $scope.store.options.ownZone.locations.length;
        }

        $scope.storePrintable = JSON.stringify($scope.store, null, 2);
        $scope.slug = "market_meals";
        $scope.newJSON = "";

        //To save data into the json
        $scope.save = function () {

            if (!$scope.newJSON == "") {
                $scope.store = JSON.parse($scope.newJSON);
                $scope.newJSON = "";
                $scope.storePrintable = JSON.stringify($scope.store, null, 2);
            }

            for (x in $scope.store.products) {
                $scope.store.products[x].fromStore = $scope.slug;
                $scope.store.products[x].id = x;
                if ($scope.store.products[x].$$hashKey) {
                    delete $scope.store.products[x].$$hashKey
                }
            }

            //Remove $$hashKey from schedules too...
            for (x in $scope.store.options.ownZone.schedules) {
                if ($scope.store.options.ownZone.schedules[x].$$hashKey) {
                    delete $scope.store.options.ownZone.schedules[x].$$hashKey
                }
            }

            //DeliveryZone & DZ Name are based on the slug and store name.
            $scope.store.options.deliveryZone = $scope.slug
            $scope.store.options.deliveryZoneName = $scope.store.info.name;
            $scope.storePrintable = JSON.stringify($scope.store, null, 2);
        }

        $scope.showcaseItemShow = {};
        //To show/hide locations
        $scope.toggleShowcaseItem = function (key) {
            if ($scope.showcaseItemShow[key] == true) {
                $scope.showcaseItemShow[key] = false
            } else {
                $scope.showcaseItemShow[key] = true
            }
        }

}]);

//Delivery Controller
storeControllers.controller('StoreDeliveryCtrl', ['$scope', 'StoreService',
function ($scope, StoreService) {

        $scope.store = null;
        //To retrieve json data from 'StoreService' into a variable 'store'
        StoreService.success(function (data) {
            $scope.store = data.store;
        });

        $scope.storePrintable = JSON.stringify($scope.store, null, 2);
        $scope.slug = "market_meals";
        $scope.newJSON = "";
    
        //To save data into the json
        $scope.save = function () {

            if (!$scope.newJSON == "") {
                $scope.store = JSON.parse($scope.newJSON);
                $scope.newJSON = "";
                $scope.storePrintable = JSON.stringify($scope.store, null, 2);
            }

            for (x in $scope.store.products) {
                $scope.store.products[x].fromStore = $scope.slug;
                $scope.store.products[x].id = x;
                if ($scope.store.products[x].$$hashKey) {
                    delete $scope.store.products[x].$$hashKey
                }
            }

            //Remove $$hashKey from schedules too...
            for (x in $scope.store.options.ownZone.schedules) {
                if ($scope.store.options.ownZone.schedules[x].$$hashKey) {
                    delete $scope.store.options.ownZone.schedules[x].$$hashKey
                }
            }

            //DeliveryZone & DZ Name are based on the slug and store name.
            $scope.store.options.deliveryZone = $scope.slug
            $scope.store.options.deliveryZoneName = $scope.store.info.name;
            $scope.storePrintable = JSON.stringify($scope.store, null, 2);
        }

}]);

//Email Controller
storeControllers.controller('StoreEmailCtrl', ['$scope', 'StoreService',
function ($scope, StoreService) {

        $scope.store = null;
        //To retrieve json data from 'StoreService' into a variable 'store'
        StoreService.success(function (data) {
            $scope.store = data.store;
        });

}]);

//Schedule Controller
storeControllers.controller('StoreScheduleCtrl', ['$scope', 'StoreService',
function ($scope, StoreService) {

        $scope.store = null;
        //To retrieve json data from 'StoreService' into a variable 'store'
        StoreService.success(function (data) {
            $scope.store = data.store.options.ownZone;
        });

        $scope.storePrintable = JSON.stringify($scope.store, null, 2);
        $scope.slug = "market_meals";
        $scope.newJSON = "";
    
        //To save data into the json
        $scope.save = function () {

            if (!$scope.newJSON == "") {
                $scope.store = JSON.parse($scope.newJSON);
                $scope.newJSON = "";
                $scope.storePrintable = JSON.stringify($scope.store, null, 2);
            }

            for (x in $scope.store.products) {
                $scope.store.products[x].fromStore = $scope.slug;
                $scope.store.products[x].id = x;
                if ($scope.store.products[x].$$hashKey) {
                    delete $scope.store.products[x].$$hashKey
                }
            }

            //Remove $$hashKey from schedules too...
            for (x in $scope.store.options.ownZone.schedules) {
                if ($scope.store.options.ownZone.schedules[x].$$hashKey) {
                    delete $scope.store.options.ownZone.schedules[x].$$hashKey
                }
            }

            //DeliveryZone & DZ Name are based on the slug and store name.
            $scope.store.options.deliveryZone = $scope.slug
            $scope.store.options.deliveryZoneName = $scope.store.info.name;
            $scope.storePrintable = JSON.stringify($scope.store, null, 2);
        }

}]);

//Output Controller
storeControllers.controller('StoreOutputCtrl', ['$scope', 'StoreService',
function ($scope, StoreService) {

        $scope.store = null;
        //To retrieve json data from 'StoreService' into a variable 'store'
        StoreService.success(function (data) {
            $scope.store = data.store;
        });

}]);