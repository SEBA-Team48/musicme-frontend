'use strict';

import angular from 'angular';

import ViewLessonsComponent from './view-lessons.component';



angular.module('tabsDemoDynamicHeight', ['ngMaterial']);


export default angular.module('ViewLessons', [])
    .component(ViewLessonsComponent.name, new ViewLessonsComponent);




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
        },
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

