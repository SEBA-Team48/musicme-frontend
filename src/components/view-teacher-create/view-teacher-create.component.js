
'use strict';

import template from './view-teacher-create.template.html';

import TeachersService from './../../services/teachers/teachers.service';
import UserService from './../../services/user/user.service';

class ViewTeacherCreateComponent {
    constructor(){
        this.controller = ViewTeacherCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewTeacherCreate';
    }
}

class ViewTeacherCreateComponentController{
    constructor($state, TeachersService,UserService){
        this.teacher = {};
        this.$state = $state;
        this.TeachersService = TeachersService;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('teachers',{});
    };

    save() {
        console.log("save a teacher")
        let user = this.UserService.getCurrentUser();

        this.teacher['user'] = user['_id'];
        this.TeachersService.create(this.teacher).then(data => {
            let _id = data['_id'];
            //this.$state.go('teacher',{ teacherId:_id});
            this.$state.go('teachers',{})
        });

    };


    help(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('teachers',{})
        } else {
            this.$state.go('login',{});
        }
    }

    static get $inject(){
        return ['$state', TeachersService.name, UserService.name];
    }

}


export default ViewTeacherCreateComponent;