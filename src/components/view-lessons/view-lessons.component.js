
'use strict';

import template from './view-lessons.template.html';
import './view-lessons.style.css';
import LessonsService from './../../services/lessons/lessons.service';
import UserService from './../../services/user/user.service';
import DateService from'./../../services/date/date.service';
import MessageService from './../../services/messages/messages.service';


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

    constructor($state,LessonsService,UserService,DateService,MessageService){
        this.$state = $state;
        this.LessonsService = LessonsService;
        this.UserService = UserService;
        this.DateService = DateService;
        this.MessageService = MessageService;
    }

    returnName(id){
        let user_data = this.UserService.getUserDetailsByID(id);
        return user_data.fname + " " + user_data.lname;
    };

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
            let user = this.UserService.getCurrentUser();
            this.message = {};
            this.message['sender'] = user['_id'];
            this.message['receiver'] = lesson['user'];
            this.message['subject'] = "Lesson Cancelled";
            this.message['content'] = "Dear Teacher, We are sorry to inform that your lesson was cancelled.";
            this.message['unread']=true;
            var today = new Date();
            this.message['time'] = today;
            this.MessageService.create(this.message).then( data => {
                let _id = data['_id'];
            });
            this.$state.go('landing',{});
        } else {
            this.$state.go('lessons',{});
        }
    };

    rate(lesson){
        if (this.UserService.isAuthenticated()) {
            let user_id = lesson['user'];
            console.log(user_id);
            this.$state.go('rating',{userId: user_id});
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
            let user = this.UserService.getCurrentUser();
            this.message = {};
            this.message['sender'] = user['_id'];
            this.message['receiver'] = lesson['user_student'];
            this.message['subject'] = "Lesson Deleted";
            this.message['content'] = "Dear Student, We are sorry to inform that your lesson was removed.";
            this.message['unread']=true;
            var today = new Date();
            this.message['time'] = today;
            this.MessageService.create(this.message).then( data => {
                let _id = data['_id'];
            });

        } else {
            this.$state.go('login',{});
        }
    };

    returnDay(date){
       var day =  new Date(date);
        return this.DateService.returnDateFormat(date);
    }

    returnIsTeacher(){
        let teacher_details = this.UserService.getCurrentUser();
        return teacher_details['is_teacher'];
    }

    static get $inject(){
        return ['$state', LessonsService.name, UserService.name, DateService.name, MessageService.name];
    }
}

export default ViewLessonsComponent;