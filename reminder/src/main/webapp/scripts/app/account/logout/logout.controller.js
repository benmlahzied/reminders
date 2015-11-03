'use strict';

angular.module('reminderApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
