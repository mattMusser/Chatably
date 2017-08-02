(function() {
    function UsernameCtrl($uibModalInstance) {
        this.setUsername = function() {
            console.log("Username Ctrl this.setUsername() is being hit");
            console.log("BlocChatCookies.setUsername(this.newUsername):", BlocChatCookies.setUsername(this.newUsername));
            BlocChatCookies.setUsername(this.newUsername);
        }
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$uibModalInstance', UsernameCtrl]);
})();
