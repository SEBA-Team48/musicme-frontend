/**
 * Created by peresthahadji on 10.06.17.
 */
'use strict';

import template from './view-lesson-edit.template.html';

import LessonsService from './../../services/lessons/lessons.service';

class ViewLessonEditComponent {
    constructor(){
        this.controller = ViewLessonEditComponentController;
        this.template = template;
        this.bindings = {
            lesson: '=',
        }
    }

    static get name() {
        return 'viewLessonEdit';
    }
}

class ViewLessonEditComponentController{
    constructor($state, LessonsService){
        this.model = {};
        this.$state = $state;
        this.LessonsService = LessonsService;
    }

    $onInit() {
        //Clone the Lesson Data
        this.model = JSON.parse(JSON.stringify(this.lesson))
    }

    cancel() {
        this.model = JSON.parse(JSON.stringify(this.lesson));
        this.$state.go('lessons',{});
    };

    save() {
        let _id = this.lesson['_id'];

        this.LessonService.update(this.model).then(data => {
            this.lesson = JSON.parse(JSON.stringify(data));

            this.$state.go('lesson',{ lessonId:_id});
        });

    };

    delete() {
        let _id = this.lesson['_id'];

        this.LessonsService.delete(_id).then(response => {
            this.$state.go('lessons',{});
        });
    };

    static get $inject(){
        return ['$state', LessonsService.name];
    }

}


export default ViewLessonEditComponent;