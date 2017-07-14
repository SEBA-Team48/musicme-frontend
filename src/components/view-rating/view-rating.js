'use strict';

import angular from 'angular';

import ViewRatingComponent from './view-rating.component';


export default angular.module('ViewRating', [])
    .component(ViewRatingComponent.name, new ViewRatingComponent);