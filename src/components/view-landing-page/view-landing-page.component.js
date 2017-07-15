
'use strict';

import template from './view-landing-page.template.html';
import LessonsService from './../../services/lessons/lessons.service';
import UserService from './../../services/user/user.service';


class ViewLandingPageComponent {
    constructor(){
        this.controller = ViewLandingPageComponentController;
        this.template = template;
        this.bindings = {
            lessons: '<',
        }
    }

    static get name() {
        return 'viewLandingPage';
    }


}

class ViewLandingPageComponentController{
    constructor($state,LessonsService,UserService){
        this.$state = $state;
        this.LessonsService = LessonsService;
        this.UserService = UserService;
    }

    contact(lesson) {
        if (this.UserService.isAuthenticated()) {
            let _id = lesson['_id'];
            this.$state.go('lesson',{ lessonId:_id});
        } else {
            this.$state.go('login',{});
        }
    };

    search() {
        $scope.searchQuery = $scope.query;
        $scope.lessonsToFilter= $ctrl.lessons;
        $scope.searchResult=true;
    }

    getSearchBannerURL(){
        let bannerURL = './musical-instruments.jpg';
        return bannerURL;
    }

    getLessonDisplayImageURL(){
        let lessonDisplayImageURL = './music-lesson-Stock-Photo.jpg';
        return lessonDisplayImageURL;
    }

    static get $inject(){
        return ['$state', LessonsService.name, UserService.name];
    }

}

export default ViewLandingPageComponent;