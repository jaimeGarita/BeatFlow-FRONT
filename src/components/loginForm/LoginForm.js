import bcrypt from "bcryptjs";
import LoginService from "../../service/LoginService";

export default {
  data() {
    return {
      loginForm: {
        username: "",
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
    async login() {
      let passwordEncode = await this.encryptPassword();
      console.log(passwordEncode);
    },
    async encryptPassword() {
      const loginService = new LoginService();

      try {
        const response = await loginService.getSalting(this.loginForm.username);
        const salt = response.data;
        const hashedPassword = await bcrypt.hash(
          this.loginForm.password,
          salt
        );
        return hashedPassword;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
