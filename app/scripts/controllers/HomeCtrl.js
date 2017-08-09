 (function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
        this.rooms = Room.all;
        currentUser = $cookies.get('blocChatCurrentUser');
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
        };

        /**
        * @function filteredMessages
        * @desc filters messages according to active room
        */
        this.filteredMessages = function(rooms) {
            this.allTheMessages = Message.getByRoomId(this.activeRoom.$id);
        };

        /**
        * @function submit message
        * @desc submission handler
        */
        this.submitMessage = function() {
            Message.send({
                roomId: this.currentRoom.$id,
                content: this.newMessage,
                username: currentUser
            });
            this.newMessage = "";
        };
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();
