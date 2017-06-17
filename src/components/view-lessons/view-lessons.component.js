
'use strict';

import template from './view-lessons.template.html';
import LessonsService from './../../services/lessons/lessons.service';
import UserService from './../../services/user/user.service';


class ViewLessonsComponent {
    constructor(){
        this.controller = ViewLessonsComponentController;
        this.template = template;
        this.bindings = {
            lessons: '<',
        }
    }

    static get name() {
        return 'viewLessons';
    }
}

class ViewLessonsComponentController{
    constructor($state,LessonsService,UserService){
        this.$state = $state;
        this.LessonsService = LessonsService;
        this.UserService = UserService;

    }

    details (lesson) {
        let _id = lesson['_id'];
        this.$state.go('lesson',{ lessonId:_id});
    };

    edit (lesson) {

        if (this.UserService.isAuthenticated()) {
            let _id = lesson['_id'];
            this.$state.go('lessonEdit',{ lessonId:_id});
        } else {
            this.$state.go('login',{});
        }
    };

    newLesson(){

        if (this.UserService.isAuthenticated()) {
            this.$state.go('lessonAdd',{});
        } else {
            this.$state.go('login',{});
        }

    }

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


    delete(lesson) {
        if (this.UserService.isAuthenticated()) {
            let _id = lesson['_id'];

            this.LessonsService.delete(_id).then(response => {
                let index = this.lessons.map(x => x['_id']).indexOf(_id);
                this.lessons.splice(index, 1);
            })

        } else {
            this.$state.go('login',{});
        }
    };


    static get $inject(){
        return ['$state', LessonsService.name, UserService.name];
    }



}

export default ViewLessonsComponent;