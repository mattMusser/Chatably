(function($scope/*added*/) {
    /**
    * @function HomeCtrl
    */
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;

        //Room.addRoom("a room");



        /**
        * @function openModal
        * @desc opens modal
        */
        /*var openModal = function() {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl.js',
            });
            console.log("Im being hit");
        }*/

        this.openModal = function () {
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl as modal',
          });
        };

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
