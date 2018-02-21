<template>
  <div id="counter">

    <button v-on:click="increase()">Add +1 to Counter</button>
    <button v-on:click="decrease()">Remove 1 to Counter</button>
    <p>Counter: {{ counter }}</p>


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
  name: "counter-component",
  data() {
    return {
      counter: 0,
      seccounter: 0,
      secondCounter: 0,
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
    increase() {
      this.counter++;
    },
    decrease() {
      if(this.counter > 0) {
        this.counter--;
      }
    },
    result() {
      return this.seccounter > 5 ? 'Maior que 5' : 'Menor que 5';
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
