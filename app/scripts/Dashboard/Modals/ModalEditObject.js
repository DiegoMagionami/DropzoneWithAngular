'use strict';
app.controller('ModalEditObject', ['$uibModalInstance', 'items', '$scope', function ($uibModalInstance, items, $scope) {

    $scope.object = {
        title: items.title,
        description: items.description
    };

    $scope.editObject = function() {
        // save new data or send them to the main controller
        $uibModalInstance.close($scope.object);
    };

    $scope.ok = function () {
        $uibModalInstance.close(items);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}]);