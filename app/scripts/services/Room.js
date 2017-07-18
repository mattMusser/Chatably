(function() {
    /**
    * @function Room
    * @desc creates a list of chat rooms
    */
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;
        /**
        * @function Room.addRoom
        * @desc adds room to database
        */
        Room.addRoom = function(room) {
            rooms.$add(room);
        }

        Room.removeRoom = function(room) {
            rooms.$remove(room);
        }

    return Room;

}

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
