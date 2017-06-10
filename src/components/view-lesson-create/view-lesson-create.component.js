/**
 * Created by peresthahadji on 10.06.17.
 */
'use strict';

import template from './view-lesson-create.template.html';

import LessonsService from './../../services/lessons/lessons.service';
import UserService from './../../services/user/user.service';

class ViewLessonCreateComponent {
    constructor(){
        this.controller = ViewLessonCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewLessonCreate';
    }
}

class ViewLessonCreateComponentController{
    constructor($state, LessonsService,UserService){
        this.lesson = {};
        this.$state = $state;
        this.LessonsService = LessonsService;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('lessons',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();

        this.lesson['user'] = user['_id'];
        this.LessonsService.create(this.lesson).then(data => {
            let _id = data['_id'];
            this.$state.go('lesson',{ lessonId:_id});
        });

    };


    static get $inject(){
        return ['$state', LessonsService.name, UserService.name];
    }

}


export default ViewLessonCreateComponent;