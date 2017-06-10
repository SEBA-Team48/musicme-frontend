/**
 * Created by peresthahadji on 10.06.17.
 */
'use strict';

import angular from 'angular';

import UserService from './user.service';


export default angular.module('UserServiceDefinition', [])
    .service(UserService.name, UserService);