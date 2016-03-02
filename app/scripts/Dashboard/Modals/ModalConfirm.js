'use strict';

app.controller('ModalConfirm', ['$uibModalInstance', 'items', '$scope', function($uibModalInstance, items, $scope) {

    $scope.ok = function () {
        $uibModalInstance.close(items);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}]);