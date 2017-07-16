
'use strict';

import template from './view-lesson.template.html';
import LessonsService from './../../services/lessons/lessons.service';
import UserService from './../../services/user/user.service';
import DateService from'./../../services/date/date.service';

class ViewLessonComponent {
    constructor(){
        this.controller = ViewLessonComponentController;
        this.template = template;
        this.bindings = {
            lesson: '<',
        }

    }

    static get name() {
        return 'viewLesson';
    }


}

class ViewLessonComponentController{
    constructor($state,LessonService,UserService,DateService){
        this.$state = $state;
        this.LessonService = LessonService; //s missing?
        this.UserService = UserService;
        this.DateService = DateService;

    }

    edit () {

        if (this.UserService.isAuthenticated()) {
            let _id = this.lesson['_id'];
            this.$state.go('lessonEdit',{ lessonId:_id});
        } else {
            this.$state.go('login',{});
        }

    };



    delete() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.lesson['_id'];

            this.LessonsService.delete(_id).then(response => {
                this.$state.go('lessons',{});
            });
        } else {
            this.$state.go('login',{});
        }
    };

    returnDay(date){
        var day =  new Date(date);
        return this.DateService.returnDateFormat(date);
    }


    static get $inject(){
        return ['$state', LessonsService.name, UserService.name, DateService.name];
    }

}


export default ViewLessonComponent;