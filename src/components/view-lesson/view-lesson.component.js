
'use strict';

import template from './view-lesson.template.html';
import LessonsService from './../../services/lessons/lessons.service';
import UserService from './../../services/user/user.service';
import DateService from'./../../services/date/date.service';
import MessageService from './../../services/messages/messages.service';

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
    constructor($state,LessonService,UserService,DateService, MessageService){
        this.$state = $state;
        this.LessonService = LessonService;
        this.UserService = UserService;
        this.DateService = DateService;
        this.MessageService = MessageService;

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

            this.LessonService.delete(_id).then(response => {
                this.$state.go('lessons',{});
            });
        } else {
            this.$state.go('login',{});
        }
    };

    cancelLesson() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.lesson['_id'];

            this.LessonService.delete(_id).then(response => {
                this.$state.go('lessons',{});
            });
        } else {
            this.$state.go('login',{});
        }
    };


    cancel() {
        this.$state.go('lessons',{});
    };

    returnDay(date){
        var day =  new Date(date);
        return this.DateService.returnDateFormat(date);
    }


    book() {
        if (this.UserService.isAuthenticated()) {
            let user = this.UserService.getCurrentUser();
            this.lesson['is_booked']= true;
            this.lesson['user_student'] = user['_id'];
            this.LessonService.update(this.lesson).then(data => {
                this.lesson = JSON.parse(JSON.stringify(data));
            });
            this.message = {};
            this.message['sender'] = user['_id'];
            this.message['receiver'] = this.lesson['user'];
            this.message['subject'] = "Lesson Booked";
            this.message['content'] = "Dear Teacher, \n We are inform that you have a new lesson booking.";
            var today = new Date();
            this.message['time'] = today;
            this.MessageService.create(this.message).then( data => {
                let _id = data['_id'];
            });
            this.$state.go('lessons',{});
        } else {
            this.$state.go('lessons',{});
        }
    };

    static get $inject(){
        return ['$state', LessonsService.name, UserService.name, DateService.name, MessageService.name];
    }

}


export default ViewLessonComponent;