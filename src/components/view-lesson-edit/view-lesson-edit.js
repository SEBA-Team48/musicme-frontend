'use strict';

import angular from 'angular';

import ViewLessonEditComponent from './view-lesson-edit.component';


export default angular.module('ViewLessonEdit', [])
    .component(ViewLessonEditComponent.name, new ViewLessonEditComponent);