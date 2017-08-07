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
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BCCookies]);
})();
