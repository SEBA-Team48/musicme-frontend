
'use strict';

import template from './view-lessons.template.html';
import './view-lessons.style.css';
import LessonsService from './../../services/lessons/lessons.service';
import UserService from './../../services/user/user.service';
import DateService from'./../../services/date/date.service';


class ViewLessonsComponent {
    constructor(){
        this.controller = ViewLessonsComponentController;
        this.template = template;
        this.bindings = {
            lessons: '<',
            user: '<'
        }
    }

    static get name() {
        return 'viewLessons';
    }
}

class ViewLessonsComponentController{

    constructor($state,LessonsService,UserService,DateService){
        this.$state = $state;
        this.LessonsService = LessonsService;
        this.UserService = UserService;
        this.DateService = DateService;
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

    book (lesson) {
        if(this.UserService.isAuthenticated()) {
            let _id = lesson['_id'];
            this.$state.go('lesson', { lessonId:_id});
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

    cancel(lesson) {

        if (this.UserService.isAuthenticated()) {
            let _id = lesson['_id'];
            lesson['is_booked']= false;
            lesson['user_student']=null;
            this.LessonsService.update(lesson).then(data => {
                this.lesson = JSON.parse(JSON.stringify(data));
            });
            this.$state.go('lessons',{});
        } else {
            this.$state.go('lessons',{});
        }
    };

    rate(lesson){
        let _id = this.lesson['_id'];
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

    returnDay(date){
       var day =  new Date(date);
        return this.DateService.returnDateFormat(date);
    }



    static get $inject(){
        return ['$state', LessonsService.name, UserService.name, DateService.name];
    }



}

export default ViewLessonsComponent;