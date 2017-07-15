
'use strict';

import template from './view-privacy-rules.template.html';
import './view-privacy-rules.style.css';

class ViewPrivacyRulesComponent {
    constructor(){
        this.controller = ViewPrivacyRulesComponentController;
        this.template = template;


    }

    static get name() {
        return 'viewPrivacyRules';
    }


}

class ViewPrivacyRulesComponentController{
    constructor(){
        this.year = new Date().getFullYear();

    }


}


export default ViewPrivacyRulesComponent;