(function() {
    /**
    * @function HomeCtrl
    */
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.activeRoom = Room.activeRoom;

        /**
        * @function openModal
        * @desc opens modal
        */
        this.openModal = function () {
            $uibModal.open({
            animation: true,
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl as modal',
            });
        };

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope', HomeCtrl]);
})();
