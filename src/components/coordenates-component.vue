<template>
  <div id="coordenates">

    <p v-on:mousemove="updateCoordenates($event)">Coordenates: {{ x }} / {{ y }}</p>

  </div>
</template>

<script>
export default {
  name: "coordenates-component",
  data () {
    x: 0,
    y: 0,
  },
  methods: {
    updateCoordenates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
