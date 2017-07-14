(function() {
    /**
    * @function HomeCtrl
    */
    function HomeCtrl(Room) {
        this.rooms = Room.all;

        Room.addRoom("a room");

        /**
        * @function openModal
        * @desc opens modal
        */
        var openModal = function(room) {
            this.openRoom = $uibModal.open; 
        }

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
