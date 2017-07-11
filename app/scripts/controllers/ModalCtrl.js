(function() {
    function ModalCtrl($uibModal) {
        var openModal = function(room) {
            this.openRoom = room.$open(room);
            var roomPrompt = prompt("what");
        }

        var closeModal = function(room) {
            this.closeRoom = room.$close(room);
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['firebase', 'angularjs', 'angular-animate', 'angular-touch', 'bootstrap.css','$uibModal', ModalCtrl]);
})();
