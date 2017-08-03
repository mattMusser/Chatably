(function() {
    function UsernameCtrl($uibModalInstance, $cookies) {
        /**
        * @function this.setUsername
        * @desc
        */
        this.setUsername = function() {
            Username.setUsername = (username.newUsername);
            username.newUsername = "";
            console.log("this.setUsername Username.setUsername", this.newUsername);
        }
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();
