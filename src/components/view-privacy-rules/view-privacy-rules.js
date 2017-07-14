'use strict';

import angular from 'angular';

import ViewPrivacyRulesComponent from './view-privacy-rules.component';


export default angular.module('ViewPrivacyRules', [])
    .component(ViewPrivacyRulesComponent.name, new ViewPrivacyRulesComponent);