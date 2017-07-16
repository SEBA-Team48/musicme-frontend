
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-rating.template.html';

import './view-rating.style.css';

class ViewRatingComponent {
    constructor(){
        this.controller = ViewRatingComponentController;
        this.template = template;
        this.bindings = {
            user: '<',
        }

    }

    static get name() {
        return 'viewRating';
    }


}

class ViewRatingComponentController {
    constructor($state,UserService){
        this.model = {};
        this.$state = $state;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('landingPage',{});
    };

    $onInit() {
        this.model = JSON.parse(JSON.stringify(this.user));
        this.comment = "";
        this.rating = "";
    }

    save() {
        let _id = this.user['_id'];

        this.model["rating"].push(this.rating);
        this.model["comment"].push(this.comment);

        this.UserService.updateUserDetails(this.model).then(data => {
            this.user = JSON.parse(JSON.stringify(data));

            this.$state.go('landingPage',{});
        });

    };



    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewRatingComponent;