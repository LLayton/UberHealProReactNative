import { observable, action, makeObservable, computed } from 'mobx'

class StoreConnexion {
    password = '';
    mail = '';
    //Password
    getPassword = () => {
        return this.password;
    }
    setPassword = (unPassword) => {
        this.password = unPassword;
    }
    //Mail
    getMail = () => {
        return this.mail;
    }
    setMail = (mail) => {
        this.mail = mail;
    }

    get isConnected() {
        if (this.mail) {
            return true;
        } else {
            return false;
        }
    }
    constructor() {
        makeObservable(this, {
            login: observable,//Listes des tâches en cours
            password: observable,
            mail: observable,
            accessToken: observable,
            refreshToken: observable,
            id_socket: observable,
            profilPicture: observable,
            getMail: action,
            setMail: action,
            isConnected: computed,
            getProfilPicture: action,
            setProfilPicture: action,
            getLogin: action,
            getPassword: action,
            getRefresh: action,
            getAccess: action,
            setPassword: action,
            setLogin: action,
            setRefresh: action,
            setAccess: action,
            setIdSocket: action,
            getIdSocket: action

        });
    }
}

const storeConnexion = new StoreConnexion();
export { storeConnexion };