'use strict';

import angular from 'angular';

import ViewLessonsComponent from './view-lessons.component';



angular.module('tabsDemoDynamicHeight', ['ngMaterial']);


export default angular.module('ViewLessons', ['weeklyScheduler'])
    .component(ViewLessonsComponent.name, new ViewLessonsComponent);


/*
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    {
        $scope.days = "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    }
});


*/

// function to set the default data
/*$scope.reset = function() {

    fb.$set({
        monday: {
            name: 'Monday',
            slots: {
                '0900': {
                    time: '9:00am',
                    booked: false
                },
                '0110': {
                    time: '11:00am',
                    booked: false
                }
            }
        }   npmnpnp,
        tuesday: {
            name: 'Tuesday',
            slots: {
                '0900': {
                    time: '9:00am',
                    booked: false
                },
                '0110': {
                    time: '11:00am',
                    booked: false
                }
            }
        }
    });

};*/

