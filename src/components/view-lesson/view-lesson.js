/**
 * Created by peresthahadji on 10.06.17.
 */
'use strict';

import angular from 'angular';

import ViewLessonComponent from './view-lesson.component';


export default angular.module('ViewLesson', [])
    .component(ViewLessonComponent.name, new ViewLessonComponent);