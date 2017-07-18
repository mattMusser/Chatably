(function($scope/*added*/) {
    /** 
    * @function ModalCtrl
    */
    function ModalCtrl(Room, modal, $uibModalInstance) {
        /**
        * @function closeModal
        */
        this.closeModal = function () {
            var modelInstance = $uibModalInstance.close('close');
            console.log("cancel is being hit");
        };

        Room.addRoom = function() {
            console.log("add room is being hit");
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]  /*['firebase', 'angularjs', 'angular-animate', 'angular-touch', 'bootstrap.css','$uibModal', ModalCtrl]*/);
})();
