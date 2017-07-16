'use strict';


export default class DateService {


    constructor() {

    }

    static get name(){
        return 'dateService';
    }


    returnDateFormat(date){
        console.log("service :" +date);
        var day =  new Date(date);
        console.log("day: "+ day);
        return day.toDateString();
    }
}