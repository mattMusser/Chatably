(function() {
    /**
    * @function Message
    * @desc Message factory that defines all Message-ralated API queries.
    * @returns messages associated with the active chat room.
    */
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        /**
        * @function Message.getByRoomId
        * @desc Filters messages by room id.
        * @returns the messages associated with the room id.
        */
        Message.getByRoomId = function(roomId) {
            this.roomMessages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            console.log('Message.getByRoomId this.roomMessages :', this.roomMessages);
            return this.roomMessages;
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
