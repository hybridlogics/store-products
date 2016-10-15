var storeServices = angular.module('storeServices', ['ngResource']);

//To GET the json file using $http
storeServices.factory('StoreService', ['$http',
  function ($http) {
        //Path of json file should be relative to the server. If url used to run the project on server is 'localhost/Store' then path of json should start from '/Store'
        return $http.get('/Store/data/store.json');
  }]);