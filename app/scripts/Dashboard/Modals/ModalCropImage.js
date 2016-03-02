'use strict';

app.controller('ModalCropImage', ['$uibModalInstance', 'items', '$scope', function($uibModalInstance, items, $scope) {

    $scope.imageToCrop = items.image;
    $scope.imageCropped = '';


    $scope.save = function () {
        $uibModalInstance.close($scope.imageCropped);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}]);