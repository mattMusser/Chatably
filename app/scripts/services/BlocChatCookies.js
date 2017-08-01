(function() {
    function BlocChatCookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/usernameModal.html',
                controller: ' UsnernameCtrl as usernameModal,'
            });

            BlocChatCookies.setUsername = function($cookies) {
                currentUser = $cookies.put($cookies);
            }

        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
