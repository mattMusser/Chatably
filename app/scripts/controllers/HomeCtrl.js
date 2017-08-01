 (function() {
    /**
    * @function HomeCtrl
    * @desc
    * @returns
    */
    function HomeCtrl(Room, $uibModal, Message) {
        this.rooms = Room.all;

        /**
        * @function openModal
        * @desc open modal click handler
        */
        this.openModal = function () {
            $uibModal.open({
            animation: true,
            templateUrl: '/templates/roomModal.html',
            controller: 'RoomCtrl as roomModal',
            });
        };

        /**
        * @function activeRoom
        * @desc active room click handler
        */
        this.activeRoom = function(rooms) {
            this.currentRoom = rooms;
            this.allTheMessages = Message.getByRoomId(this.currentRoom.$id);
            console.log("activeRoom is being hit");
        };

        /**
        * @function filteredMessages
        * @desc
        */
        this.filteredMessages = function(rooms) {
            this.allTheMessages = Message.getByRoomId(this.activeRoom.$id);
            console.log('filteredMessages allTheMessages:', this.allTheMessages);
        };
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
