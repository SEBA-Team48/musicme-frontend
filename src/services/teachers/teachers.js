'use strict';

import angular from 'angular';

import TeachersService from './teachers.service';


export default angular.module('TeachersServiceDefinition', [])
    .service(TeachersService.name, TeachersService)