
'use strict';

import template from './view-lessons.template.html';



class ViewLessonsComponent {
    constructor(){

        this.controller = ViewLessonsComponentController;
        this.template = template;
        this.bindings = {
            lessons: '<',
        }
    }

    static get name() {
        return 'myWeeklyCalendar';
    }
}

class ViewLessonsComponentController{
    constructor($state,LessonsService,UserService){

        this.times =

    }


}

export default ViewLessonsComponent;