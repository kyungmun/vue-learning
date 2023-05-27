<template>
  <!-- Login From -->
  <div class="form login_form">
    <form action="#">
      <h2>Login</h2>

      <div class="input_box">
        <input type="email" placeholder="Enter your email" required />
        <i class="uil uil-envelope-alt email"></i>
      </div>
      <div class="input_box">
        <input type="password" placeholder="Enter your password" required />
        <i class="uil uil-lock password"></i>
        <i class="uil uil-eye-slash pw_hide"></i>
      </div>

      <div class="option_field">
        <span class="checkbox">
          <input type="checkbox" id="check" />
          <label for="check">Remember me</label>
        </span>
        <a href="#" class="forgot_pw">Forgot password?</a>
      </div>

      <button class="button" @click="loginClick()">Login Now</button>

      <div class="login_signup">Don't have an account? <a href="#" id="signup">Signup</a></div>
    </form>
  </div>

  <!--Signup From -->
  <div class="form signup_form">
    <form action="#">
      <h2>Signup</h2>

      <div class="input_box">
        <input type="email" placeholder="Enter your email" required />
        <i class="uil uil-envelope-alt email"></i>
      </div>
      <div class="input_box">
        <input type="password" placeholder="Create password" required />
        <i class="uil uil-lock password"></i>
        <i class="uil uil-eye-slash pw_hide"></i>
      </div>
      <div class="input_box">
        <input type="password" placeholder="Confirm password" required />
        <i class="uil uil-lock password"></i>
        <i class="uil uil-eye-slash pw_hide"></i>
      </div>

      <button class="button">Signup Now</button>

      <div class="login_signup">Already have an account? <a href="#" id="login">Login</a></div>
    </form>
  </div>
</template>


<script>
export default {

  mounted() {
    
    //const home = document.querySelector(".home");

    const signupBtn = document.querySelector("#signup");
    const loginBtn = document.querySelector("#login");
    const pwShowHide = document.querySelectorAll(".pw_hide");

    pwShowHide.forEach((icon) => {
      icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
          getPwInput.type = "text";
          icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
          getPwInput.type = "password";
          icon.classList.replace("uil-eye", "uil-eye-slash");
        }
      });
    });

    signupBtn.addEventListener("click", this.showSignupForm);
    loginBtn.addEventListener("click", this.showLoginForm);

  },
  methods: {
    loginClick() {

      // 로그인 정보 가져오기
      const emailInput = document.querySelector('.login_form input[type="email"]');
      // const passwordInput = document.querySelector('.login_form input[type="password,text"]');
      const passwordInput = document.querySelector('.login_form input[type="password"], .login_form input[type="text"]');

      const email = emailInput.value;
      const password = passwordInput.value;

      // 서버로 보낼 데이터
      const data = {
        email: email,
        password: password
      };

      console.log(data)

      // 서버 API URL
      const apiUrl = "http://localhost:8081/auth/login";

      // POST 요청 보내기
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(result => {
          // 응답 처리
          console.log(result);
          // TODO: 로그인 성공 또는 실패에 따른 처리
        })
        .catch(error => {
          // 에러 처리
          console.error(error);
        });

    },
  
    showLoginForm() {
      const formContainer = document.querySelector(".form_container");
      formContainer.classList.remove("active");
    },
    showSignupForm() {
      const formContainer = document.querySelector(".form_container");
      formContainer.classList.add("active");
    }
  },
  
};
</script>