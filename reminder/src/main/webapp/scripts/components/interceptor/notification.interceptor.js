 'use strict';

angular.module('reminderApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-reminderApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-reminderApp-params')});
                }
                return response;
            },
        };
    });