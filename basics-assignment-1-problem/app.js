const app = Vue.createApp({
  data() {
    return {
      name : 'kyungmun',
      confirmname : '',
      age : 49,
      imageLink : 'https://pkg.go.dev/static/shared/gopher/airplane-1200x945.svg'
    };
  },
  methods : {
    getAgePlus5() {
      return this.age + 5
    },
    getRandom() {
      return Math.random()
    },
    inputName() {
      this.name = this.enteredName;
    },
    changeName(event, postfix) {
      this.name = event.target.value + ' ' + postfix
    },
    addAge(num){
      this.age = this.age + num;
    },
    reduceAge(num){
      this.age = this.age - num;
    },
    submit(){
      alert("alert")
    },
    confirmName(){
      this.confirmname = this.name;
    }

  }
});

app.mount('#assignment');
