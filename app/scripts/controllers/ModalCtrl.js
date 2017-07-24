(function() {
    /**
    * @function ModalCtrl
    */
    function ModalCtrl(Room, $uibModalInstance) {
        /**
        * @function addRoom
        * @desc adds a new room to room list
        */
        this.addRoom = function() {
            Room.addRoom(this.newRoomName);
            this.newRoomName = "";
            console.log("add room is being hit", this);
        };

        /**
        * @function closeModal
        * @desc closes the modal
        */
        this.closeModal = function () {
            console.log("cancel is being hit");
            var modelInstance = $uibModalInstance.close('close');
        };
    }


    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
