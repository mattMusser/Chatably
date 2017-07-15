(function($scope) {
    /**
    * @function HomeCtrl
    */
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;

        Room.addRoom("a room");

        /**
        * @function openModal
        * @desc opens modal
        */
        var openModal = function() {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl.js',
            });
            console.log("Im being hit");
        }
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
