
'use strict';

import template from './view-lesson.template.html';
import LessonsService from './../../services/lessons/lessons.service';
import UserService from './../../services/user/user.service';

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
    constructor($state,LessonService,UserService){
        this.$state = $state;
        this.LessonService = LessonService;
        this.UserService = UserService;

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


    getPosterURL(){
        let posterURL = 'http://placehold.it/32x32';
        if (this.lesson.hasOwnProperty('posters')) {
            if (this.lesson.posters.hasOwnProperty('thumbnail')) {
                posterURL = this.lesson.posters.thumbnail;
            } else if (this.lesson.posters.hasOwnProperty('profile')) {
                posterURL = this.lesson.posters.profile;
            } else if (this.lesson.posters.hasOwnProperty('detailed')) {
                posterURL = this.lesson.posters.detailed;
            } else {
                posterURL = this.lesson.posters.original;
            }
        }
        return posterURL;
    }

    static get $inject(){
        return ['$state', LessonsService.name, UserService.name];
    }

}


export default ViewLessonComponent;