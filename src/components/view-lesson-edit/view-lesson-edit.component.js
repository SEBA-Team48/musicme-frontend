
'use strict';

import template from './view-lesson-edit.template.html';

import LessonsService from './../../services/lessons/lessons.service';

class ViewLessonEditComponent {
    constructor(){
        this.controller = ViewLessonEditComponentController;
        this.template = template;
        this.bindings = {
            lesson: '<',
        }
    }

    static get name() {
        return 'viewLessonEdit';
    }
}

class ViewLessonEditComponentController{
    constructor($state, LessonsService){
        this.model = {};
        this.$state = $state;
        this.LessonsService = LessonsService;
    }

    $onInit() {
        //Clone the Music Data
        this.model = JSON.parse(JSON.stringify(this.lesson))
    }

    cancel() {
        this.model = JSON.parse(JSON.stringify(this.lesson));
        this.$state.go('lessons',{});
    };

    save() {
        let _id = this.lesson['_id'];

        this.LessonsService.update(this.model).then(data => {
            this.lesson = JSON.parse(JSON.stringify(data));

            this.$state.go('lesson',{ lessonId:_id});
        });

    };

    delete() {
        let _id = this.lesson['_id'];

        this.LessonsService.delete(_id).then(response => {
            this.$state.go('lessons',{});
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

    static get $inject(){
        return ['$state', LessonsService.name];
    }

}


export default ViewLessonEditComponent;