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
      <button class="attack" @click="hit()" :disabled="end"> attack </button>
      <button class="defense" @click="defense()" :disabled="end"> Defense </button>
      <button class="heal" @click="heal()" :disabled="end"> Heal </button>
      <button class="run" @click="run()" :disabled="end"> Run Forest </button>
    </div>

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

  export default {
    name: 'home',
    components: {
      HealthBar,
    },

    data () {
      return {
        health: 100,
        enemyHealth: 100,
        end: false,
      }
    },

    methods: {
      hit() {
        let damage = Math.floor(Math.random() * 10)+1;
        this.enemyHealth = this.enemyHealth - damage;
        this.enemyStruggle(damage);
      },
      heal() {
        let cure = Math.floor(Math.random() * 10)+1;
        this.health = this.health + cure;
        if(this.health > 100) { this.health = 100; }
        this.enemyStruggle(0);
      },
      defense() {
        this.enemyStruggle(0).then((act) => {
          if(act.rand == 1 && act.action !== 0) {
            this.health = (this.health + act.action)-1;
          }
        })
      },
      run() {
        this.health = 100;
        this.enemyHealth = 100;
      },
      enemyStruggle(myDamage) {
        return new Promise((resolve, reject) => {

          let rand = Math.floor(Math.random() * 3)+1;
          let action = Math.floor(Math.random() * 10)+1;

          switch (rand) {
            case 1:
            this.health = this.health - action;
            break;
            case 2:
            this.enemyHealth = this.enemyHealth + action;
            if(this.enemyHealth > 100) { this.enemyHealth = 100; }
            break;
            case 3:
            if(myDamage !== 0) {
              this.enemyHealth = (this.enemyHealth + myDamage)-1;
            }
          }

          let enemyAction = {rand: rand, action: action };
          resolve(enemyAction);
        });
      },
      playAgain() {
        this.health = 100;
        this.enemyHealth = 100;
        this.end = false;
      }
    },
    watch: {
      health: function (){ if(this.health <= 0) { this.end = true } },
      enemyHealth: function() { if(this.enemyHealth <= 0) { this.end = true } },
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

.result h1 { font-size: 46px; }
.win { color: #1c50a5; }
.lose { color: #DC602E; }

.attack { background-color: #05A8AA; }
.defense { background-color: #B8D5B8; }
.heal { background-color: #D7B49E; }
.run { background-color: #DC602E; }
.play { background-color: #DC602E; }

</style>
