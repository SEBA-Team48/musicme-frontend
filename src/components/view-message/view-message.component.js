
'use strict';

import template from './view-message.template.html';
import MessagesService from './../../services/messages/messages.service';
import UserService from './../../services/user/user.service';
import DateService from'./../../services/date/date.service';

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
    constructor($state,MessageService,UserService,DateService){
        this.$state = $state;
        this.MessagesService = MessagesService;
        this.UserService = UserService;
        this.DateService = DateService;
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

    
    returnDay(date){
        var day =  new Date(date);
        return this.DateService.returnDateFormat(date);
    }

    static get $inject(){
        return ['$state', MessagesService.name, UserService.name,DateService.name];
    }

}


export default ViewMessageComponent;