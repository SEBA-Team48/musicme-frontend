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
        redirectEditProfile(){
            this.$state.go('teachers')
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

        redirectRateATeacher(){
             this.$state.go('login',{})
        }

        redirectCancelALesson(){
             this.$state.go('teachers',{})
        }

        redirectAddNewTimeSlot(){
            this.$state.go('lessonAdd',{})
        }


        static get $inject(){
            return ['$state', UserService.name];
        }
}

export default AppSidebarComponent;