
'use strict';

import template from './view-messages.template.html';
import MessagesService from './../../services/messages/messages.service';
import UserService from './../../services/user/user.service';


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
    constructor($state,MessagesService,UserService){
        this.$state = $state;
        this.MessagesService = MessagesService;
        this.UserService = UserService;
        /*User.findOne({
            where: {id: req.params.id}
        }).then(function(user) {
            this.messages.find({_id: req.params.id, 'name': "test"});
        });*/

        }

    details (message) {
        //TODO : update the unread Boolean value
        let _id = message['_id'];
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


    static get $inject(){
        return ['$state', MessagesService.name, UserService.name];
    }



}

export default ViewMessagesComponent;