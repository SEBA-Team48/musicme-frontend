'use strict';


export default class DateService {


    constructor() {

    }

    static get name(){
        return 'dateService';
    }

    //returns the Day in (Sun Jan 01 2111) Format
    returnDateFormat(date){
        var day =  new Date(date);
        return day.toDateString();
    }
}