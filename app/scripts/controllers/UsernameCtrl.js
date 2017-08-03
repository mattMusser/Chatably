(function() {
    function UsernameCtrl($uibModalInstance, $cookies) {
        /**
        * @function this.setUsername
        * @desc
        */
        this.setUsername = function() {
            UsernameCtrl.setUsername = this.newUsername;
            console.log(this)
            console.log("this.setUsername UsernameCtrl.setUsername", UsernameCtrl.setUsername);
        }
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();
