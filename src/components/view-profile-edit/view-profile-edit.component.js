
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-profile-edit.template.html';


class ViewProfileEditComponent {
    constructor(){
        this.controller = ViewProfileEditComponentController;
        this.template = template;
        this.bindings = {
            user: '<',
        }
    }

    static get name() {
        return 'viewProfileEdit';
    }


}

class ViewProfileEditComponentController {
    constructor($state,UserService){
        this.model = {};
        this.$state = $state;
        this.UserService = UserService;
    }


    cancel() {
        this.$state.go('profile',{});
    };

    $onInit() {
        this.model = JSON.parse(JSON.stringify(this.user))
    }

    save() {
        let _id = this.user['_id'];

        this.UserService.updateUserDetails(this.model).then(data => {
            this.user = JSON.parse(JSON.stringify(data));

            this.$state.go('profile',{});
        });

    };


    
    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewProfileEditComponent;