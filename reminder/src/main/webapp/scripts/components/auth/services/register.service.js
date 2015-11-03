'use strict';

angular.module('reminderApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


