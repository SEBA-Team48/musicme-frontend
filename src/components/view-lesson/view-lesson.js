'use strict';

import angular from 'angular';

import ViewLessonComponent from './view-lesson.component';


export default angular.module('ViewLesson', [])
    .component(ViewLessonComponent.name, new ViewLessonComponent);