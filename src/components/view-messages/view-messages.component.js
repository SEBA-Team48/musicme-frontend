
'use strict';

import template from './view-messages.template.html';
import MessagesService from './../../services/messages/messages.service';
import UserService from './../../services/user/user.service';
import DateService from'./../../services/date/date.service';

class ViewMessagesComponent {
    constructor(){
        this.controller = ViewMessagesComponentController;
        this.template = template;
        this.bindings = {
            messages: '<',
        }
    }

    static get name() {
        return 'viewMessages';
    }
}

class ViewMessagesComponentController{
    constructor($state,MessagesService,UserService,DateService){
        this.$state = $state;
        this.MessagesService = MessagesService;
        this.UserService = UserService;
        this.DateService = DateService;
        /*User.findOne({
            where: {id: req.params.id}
        }).then(function(user) {
            this.messages.find({_id: req.params.id, 'name': "test"});
        });*/

        }

    details (message) {
        let _id = message['_id'];
        if(message.unread){
            message['unread']= false;
        }
        this.MessagesService.update(message).then(data => {
            this.message = JSON.parse(JSON.stringify(data));
        });
        this.$state.go('message',{ messageId:_id});
    };



    delete(message) {
        if (this.UserService.isAuthenticated()) {
            let _id = message['_id'];

            this.MessagesService.delete(_id).then(response => {
                let index = this.messages.map(x => x['_id']).indexOf(_id);
                this.messages.splice(index, 1);
            })

        } else {
            this.$state.go('login',{});
        }
    };

    returnDay(date){
        var day =  new Date(date);
        return this.DateService.returnDateFormat(date);
    }

    returnName(id){
        let user_data = this.UserService.getUserDetailsByID(id);
        return user_data.fname + " " + user_data.lname;
    }


    static get $inject(){
        return ['$state', MessagesService.name, UserService.name,DateService.name];
    }



}

export default ViewMessagesComponent;