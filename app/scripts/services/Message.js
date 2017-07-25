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

        Message.getByRoomId = function(roomId) {
            ref.orderByChild('messages').equalTo('');
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
