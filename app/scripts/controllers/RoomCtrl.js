(function() {
    /**
    * @function RoomCtrl
    * @desc
    * @returns
    */
    function RoomCtrl(Room, $uibModalInstance) {
        /**
        * @function addRoom
        * @desc adds a new room to room list
        * @returns
        */
        this.addRoom = function() {
            Room.addRoom(this.newRoomName);
            this.newRoomName = "";
        };

        /**
        * @function closeModal
        * @desc closes the modal
        * @returns
        */
        this.closeModal = function () {
            var modalInstance = $uibModalInstance.close('close');
        };
    }


    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModalInstance', RoomCtrl]);
})();
