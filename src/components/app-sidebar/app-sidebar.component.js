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
             this.$state.go('lessons',{})
        }

        redirectYourInbox(){
            this.$state.go('login',{})
        }

        redirectYourAppointmentPage(){
             this.$state.go('login',{})
        }

        redirectSearchATeacher(){
             this.$state.go('login',{})
        }

        redirectRateATeacher(){
             this.$state.go('login',{})
        }

        redirectCancelALesson(){
             this.$state.go('login',{})
        }

        redirectAddNewTimeSlot(){
            this.$state.go('lessonAdd',{})
        }


        static get $inject(){
            return ['$state', UserService.name];
        }
}

export default AppSidebarComponent;