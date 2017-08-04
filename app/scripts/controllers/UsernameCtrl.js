(function() {
    function UsernameCtrl(BCCookies) {
        /**
        * @function this.setUsername
        * @desc submission handler
        */
        this.setUsername = function() {
            BCCookies.setCurrentUser(this.newUsername);
            console.log("this:", this);
        }
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['BCCookies', UsernameCtrl]);
})();
