<template>
  <div class="health-bar">

    <div class="health"
    :style="{ width: health + '%' }"
    :class="{ healthy: !danger, danger: danger }">
      <p> {{ health }} %</p>
    </div>

  </div>
</template>

<script>

export default {
  name: "health-bar",
  props: {
    health: Number,
    required: true,
    default: 100
  },
  data() {
    return{
      danger: false,
    }
  },
  watch: {
    health: function() {
      if(this.health < 50) {
        this.danger = true
      } else {
        this.danger = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.health-bar {
  background-color: #c1c4c9;
  border-radius: 4px;
}

.health {
  width: 300px;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 8px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
}

.healthy { background-color: #05A8AA; }
.danger { background-color: #DC602E; }

.health p {
  color: #fff;
  font-weight: bold;
  text-align: center;
}

</style>
