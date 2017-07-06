'use strict';

import angular from 'angular';

import ViewImpressumComponent from './view-impressum.component';


export default angular.module('ViewImpressum', [])
    .component(ViewImpressumComponent.name, new ViewImpressumComponent);