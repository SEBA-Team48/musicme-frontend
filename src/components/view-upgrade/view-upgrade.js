'use strict';

import angular from 'angular';

import ViewUpgradeComponent from './view-upgrade.component';


export default angular.module('ViewUpgrade', [])
    .component(ViewUpgradeComponent.name, new ViewUpgradeComponent);