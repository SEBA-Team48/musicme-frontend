'use strict';

import angular from 'angular';

import ViewMessageComponent from './view-message.component';


export default angular.module('ViewMessage', [])
    .component(ViewMessageComponent.name, new ViewMessageComponent);