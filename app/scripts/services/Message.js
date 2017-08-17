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
        * @function sentAtFormatter
        * @desc Formats the time and date when message was sent
        * @returns timeDate
        */
        sentAtFormatter = function() {
            var date = new Date();
            var month = date.getMonth();
            var day = date.getDate();
            var year = date.getFullYear();
            var hrs = date.getHours() % 12;
            var mins = date.getMinutes();
            var amPm = hrs >= 12 ? 'am' : 'pm';

            if(mins < 10) {
                mins = "0" + mins;
            };

            if(month < 10) {
                month = "0" + month;
            }

            if(day < 10) {
                day = "0" + day;
            }

            var timeDate = hrs + ':' + mins + amPm +" " + month + '/' + day + '/' + year;

            return timeDate
        }

        /**
        ^ @function send
        * @desc Adds message to firebase
        */
        Message.send = function(newMessage) {
            newMessage.sentAt = sentAtFormatter();
            console.log("Message.send newMessage:", newMessage);
            messages.$add(newMessage);

        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
