'use strict';

import angular from 'angular';

import LessonsService from './lessons.service';


export default angular.module('LessonsServiceDefinition', [])
    .service(LessonsService.name, LessonsService)