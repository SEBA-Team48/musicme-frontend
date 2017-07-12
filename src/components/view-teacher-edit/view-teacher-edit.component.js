
'use strict';

import template from './view-teacher-edit.template.html';

import TeachersService from './../../services/teachers/teachers.service';

class ViewTeacherEditComponent {
    constructor(){
        this.controller = ViewTeacherEditComponentController;
        this.template = template;
        this.bindings = {
            teacher: '<',
        }
    }

    static get name() {
        return 'viewTeacherEdit';
    }
}

class ViewTeacherEditComponentController{
    constructor($state, TeachersService){
        this.model = {};
        this.$state = $state;
        this.TeachersService = TeachersService;
    }

    $onInit() {
        //Clone the Music Data
        this.model = JSON.parse(JSON.stringify(this.teacher))
    }

    cancel() {
        this.model = JSON.parse(JSON.stringify(this.teacher));
        this.$state.go('teachers',{});
    };

    save() {
        let _id = this.teacher['_id'];

        console.log("yet another save method");
        this.TeachersService.update(this.model).then(data => {
            this.teacher = JSON.parse(JSON.stringify(data));

            this.$state.go('teacher',{ teacherId:_id});
        });

    };

    delete() {
        let _id = this.teacher['_id'];

        this.TeachersService.delete(_id).then(response => {
            this.$state.go('teachers',{});
        });
    };


    static get $inject(){
        return ['$state', TeachersService.name];
    }

}


export default ViewTeacherEditComponent;