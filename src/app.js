'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';
import weeklyScheduler from 'angular-weekly-scheduler';
import LessonsService from './services/lessons/lessons';
import UserService from './services/user/user';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewLessons from './components/view-lessons/view-lessons';
import ViewLesson from './components/view-lesson/view-lesson';
import ViewLessonEdit from './components/view-lesson-edit/view-lesson-edit';
import ViewLessonCreate from './components/view-lesson-create/view-lesson-create';
import ViewLogin from './components/view-login/view-login';
import ViewLandingPage from './components/view-landing-page/view-landing-page';
import ViewRegistration from './components/view-registration/view-registration';

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    weeklyScheduler,
    ngMdIcons,
    UserService.name,
    LessonsService.name,
    AppContent.name,
    ViewLessons.name,
    ViewLesson.name,
    ViewLessonEdit.name,
    ViewLessonCreate.name,
    ViewLogin.name,
    ViewLandingPage.name,
	ViewRegistration.name
]);

app.constant('API_URL', 'http://localhost:3000/api');
app.config(Routes);
app.config(Middlewares);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;