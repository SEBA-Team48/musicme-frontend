
'use strict';

import template from './view-lessons.template.html';
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

    cancel() {
        this.$state.go('lessons',{});
    };


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
        //console.log("date:"+ date );
       var day =  new Date(date);
       /*
        console.log("day: "+ day);
        console.log("table: \n" +
            "1: "+ day.toDateString()+ "\n"+
            "2: "+ day.getYear() +"\n"+
            "3: "+ day.getFullYear()+ "\n"+
            "4: "+ day.getDate() +"\n"+
            "5: "+ day.getDay() +"\n"+
        "3: "+ day.getUTCDay()+ "\n"+
        "4: "+ day.getUTCDate() +"\n");
*/
        //console.log("joined method"+ day);
        return this.DateService.returnDateFormat(date);
    }



    static get $inject(){
        return ['$state', LessonsService.name, UserService.name, DateService.name];
    }



}

export default ViewLessonsComponent;