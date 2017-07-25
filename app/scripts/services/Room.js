(function() {
    /**
    * @function Room
    * @desc creates a list of chat rooms
    * @returns
    */
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.getRoomsMatchingName = function(nameToSearchFor) {
            var filteredFirebaseRef = ref.orderByChild('$value').equalTo(nameToSearchFor);
            return $firebaseArray(filteredFirebaseRef);
        };

        Room.all = rooms;
        /**
        * @function Room.addRoom
        * @desc adds room to database
        */
        Room.addRoom = function(room) {
            rooms.$add(room);
        }

    return Room;

}

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
