<template>
  <div class="once">

    <h1 v-once>{{ msg }}</h1>
    <p>{{ msg }} - <a v-bind:href="link">Google</a></p>
    <p>{{ sayHello() }} - <a :href="link">Google</a></p>

    <hr>
    <p>{{ finishedLink }}</p>
    <p v-html="finishedLink"></p>

  </div>
</template>

<script>
export default {
  name: "once-component",
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!!!',
      link: 'http://google.com',
      finishedLink: '<a href="http://google.com">Google</a>',
    }
  },
  methods: {
    sayHello() {
      this.msg = 'Hello!';
      return this.msg;
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
