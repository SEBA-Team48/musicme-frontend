
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-profile.template.html';


class ViewProfileComponent {
    constructor(){
        this.controller = ViewProfileComponentController;
        this.template = template;
        this.bindings = {
            user: '<',
        }
    }

    static get name() {
        return 'viewProfile';
    }


}

class ViewProfileComponentController {
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    getCurrentUser(){
        return this.user.username;
    }

    editProfile(){
        this.$state.go('profileEdit',{});
    }

    getRating(){
        var count = 0;
        var average = 0;
        if(this.user.rating.length == 0){
            return 'No Ratings';
        }else{
        for(var i=0; i < this.user.rating.length ; i++){
            average += this.user.rating[i];
            count++;
        }
        var avg = average/count;
        return avg.toFixed(2);
        }
    }

    checkStatus(){
        if(this.user.is_teacher != true){
            return 'Student';
        } else {return 'Teacher';}
    }

    showComments(){
        if(this.user.comment.length == 0){
            return 'No Comments';
        }else {
            var comments = null;
            for (var i = 0; i < this.user.comment.length; i++) {
                comments += this.user.comment[i] ;
            }
            return comments;
        }
    }


    
    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewProfileComponent;