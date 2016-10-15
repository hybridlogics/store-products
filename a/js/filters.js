var storeFilters = angular.module('storeFilters', []);

//slice filter
storeFilters.filter('slice',
    function () {
        //The json array(to be sliced), start limit and end limit are passed into this filter to return the sliced part of the array
        return function (arr, start, end) {
            return (arr || []).slice(start, end);
        };
    });