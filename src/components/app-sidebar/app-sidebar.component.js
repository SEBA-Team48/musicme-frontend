'use strict';

import UserService from './../../services/user/user.service';

import template from './app-sidebar.template.html';

import './app-sidebar.style.css';

class AppSidebarComponent {
    constructor() {
        this.controller = AppSidebarComponentController;
        this.template = template;
    }

    static get name() {
        return 'appSidebar';
    }

}

    class AppSidebarComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;

    }
        returnIsTeacher(){
            let teacher_details = this.UserService.getCurrentUser();
            return teacher_details['is_teacher'];
        }

        redirectYourInbox(){
            this.$state.go('messages',{})
        }

        redirectYourAppointmentPage(){
             this.$state.go('lessons',{})
        }

        redirectSearchATeacher(){
             this.$state.go('landingPage',{})
        }

        redirectCancelALesson(){
             this.$state.go('lessons',{})
        }

        redirectAddNewTimeSlot(){
            this.$state.go('lessonAdd',{})
        }

        getLessonDisplayImageURL(){

            let lessonDisplayImageURL =  './music-lesson-Stock-Photo.jpg';
            return lessonDisplayImageURL;
        }

        static get $inject(){
            return ['$state', UserService.name];
        }
}

export default AppSidebarComponent;