(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all ;
        Room.addRoom('the room');
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
