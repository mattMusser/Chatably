(function() {
    function UsernameCtrl($cookies) {
        /**
        * @function this.setUsername
        * @desc submission handler
        */
        this.setUsername = function() {
            currentUser = $cookies.put('blocChatCurrentUser', this.newUsername);
            /*BCCookies.setCurrentUser(this.newUsername);*/
            console.log("this:", this);
            console.log("currentUser:", currentUser);
        }
        console.log("currentUser:", currentUser);
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$cookies', UsernameCtrl]);
})();
