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

            BlocChatCookies.setUsername = function($cookies) {
                console.log("BlocChatCookies.setUsername currentUser = $cookies.put($cookies):", currentUser = $cookies.put($cookies));
                currentUser = $cookies.put($cookies);
            }

        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
