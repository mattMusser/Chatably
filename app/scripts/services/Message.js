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
        console.log(Message);
        console.log(messages);
        /**
        * @function Message.getByRoomId
        * @desc Filters messages by room id.
        * @returns the messages associated with the room id.
        */
        Message.getByRoomId = function(roomId) {
            console.log($firebaseArray(ref.orderByChild('roomId').equalTo(roomId)));
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

        /*Message.sort = function (roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo("KpVG2DM4QotTEvyjpwI"));
        };*/

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
