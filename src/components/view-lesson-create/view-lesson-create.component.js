
'use strict';

import template from './view-lesson-create.template.html';

import LessonsService from './../../services/lessons/lessons.service';
import UserService from './../../services/user/user.service';

class ViewLessonCreateComponent {
    constructor(){
        this.controller = ViewLessonCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewLessonCreate';
    }
}

class ViewLessonCreateComponentController{
    constructor($state, LessonsService,UserService){
        this.lesson = {};
        this.$state = $state;
        this.LessonsService = LessonsService;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('lessons',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();

        this.lesson['user'] = user['_id'];
        this.LessonsService.create(this.lesson).then(data => {
            let _id = data['_id'];
            //this.$state.go('lesson',{ lessonId:_id});
            this.$state.go('lessons',{})
        });

    };

    redirectEditProfile(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('login',{})
        } else {
            this.$state.go('login',{});
        }
    }

    redirectYourInbox(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('login',{})
        } else {
            this.$state.go('login',{});
        }
    }

    redirectYourAppointmentPage(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('login',{})
        } else {
            this.$state.go('login',{});
        }
    }

    redirectSearchATeacher(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('login',{})
        } else {
            this.$state.go('login',{});
        }
    }

    redirectRateATeacher(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('login',{})
        } else {
            this.$state.go('login',{});
        }
    }

    redirectCancelALesson(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('login',{})
        } else {
            this.$state.go('login',{});
        }
    }

    redirectAddNewTimeSlot(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('lessons',{})
        } else {
            this.$state.go('login',{});
        }
    }

    help(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('lessons',{})
        } else {
            this.$state.go('login',{});
        }
    }

    static get $inject(){
        return ['$state', LessonsService.name, UserService.name];
    }

}


export default ViewLessonCreateComponent;