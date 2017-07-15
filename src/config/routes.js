'use strict';

import LessonsComponent from './../components/view-lessons/view-lessons.component';
import LessonComponent from './../components/view-lesson/view-lesson.component';
import LessonEditComponent from './../components/view-lesson-edit/view-lesson-edit.component';
import LessonCreateComponent from './../components/view-lesson-create/view-lesson-create.component';
import LoginComponent from './../components/view-login/view-login.component';
import LandingPageComponent from './../components/view-landing-page/view-landing-page.component';
import RegistrationComponent from './../components/view-registration/view-registration.component';
import ImpressumComponent from './../components/view-impressum/view-impressum.component';
import TeacherComponent from './../components/view-teacher/view-teacher.component';
import TeachersComponent from './../components/view-teachers/view-teachers.component';
import TeacherEditComponent from './../components/view-teacher-edit/view-teacher-edit.component';
import TeacherCreateComponent from './../components/view-teacher-create/view-teacher-create.component';

import MessagesComponent from './../components/view-messages/view-messages.component';
import RatingComponent from './../components/view-rating/view-rating.component';
import ProfileComponent from './../components/view-profile/view-profile.component';


import UserService from './../services/user/user.service';
import LessonsService from './../services/lessons/lessons.service';
import TeachersService from './../services/teachers/teachers.service';
import MessagesService from './../services/messages/messages.service';


resolveLesson.$inject = ['$stateParams', LessonsService.name];
function resolveLesson($stateParams,lessonsService){
    return lessonsService.get($stateParams.lessonId);
}

resolveUser.$inject = [UserService.name];
function resolveUser(userService){
    return userService.getUserDetails();
}

resolveLessons.$inject = [LessonsService.name];
function resolveLessons(lessonsService){
    return lessonsService.list();
}

resolveTeacher.$inject = ['$stateParams', TeachersService.name];
function resolveTeacher($stateParams, teachersService){
    return teachersService.get($stateParams.teacherId);
}

resolveTeachers.$inject = [TeachersService.name];
function resolveTeachers(teachersService){
    return teachersService.list();
}

resolveMessage.$inject = ['$stateParams', MessagesService.name];
function resolveMessage($stateParams, messagesService){
    return messagesService.get($stateParams.messageId);
}

resolveMessages.$inject = [MessagesService.name];
function resolveMessages(messagesService) {
    return messagesService.list();
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
        .state('teachers', {
            url: '/teachers',
            component: TeachersComponent.name,
            resolve: {
                teachers : resolveTeachers
            }
        })
        .state('teacherAdd', {
            url: '/teachers/new',
            component: TeacherCreateComponent.name
        })
        .state('teacher', {
            url: '/teachers/:teacherId',
            component: TeacherComponent.name,
            resolve: {
                teacher : resolveTeacher
            }
        })
        .state('teacherEdit', {
            url: '/teachers/:teacherId/edit',
            component: TeacherEditComponent.name,
            resolve: {
                teacher : resolveTeacher
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


        .state('messages', {
            url: '/messages',
            component: MessagesComponent.name,
            resolve: {
                messages : resolveMessages
            }
        })/*
        .state('message', {
            url: '/messages/:messageId',
            component: MessageComponent.name,
            resolve: {
                message : resolveMessage
            }
        })*/

        .state('rating',{
            url: '/rating',
            component: RatingComponent.name,
        })

        .state('profile',{
            url: '/profile',
            component: ProfileComponent.name,
            resolve: {
                user : resolveUser
            }
        })


}

