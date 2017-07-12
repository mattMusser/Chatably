(function() {
    /*
    * @function HomeCtrl
    */
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        var roomPrompt = prompt("Add Room Name");
        Room.addRoom(roomPrompt);
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
