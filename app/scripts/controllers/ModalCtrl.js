(function() {
    function ModalCtrl($uibModal) {
        var openModal = function(room) {
            this.openRoom = home.open(room);
            var roomPrompt= prompt("what");
            this.addRoom = room.$add(roomPrompt);
        }

        var closeModal = function(room) {
            this.closeRoom = room.$close(room);
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['firebase', 'angularjs', 'angular-animate', 'angular-touch', 'bootstrap.css','$uibModal', ModalCtrl]);
})();
