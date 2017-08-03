(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                keyboard: false,
                backdrop: 'static',
                templateUrl: '/templates/usernameModal.html',
                controller: 'UsernameCtrl as userName',
            });

            BlocChatCookies.setCurrentUser = function(setUsername) {
                currentUser = $cookies.put(setUsername);
                console.log("BlocChatCookies.setCurrentUser currentUser:", currentUser);
                console.log("*inside if statment* $cookies:", $cookies);
            }
        }

        /*BlocChatCookies.setCurrentUser = function(setUsername) {
            currentUser = $cookies.put(setUsername);
            console.log("BlocChatCookies.setCurrentUser currentUser:", currentUser);
            console.log("$cookies:", $cookies);
        }*/
        console.log("$cookies:", $cookies);
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
