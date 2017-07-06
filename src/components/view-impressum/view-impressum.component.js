
'use strict';

import template from './view-impressum.template.html';
import './view-impressum.style.css';

class ViewImpressumComponent {
    constructor(){
        this.controller = ViewImpressumComponentController;
        this.template = template;


    }

    static get name() {
        return 'viewImpressum';
    }


}

class ViewImpressumComponentController{
    constructor(){
        this.year = new Date().getFullYear();

    }


}


export default ViewImpressumComponent;