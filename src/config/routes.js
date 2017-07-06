'use strict';

import LessonsComponent from './../components/view-lessons/view-lessons.component';
import LessonComponent from './../components/view-lesson/view-lesson.component';
import LessonEditComponent from './../components/view-lesson-edit/view-lesson-edit.component';
import LessonCreateComponent from './../components/view-lesson-create/view-lesson-create.component';
import LoginComponent from './../components/view-login/view-login.component';
import LandingPageComponent from './../components/view-landing-page/view-landing-page.component';
import RegistrationComponent from './../components/view-registration/view-registration.component';
import ImpressumComponent from './../components/view-impressum/view-impressum.component'


import LessonsService from './../services/lessons/lessons.service';


resolveLesson.$inject = ['$stateParams', LessonsService.name];
function resolveLesson($stateParams,lessonsService){
    return lessonsService.get($stateParams.lessonId);
}

resolveLessons.$inject = [LessonsService.name];
function resolveLessons(lessonsService){
    return lessonsService.list();
}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config ($stateProvider, $urlRouterProvider){

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/landing");

    $stateProvider
        .state('lessons', {
            url: '/lessons',
            component: LessonsComponent.name,
            resolve: {
                lessons : resolveLessons
            }
        })
        .state('lessonAdd', {
            url: '/lessons/new',
            component: LessonCreateComponent.name
        })
        .state('lesson', {
            url: '/lessons/:lessonId',
            component: LessonComponent.name,
            resolve: {
                lesson : resolveLesson
            }

        })
        .state('lessonEdit', {
            url: '/lessons/:lessonId/edit',
            component: LessonEditComponent.name,
            resolve: {
                lesson : resolveLesson
            }
        })
        .state('landingPage', {
            url: '/landing',
            component: LandingPageComponent.name,
            resolve: {
                lessons : resolveLessons
            }
        })
        .state('login', {
            url: '/login',
            component: LoginComponent.name,
        })

        .state('register',{
            url: '/register',
            component: RegistrationComponent.name,
        })

        .state('impressum',{
            url: '/impressum',
            component: ImpressumComponent.name,
        })

}

