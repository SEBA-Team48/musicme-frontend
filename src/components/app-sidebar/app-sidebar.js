'use strict';

import angular from 'angular';

import ViewLessonsComponent from './view-lessons.component';


export default angular.module('AppSidebar', [])
    .component(AppSidebarComponent.name, new AppSidebarComponent);