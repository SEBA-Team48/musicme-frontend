
'use strict';

import template from './view-teachers.template.html';
import TeachersService from './../../services/teachers/teachers.service';
import UserService from './../../services/user/user.service';


class ViewTeachersComponent {
    constructor(){
        this.controller = ViewTeachersComponentController;
        this.template = template;
        this.bindings = {
            teachers: '<',
        }
    }

    static get name() {
        return 'viewTeachers';
    }
}

class ViewTeachersComponentController{
    constructor($state,TeachersService,UserService){
        this.$state = $state;
        this.TeachersService = TeachersService;
        this.UserService = UserService;
        /*User.findOne({
            where: {id: req.params.id}
        }).then(function(user) {
            this.teachers.find({_id: req.params.id, 'name': "test"});
        });*/

       /* Teacher.findOne({
            where: {teacherName: 'Sanchez'}
        }).then(function(teacher){
            this.teachers.find({'teacherName': "Sanchez" });

    });*/

          /*  , 'name instrument_list', function (err, teacher) {
            if (err) return handleError(err);
            console.log('%s %s is a %s.', teacher.name.first, teacher.teacherName, teacher.instrument_list) // Space Ghost is a talk show host.
        })*/

        }

    details (teacher) {
        let _id = teacher['_id'];
        this.$state.go('teacher',{ teacherId:_id});
    };

    edit (teacher) {

        if (this.UserService.isAuthenticated()) {
            let _id = teacher['_id'];
            this.$state.go('teacherEdit',{ teacherId:_id});
        } else {
            this.$state.go('login',{});
        }
    };

    newTeacher(){

        if (this.UserService.isAuthenticated()) {
            this.$state.go('teacherAdd',{});
        } else {
            this.$state.go('login',{});
        }

    }

    delete(teacher) {
        if (this.UserService.isAuthenticated()) {
            let _id = teacher['_id'];

            this.TeachersService.delete(_id).then(response => {
                let index = this.teachers.map(x => x['_id']).indexOf(_id);
                this.teachers.splice(index, 1);
            })

        } else {
            this.$state.go('login',{});
        }
    };


    static get $inject(){
        return ['$state', TeachersService.name, UserService.name];
    }



}

export default ViewTeachersComponent;