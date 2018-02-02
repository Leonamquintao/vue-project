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

    <hr>
    <p>Computed | Methods</p>
    <button v-on:click="seccounter++">Add</button>
    <button v-on:click="seccounter--">Remove</button>
    <button v-on:click="secondCounter++">Aumentar segundo</button>
    <p>Counter: {{ seccounter }} | {{ secondCounter }}</p>
    <p>Result: {{ result() }} | {{ output }}</p>

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
        seccounter: 0,
        secondCounter: 0,
        x: 0,
        y: 0,
        alertText: '',
        name: 'Leonam Quintão',
      }
    },
    computed: {
      output() {
        return this.seccounter > 5 ? 'Maior que 5' : 'Menor que 5';
      }
    },
    watch: {
      counter: function(value) {
        if(value > 10) {
          this.counter = 0;
          alert('chega velho!!!');
        }
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
      },
      result() {
        return this.seccounter > 5 ? 'Maior que 5' : 'Menor que 5';
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
