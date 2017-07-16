'use strict';

import angular from 'angular';

import DateService from './date.service';


export default angular.module('DateServiceDefinition', [])
    .service(DateService.name, DateService)