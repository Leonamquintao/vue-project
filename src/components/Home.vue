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

    <template v-if="!end">
      <action-buttons
        :health="health" :enemyHealth="enemyHealth"
        @health="emitHealth" @enemyHealth="emitEnemyHeath">
      </action-buttons>
    </template>

    <div class="result">
      <h1 class="win" v-if="enemyHealth <= 0">you win</h1>
      <h1 class="lose" v-if="health <= 0">you lose</h1>
    </div>

    <div class="action-buttons">
      <button class="play" @click="playAgain()" v-if="end">Play Again</button>
    </div>

  </div>
</template>

<script>

  import HealthBar from './HealthBar';
  import ActionButtons from './ActionButtons';

  export default {
    name: 'home',
    components: {
      HealthBar,
      ActionButtons,
    },

    data () {
      return {
        health: 100,
        enemyHealth: 100,
        end: false,
        turns: []
      }
    },

    methods: {
      playAgain() {
        this.health = 100;
        this.enemyHealth = 100;
        this.end = false;
      },

      emitHealth(hp) {
        this.health = hp;
      },

      emitEnemyHeath(ehp) {
        this.enemyHealth = ehp;
      },

      emitTurnsEvent(trn) {
        this.turns = trn
      },

    },
    watch: {
      health: function() {
        if(this.health <= 0) {
          this.health = 0;
          this.end = true;
        }
      },
      enemyHealth: function() {
        if(this.enemyHealth <= 0) {
          this.enemyHealth = 0;
          this.end = true;
        }
      },
    }

  }

</script>

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

  .action-buttons button {
    width: 150px;
    height: 40px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
  }

  .result h1 { font-size: 46px; }
  .win { color: #1c50a5; }
  .lose { color: #DC602E; }

  .play { background-color: #DC602E; }

</style>
