
'use strict';

import template from './view-landing-page.template.html';
import LessonsService from './../../services/lessons/lessons.service';
import UserService from './../../services/user/user.service';
import DateService from'./../../services/date/date.service';


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
    constructor($state,LessonsService,UserService,DateService){
        this.$state = $state;
        this.LessonsService = LessonsService;
        this.UserService = UserService;
        this.DateService = DateService;
    }

    contact(lesson) {
        if (this.UserService.isAuthenticated()) {
            let _id = lesson['_id'];
            this.$state.go('lesson',{ lessonId:_id});
        } else {
            this.$state.go('login',{});
        }
    };

    returnDay(date){
       var day =  new Date(date);
        return this.DateService.returnDateFormat(date);
    }

    calculateRating(user){
        var count = 0;
        var average = 0;
        if(user.rating.length == 0){
            return 'No Ratings';
        }else{
        for(var i=0; i < user.rating.length ; i++){
            average += user.rating[i];
            count++;
        }
        var avg = average/count;
        return avg.toFixed(2);
        }
    }

    returnRating(id){
        let user_data = this.UserService.getUserDetailsByID(id);
        return this.calculateRating(user_data);
    }

    returnName(id){
        let user_data = this.UserService.getUserDetailsByID(id);
        return user_data.fname + " " + user_data.lname;
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
        return ['$state', LessonsService.name, UserService.name, DateService.name];
    }

}

export default ViewLandingPageComponent;