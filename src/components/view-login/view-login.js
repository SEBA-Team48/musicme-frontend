/**
 * Created by peresthahadji on 10.06.17.
 */
'use strict';

import angular from 'angular';

import ViewLoginComponent from './view-login.component';


export default angular.module('ViewLogin', [])
    .component(ViewLoginComponent.name, new ViewLoginComponent);