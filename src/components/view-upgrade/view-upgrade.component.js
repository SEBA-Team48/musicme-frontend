
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-upgrade.template.html';


class ViewUpgradeComponent {
    constructor(){
        this.controller = ViewUpgradeComponentController;
        this.template = template;
        this.bindings = {
            user: '<',
        }

    }

    static get name() {
        return 'viewUpgrade';
    }


}

class ViewUpgradeComponentController {
    constructor($state,UserService){
        this.model = {};
        this.$state = $state;
        this.UserService = UserService;

    }

    $onInit() {
        this.model = JSON.parse(JSON.stringify(this.user))
    }
    upgrade() {
        let _id = this.user['_id'];
        this.model.is_teacher = true;
        this.UserService.updateUserDetails(this.model).then(data => {
            this.user = JSON.parse(JSON.stringify(data));
            
            this.$state.go('profile',{});
        });
    };


    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewUpgradeComponent;