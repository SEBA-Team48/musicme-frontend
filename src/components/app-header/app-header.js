'use strict';

import angular from 'angular';

import AppHeaderComponent from './app-header.component';

angular.module('switchDemo1', ['ngMaterial'])
    .controller('SwitchDemoCtrl', function($scope) {
        $scope.data = {
            cb5: false
        };

        $scope.message = 'true';

        $scope.onChange = function(cbState) {
            $scope.message = cbState;
        };
    });

export default angular.module('AppHeader', [])
    .component(AppHeaderComponent.name, new AppHeaderComponent);