
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-rating.template.html';

import './view-rating.style.css';

class ViewRatingComponent {
    constructor(){
        this.controller = ViewRatingComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewRating';
    }


}

class ViewRatingComponentController {
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('landingPage',{});
    };

    $onInit() {
        this.rating = {};
    }

    submit(){
        let rating = this.rating.rating;
        let comment = this.rating.comment;


        this.UserService.rate(rating,comment).then(()=> {
            this.$state.go('landingPage',{});
    });
    }


    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewRatingComponent;