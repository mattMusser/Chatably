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
        * @function getByRoomId
        * @desc Filters messages by room id.
        * @returns the messages associated with the room id.
        */
        Message.getByRoomId = function(roomId) {
            this.roomMessages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            return this.roomMessages;
        };

        /**
        ^ @function send
        * @desc
        * @returns
        */
        Message.send = function(newMessage) {
            var date = new Date();
            var month = date.getMonth();
            var day = date.getDate();
            var year = date.getFullYear();
            var hrs = date.getHours() % 12;
            var mins = date.getMinutes();

            if(mins < 10) {
                mins = "0" + min;
            };

            var timeDate = hrs + ':' + mins + " " + month + '/' + day + '/' + year;
            newMessage.sentAt = timeDate;
            console.log("Message.send newMessage:", newMessage);
            messages.$add(newMessage);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
