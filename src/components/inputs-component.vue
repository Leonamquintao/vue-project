<template>
  <div id="inputs">

    <input type="text" placeholder="click enter..." v-on:keyup.enter="alertMe()" v-model="alertText">

    <hr>

    <input type="text" v-model="name">
    <p>{{ name }}</p>

  </div>
</template>

<script>
export default {
  name: "inputs-component",
  data () {
    alertText: '',
    name: 'Leonam Quintão',
  },
  methods: {
    alertMe() {
      alert('you hit enter! '+ this.alertText);
    },
  }
}
</script>
<style lang="scss" scoped>
</style>
