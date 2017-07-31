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
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl as modal',
            });
        };

        /**
        * @function activeRoom
        * @desc active room click handler
        */
        this.activeRoom = function(rooms) {
            console.log(rooms);
            this.currentRoom = rooms;
            console.log("activeRoom is being hit");
        };

        /**
        * @function filteredMessages
        * @desc
        */
        this.filteredMessages = function(rooms) {
            this.allTheMessages = Message.getByRoomId(this.activeRoom.$id);
            console.log("this.allTheMessages");
        }

        /*this.filteredMessages = function(rooms) {
            this.messages = Message.sort(this.activeRoom.$id);
            console.log(this.messages);
        }*/
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
