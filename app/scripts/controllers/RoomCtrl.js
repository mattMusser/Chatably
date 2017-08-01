(function() {
    /**
    * @function ModalCtrl
    * @desc
    * @returns
    */
    function RoomCtrl(Room, $uibModalInstance, ngCookies) {
        /**
        * @function addRoom
        * @desc adds a new room to room list
        * @returns
        */
        this.addRoom = function() {
            Room.addRoom(this.newRoomName);
            this.newRoomName = "";
            console.log("add room is being hit", this);
        };

        /**
        * @function closeModal
        * @desc closes the modal
        * @returns
        */
        this.closeModal = function () {
            console.log("cancel is being hit");
            var modalInstance = $uibModalInstance.close('close');
        };
    }


    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModalInstance', 'ngCookies', RoomCtrl]);
})();
