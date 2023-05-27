import { createApp } from 'vue';

import App from './App.vue';
//import FriendContact from './components/FriendContact.vue';
import LoginForm from './components/Login.vue';
import './style.css';

const app = createApp(App);

//app.component('friend-contact', FriendContact);
app.component('login-form', LoginForm);

app.mount('#app');
