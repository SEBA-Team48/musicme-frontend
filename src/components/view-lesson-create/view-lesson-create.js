'use strict';

import angular from 'angular';

import ViewLessonCreateComponent from './view-lesson-create.component';


export default angular.module('ViewLessonCreate', [])
    .component(ViewLessonCreateComponent.name, new ViewLessonCreateComponent);