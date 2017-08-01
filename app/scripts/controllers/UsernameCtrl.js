(function() {
    function UsernameCtrl(BlocChatCookies, $uibModalInstance, ngCookies) {
        this.setUsername = function() {
            BlocChatCookies.setUsername(this.newUsername);
        }
    }

    angular
        .module('blocChat')
        .congroller('UsernameCtrl', ['BlocChatCookies', '$uibModalInstance', 'ngCookies', UsernameCtrl]);
})();
