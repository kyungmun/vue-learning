<template> 
<div>
  <!-- Unicons -->
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
  
  <!-- 내용 -->
  <header class="header">
      <nav class="nav">
        <a href="#" class="nav_logo">freegue</a>

        <ul class="nav_items">
          <li class="nav_item">
            <a href="#" class="nav_link">Home</a>
            <a href="#" class="nav_link">Product</a>
            <a href="#" class="nav_link">Services</a>
            <a href="#" class="nav_link">Contact</a>
          </li>
        </ul>

        <button class="button" id="form-open">Login</button>
      </nav>
      <form action="#" class="search-bar">
        <input type="text" placeholder="Search...">
        <button type="submit"><i class='bx bx-search'></i></button>
      </form>
    </header>

    <!-- Home -->
    <section class="home">
      <div class="form_container">
        <i class="uil uil-times form_close"></i>

        <login-form></login-form>

      </div>
    </section>
</div>
</template> 

<script>
import LoginForm from './components/Login.vue';

export default {
  components: { LoginForm },
  mounted() {
    document.title = "Sport Portal Freegue"; 

    const formOpenBtn = document.querySelector("#form-open");
    const formCloseBtn = document.querySelector(".form_close");

    formOpenBtn.addEventListener("click", this.openLoginForm);
    formCloseBtn.addEventListener("click", this.closeLoginForm);
  },
  methods: {
    openLoginForm() {
      const home = document.querySelector(".home");
      home.classList.add("login_form_show");
    },
    closeLoginForm() {
      const emailInput = document.querySelector('.login_form input[type="email"]');
      const passwordInput = document.querySelector('.login_form input[type="password"], .login_form input[type="text"]');
      emailInput.value = ""
      passwordInput.value = ""

      const home = document.querySelector(".home");
      home.classList.remove("login_form_show");
    },
  }
};
</script>
