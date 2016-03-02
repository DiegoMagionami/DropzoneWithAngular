'use strict';

/**
 * @ngdoc function
 * @name dropzoneWithAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dropzoneWithAngularApp
 */
app.controller('MainCtrl', ['$scope', '$uibModal', '$http', function ($scope, $uibModal, $http) {

    $scope.animationsEnabled = true;
    $scope.objects = [];

    $http.get('data/objects.json').then(function(result) {

        var el_numbers = result.data.objects.length;
        var elements = result.data.objects;
        var limit = 100;

        var i = 0;
        var key = "";
        var desc = "";
        var get_str = "";
        for(i = 0; i < el_numbers; i++) {

            desc = elements[i].description;
            elements[i].description = PrimitiveOperator.limitString(desc, 150, "...");

            $scope.objects.push(elements[i]);
        }
    });

    $scope.dropzoneConfig = {
        url: '/api/prova',
        uploadMultiple: true,
        clickable: true,
        maxThumbnailFilesize: 3,
        dictDefaultMessage: '<h2><i class="fa fa-upload"></i></h2> <h3>Drop here your image or click to upload</h3><p><small>(max 3 MB for each image)</small></p>'
    };

    $scope.dropzoneEvents = {
        
    };

    $scope.openEditObject = function(obj) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'scripts/Dashboard/Modals/editObject.html',
            controller: 'ModalEditObject',
            resolve: {
                items: function () {
                    return obj;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            console.log(selectedItem);
        }, function () {

        });
    };

    $scope.openConfirmDelete = function(obj) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'scripts/Dashboard/Modals/modalConfirm.html',
            controller: 'ModalConfirm',
            resolve: {
                items: function () {
                    return obj;
                }
            }
        });
        modalInstance.result.then(function (result) {
            // remove element
        }, function () {

            // do nothing

        });
    }

    $scope.openCropImage = function(obj) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'scripts/Dashboard/Modals/modalCropImage.html',
            controller: 'ModalCropImage',
            resolve: {
                items: function () {
                    return obj;
                }
            }
        });
        modalInstance.result.then(function (result) {
            console.log(result);
        }, function () {

            // do nothing

        });
    }
  }]);
