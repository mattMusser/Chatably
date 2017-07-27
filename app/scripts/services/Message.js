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
<<<<<<< HEAD
        /*Message.sort = function (roomId) {
            console.log(ref.orderByChild('roomId').equalTo("KpVG2DM4QotTEvyjpwI"));
            return $firebaseArray(ref.orderByChild('roomId').equalTo("KpVG2DM4QotTEvyjpwI"));
        };*/

        Message.getByRoomId = function(roomId) {
            var messageFilter = ref.orderByChild('roomId').equalTo("KpVG2DM4QotTEvyjpwI");
            console.log($firebaseArray(messageFilter));
            return $firebaseArray(messageFilter);
            console.log($firebaseArray(messageFilter));
        };

=======

        /*Message.getByRoomId = function(roomId) {
            var messageFilter = ref.orderByChild('roomId').equalTo(roomId);
            return $firebaseArray(messageFilter);
        };*/

        Message.sort = function (roomId) {
            console.log($firebaseArray(ref.orderByChild('roomId').equalTo("KpVG2DM4QotTEvyjpwI")));
            return $firebaseArray(ref.orderByChild('roomId').equalTo("KpVG2DM4QotTEvyjpwI"));
            console.log($firebaseArray(ref.orderByChild('roomId').equalTo("KpVG2DM4QotTEvyjpwI")));
        };
>>>>>>> 288a1a259b79ebf8fe94d4f625144b825ddaf81c

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
