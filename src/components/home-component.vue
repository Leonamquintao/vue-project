<template>
  <div class="home">

    <h1 v-once>{{ msg }}</h1>
    <p>{{ msg }} - <a v-bind:href="link">Google</a></p>
    <p>{{ sayHello() }} - <a :href="link">Google</a></p>

    <hr>
    <p>{{ finishedLink }}</p>
    <p v-html="finishedLink"></p>

    <hr>
    <button v-on:click="increase()">Add +1 to Counter</button>
    <button v-on:click="decrease()">Remove 1 to Counter</button>
    <p>Counter: {{ counter }}</p>

    <hr>
    <p v-on:mousemove="updateCoordenates($event)">Coordenates: {{ x }} / {{ y }}</p>

    <hr>
    <input type="text" placeholder="click enter..." v-on:keyup.enter="alertMe()" v-model="alertText">

    <hr>
    <input type="text" v-model="name">
    <p>{{ name }}</p>
  </div>
</template>

<script>
  export default {
    name: 'HomeComponent',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App!!!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
        alertText: '',
        name: 'Leonam Quintão',
      }
    },
    methods: {
      sayHello() {
        this.msg = 'Hello!';
        return this.msg;
      },
      increase() {
        this.counter++;
      },
      decrease() {
        if(this.counter > 0) {
          this.counter--;
        }
      },
      updateCoordenates(event) {
        this.x = event.clientX;
        this.y = event.clientY;
      },
      alertMe() {
        alert('you hit enter! '+ this.alertText);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
