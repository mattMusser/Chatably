(function() {
    /*
    * @function ModalCtrl
    */
    function ModalCtrl($uibModal) {
        /*
        * @function openModal
        */
        var openModal = function(room) {
            this.openRoom = $uibModal.open; //room.$open(room);
            //var roomPrompt = prompt("Add Room Name");
            //$uibModal.open;
            console.log("test");
        }
        /*
        * @function closeModal
        */
        var closeModal = function(room) {
            this.closeRoom = $uibModal.close; //room.$close(room);
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['firebase', 'angularjs', 'angular-animate', 'angular-touch', 'bootstrap.css','$uibModal', ModalCtrl]);
})();
