(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                keyboard: false,
                backdrop: 'static',
                templateUrl: '/templates/usernameModal.html',
                controller: 'UsernameCtrl as usernameModal',
            });

            BlocChatCookies.setCurrentUser = function(setUsername) {
                currentUser = Username.setUsername;
                console.log("BlocChatCookies.setCurrentUser currentUser:", currentUser);
            }

        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
