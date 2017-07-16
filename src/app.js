'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';


import ngMdIcons from 'angular-material-icons';
import LessonsService from './services/lessons/lessons';
import UserService from './services/user/user';
import DateService from './services/date/date';
import MessagesService from './services/messages/messages';

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
import ViewImpressum from './components/view-impressum/view-impressum';
import ViewMessages from './components/view-messages/view-messages';

import ViewUpgrade from './components/view-upgrade/view-upgrade';
import ViewMessage from './components/view-message/view-message';

import ViewRating from './components/view-rating/view-rating';
import ViewProfile from './components/view-profile/view-profile';
import ViewProfileEdit from './components/view-profile-edit/view-profile-edit';


let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    UserService.name,
    LessonsService.name,
    MessagesService.name,
    DateService.name,
    AppContent.name,
    ViewLessons.name,
    ViewLesson.name,
    ViewLessonEdit.name,
    ViewLessonCreate.name,
    ViewLogin.name,
    ViewLandingPage.name,
	ViewRegistration.name,
    ViewImpressum.name,
    ViewMessages.name,
    ViewRating.name,
    ViewProfile.name,
    ViewProfileEdit.name,
    ViewUpgrade.name,
    ViewMessage.name

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