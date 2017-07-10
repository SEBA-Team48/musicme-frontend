
'use strict';

import template from './view-teacher.template.html';
import TeachersService from './../../services/teachers/teachers.service';
import UserService from './../../services/user/user.service';

class ViewTeacherComponent {
    constructor(){
        this.controller = ViewTeacherComponentController;
        this.template = template;
        this.bindings = {
            teacher: '<',
        }

    }

    static get name() {
        return 'viewTeacher';
    }


}

class ViewTeacherComponentController{
    constructor($state,TeacherService,UserService){
        this.$state = $state;
        this.TeacherService = TeacherService;
        this.UserService = UserService;

    }

    edit () {

        if (this.UserService.isAuthenticated()) {
            let _id = this.lesson['_id'];
            this.$state.go('teacherEdit',{ teacherId:_id});
        } else {
            this.$state.go('login',{});
        }

    };


    delete() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.teacher['_id'];

            this.TeachersService.delete(_id).then(response => {
                this.$state.go('teachers',{});
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
        return ['$state', TeachersService.name, UserService.name];
    }

}


export default ViewTeacherComponent;