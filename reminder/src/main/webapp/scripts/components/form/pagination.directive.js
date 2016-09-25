/* globals $ */
'use strict';

angular.module('reminderApp')
    .directive('reminderAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
