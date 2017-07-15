(function() {
    /**
    * @function ModalCtrl
    */
    function ModalCtrl($uibModal) {
        /**
        * @function closeModal
        */
        var closeModal = function(room) {
             $uibModal.close;
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['firebase', 'angularjs', 'angular-animate', 'angular-touch', 'bootstrap.css','$uibModal', ModalCtrl]);
})();
