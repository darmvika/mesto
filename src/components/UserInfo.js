export default class UserInfo {
    constructor(configInfo) {
        this._profileName = document.querySelector(configInfo.profileNameSelector);
        this._profileJob = document.querySelector(configInfo.profileJobSelector);
    } 

    getUserInfo() {
        return {name: this._profileName.textContent, job: this._profileJob.textContent};
    }

    setUserInfo(dataUsers) {
        this._profileName.textContent = dataUsers.name;
        this._profileJob.textContent = dataUsers.job;
    }
}