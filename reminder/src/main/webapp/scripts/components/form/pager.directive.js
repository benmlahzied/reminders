/* globals $ */
'use strict';

angular.module('reminderApp')
    .directive('reminderAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
