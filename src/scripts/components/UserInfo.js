export default class UserInfo {
  constructor(configInfo) {
    this._profileName = document.querySelector(configInfo.profilenameSelector);
    this._profileJob = document.querySelector(configInfo.profileJobSelector);
    this._profileAvatar = document.querySelector(configInfo.profileAvatarSelector)
  }

  getUserInfo() {
    return { name: this._profileName.textContent, job: this._profileJob.textContent };
  }

  setUserInfo({ name, job, avatar }) {
    this._profileAvatar.src = avatar
    this._profileName.textContent = name
    this._profileJob.textContent = job
  }
}