'use strict';

import angular from 'angular';

import ViewTeacherComponent from './view-teacher.component';


export default angular.module('ViewTeacher', [])
    .component(ViewTeacherComponent.name, new ViewTeacherComponent);