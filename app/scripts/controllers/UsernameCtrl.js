(function() {
    function UsernameCtrl(BlocChatCookies, $uibModalInstance, ngCookies) {
        this.setUsername = function() {
            BlocChatCookies.setUsername(this.newUsername);
        }
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['BlocChatCookies', '$uibModalInstance', 'ngCookies', UsernameCtrl]);
})();
