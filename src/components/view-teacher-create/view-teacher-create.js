'use strict';

import angular from 'angular';

import ViewTeacherCreateComponent from './view-teacher-create.component';


export default angular.module('ViewTeacherCreate', [])
    .component(ViewTeacherCreateComponent.name, new ViewTeacherCreateComponent);