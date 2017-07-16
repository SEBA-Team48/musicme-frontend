'use strict';

import angular from 'angular';

import ViewLessonsComponent from './view-lessons.component';


export default angular.module('ViewLessons', [])
    .component(ViewLessonsComponent.name, new ViewLessonsComponent);




