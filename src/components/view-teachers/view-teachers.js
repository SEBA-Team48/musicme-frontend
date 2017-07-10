'use strict';

import angular from 'angular';

import ViewTeachersComponent from './view-teachers.component';



angular.module('tabsDemoDynamicHeight', ['ngMaterial']);


export default angular.module('ViewTeachers', [])
    .component(ViewTeachersComponent.name, new ViewTeachersComponent);
