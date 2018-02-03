<template>
  <div class="home">

    <div class="health-box">

      <div class="avatar">
        <img src="../assets/ryu311_151.gif">
      </div>

      <div >
        <health-bar :health="health"></health-bar>
        <health-bar :health="enemyHealth"></health-bar>
      </div>

      <div class="avatar">
        <img src="../assets/sagat384_178.gif">
      </div>

    </div>

    <div class="action-buttons">
      <button class="attack" @click="hit()"> attack </button>
      <button class="defense"> Defense </button>
      <button class="heal" @click="heal()"> Heal </button>
      <button class="run"> Run Forest </button>
    </div>

  </div>
</template>

<script>

  import HealthBar from './HealthBar';

  export default {
    name: 'home',
    components: {
      HealthBar,
    },

    data () {
      return {
        health: 100,
        enemyHealth: 100,
      }
    },

    methods: {
      hit() {
        this.enemyHealth = this.enemyHealth-10;
      },
      heal() {
        if(this.health < 100) {
          this.health = this.health+10
        } else {
          alert('energy full!!');
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin: auto;
  padding: 10px;
  width: 800px;
  height: 800px;
}

.health-box {
  width: 800px;
  display: flex;
}

.health-box > div {
  flex: 1;
}

.avatar img{
  width: 120%;
  height: auto;
}

.action-buttons {
  background-color: #fff;
  padding: 8px;
}

.action-buttons button {
  width: 150px;
  height: 40px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
}

.attack { background-color: #05A8AA; }
.defense { background-color: #B8D5B8; }
.heal { background-color: #D7B49E; }
.run { background-color: #DC602E; }

</style>
