'use strict';


export default class UserService {

    static get $inject(){
        return ['$http', '$window','API_URL'];
    }

    constructor($http,$window,API_URL) {
        this.$http = $http;
        this.$window = $window;
        this.API_URL = API_URL;
        this.resourceUrl = `${ API_URL }/user/`;

    }

    static get name(){
        return 'UserService';
    }

    register(user, pass, fname, lname, emailadress,isTeacher) {
        return this.$http.post(`${ this.API_URL }/user/signup`, {
            username: user,
            password: pass,
			fname: fname,
			lname: lname,
			emailadress: emailadress,
            is_teacher: isTeacher
        });
    }
    /*rate(rate, rec, com){
        return this.$http.post(`${ this.API_URL }/landingPage`, {
            rating: rate,
            recommend: rec,
            comment: com
        });
    }*/
    login(user, pass) {
        return this.$http.post(`${ this.API_URL }/user/login`, {
            username: user,
            password: pass
        });
    }

    logout(){
        this.$window.localStorage.removeItem('jwtToken');
    }

    getCurrentUser() {
        let token = this.$window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(this.$window.atob(base64)).user;
    }

    getUserDetails() {
        let user = this.getCurrentUser();
        let url = `${ this.resourceUrl }${ user._id }`;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }

    updateUserDetails(user) {
        let url = `${ this.resourceUrl }${ user['_id'] }`;
        return this.$http.put(url,user).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }

    isAuthenticated() {
        return !!this.$window.localStorage['jwtToken'];
    }


}