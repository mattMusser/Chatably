(function() {
    function BCCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                keyboard: false,
                backdrop: 'static',
                templateUrl: '/templates/usernameModal.html',
                controller: 'UsernameCtrl as userName',
            });
        }

        BCCookies.setCurrentUser = function(setUsername) {
            currentUser = $cookies.put(setUsername);
            console.log("BCCookies.setCurrentUser currentUser:", currentUser);
            console.log("$cookies:", $cookies);
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BCCookies]);
})();
