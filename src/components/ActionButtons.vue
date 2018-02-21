<template>
  <div class="action-buttons">
    <button class="attack" @click="hit()"> attack </button>
    <button class="defense" @click="defense()"> Defense </button>
    <button class="heal" @click="heal()"> Heal </button>
    <button class="run" @click="run()"> Run Forest </button>
  </div>
</template>

<script>
export default {

  name: "action-buttonsr",
  props: ['health', 'enemyHealth'],

  data() {
    return {

    }
  },
  methods: {

    emitHealth(hp) { this.$emit('health', hp) },
    emitEnemyHeath(ehp) { this.$emit('enemyHealth', ehp) },

    hit() {
      let damage = Math.floor(Math.random() * 10)+1;
      this.emitEnemyHeath(this.enemyHealth - damage);
      this.enemyStruggle(damage);
    },

    heal() {
      let cure = Math.floor(Math.random() * 10)+1;
      this.emitHealth(this.health + cure);
      this.healEvent(this.health, 1, cure);
      this.enemyStruggle(0);
    },

    defense() {
      this.enemyStruggle(0).then((act) => {
        if(act.rand == 1 && act.action !== 0) {
          this.emitHealth(this.health-1);
        }
      })
    },

    run() {
      this.emitHealth(100);
      this.emitEnemyHeath(100);
    },

    enemyStruggle(myDamage) {
      return new Promise((resolve, reject) => {

        let rand = Math.floor(Math.random() * 5)+1;
        let action = Math.floor(Math.random() * 9)+1;

        switch (rand) {
          case 1: //attack
          case 2: //attack
            this.emitHealth(this.health - action);
          break;
          case 3: //heal
            this.healEvent(this.enemyHealth, 2, action);
          break;
          case 4: //defense
          case 5: //defense
            if(myDamage !== 0) {
              this.emitEnemyHeath(this.enemyHealth-1);
            }
          break;
        }

        let enemyAction = { rand: rand, action: action };
        resolve(enemyAction);
      });
    },

    //type 1 = ryu | 2 = sagat
    healEvent(hp, type, val) {
      if(type == 2) {
        if(hp > 99) {
          this.emitEnemyHeath(100);
        } else {
          this.emitEnemyHeath(this.enemyHealth + val);
        }
      } else if(type == 1) {
        if(hp > 99) {
          this.emitHealth(100);
        } else {
          this.emitHealth(this.health + val);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

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
