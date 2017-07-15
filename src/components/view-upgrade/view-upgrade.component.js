
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-upgrade.template.html';


class ViewUpgradeComponent {
    constructor(){
        this.controller = ViewUpgradeComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewUpgrade';
    }


}

class ViewUpgradeComponentController {
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    seeProfile(){
        // setting currentUser status to 1
        console.log('test');
        this.$state.go('profile',{});
    }

    getCurrentUser(){
        let user = this.UserService.getCurrentUser();
        return user.username;
    }


    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewUpgradeComponent;