import CryptoJS from "crypto-js";
import LoginService from "../../service/LoginService";

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      user: {
        userName: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, message: "Ingrese su usuario", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Ingrese su contraseña", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      const login = new LoginService();
      let hash = CryptoJS.SHA256(this.loginForm.password).toString();

      this.user.userName = this.loginForm.username;
      this.user.password = hash;

      login.checkLoging(this.user).then((e) => {
        if (e.status == 200) {
          this.$cookies.set('JWT-USER', e.data)
          this.$router.push('/home')
        }else if (e.status == 401) {
          console.log("NO ES CORRECTO" + e.data);
        }
      });
    },
  },
};
