'use strict';

import angular from 'angular';

import ViewTeacherEditComponent from './view-teacher-edit.component';


export default angular.module('ViewTeacherEdit', [])
    .component(ViewTeacherEditComponent.name, new ViewTeacherEditComponent);