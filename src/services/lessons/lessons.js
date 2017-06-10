/**
 * Created by peresthahadji on 10.06.17.
 */
'use strict';

import angular from 'angular';

import LessonsService from './lessons.service';


export default angular.module('LessonsServiceDefinition', [])
    .service(LessonsService.name, LessonsService)