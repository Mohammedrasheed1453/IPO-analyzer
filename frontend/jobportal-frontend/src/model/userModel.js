class UserModel {
    constructor({ username = "", email = "", mobile = "", password = "" }) {
      this.username = username;
      this.email = email;
      this.mobile = mobile;
      this.password = password;
    }
  }
  
  export default UserModel;
  