(function() {
    function UsernameCtrl($cookies, $uibModalInstance) {
        /**
        * @function this.setUsername
        * @desc submission handler
        */
        this.setUsername = function() {
            currentUser = $cookies.put('blocChatCurrentUser', this.newUsername);
            var modalInstance = $uibModalInstance.close('close');
        }
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$cookies', '$uibModalInstance', UsernameCtrl]);
})();
