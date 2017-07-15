
'use strict';

import template from './view-message.template.html';
import MessagesService from './../../services/messages/messages.service';
import UserService from './../../services/user/user.service';

class ViewMessageComponent {
    constructor(){
        this.controller = ViewMessageComponentController;
        this.template = template;
        this.bindings = {
            message: '<',
        }

    }

    static get name() {
        return 'viewMessage';
    }


}

class ViewMessageComponentController{
    constructor($state,MessageService,UserService){
        this.$state = $state;
        this.MessagesService = MessagesService;
        this.UserService = UserService;

    }


    delete() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.message['_id'];

            this.MessagesService.delete(_id).then(response => {
                this.$state.go('messages',{});
            });
        } else {
            this.$state.go('login',{});
        }
    };



    static get $inject(){
        return ['$state', MessagesService.name, UserService.name];
    }

}


export default ViewMessageComponent;