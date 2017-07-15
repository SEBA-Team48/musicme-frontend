'use strict';

import angular from 'angular';

import MessagesService from './messages.service';


export default angular.module('MessagesServiceDefinition', [])
    .service(MessagesService.name, MessagesService)