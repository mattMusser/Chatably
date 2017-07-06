(function() {
    function ModalCtrl() {
        var openModal = function(room) {
            this.createRoom = Room.addRoom();
        }

        var closeModal = function(room) {
            this.closeRoom = 
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['firebase', 'angularjs', 'angular-animat', 'angular-touch', 'bootstrap.css', ModalCtrl]);
})();
