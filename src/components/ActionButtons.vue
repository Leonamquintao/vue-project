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

  data (){
    return {

    }
  },
  methods: {

    emitHealth(hp) { this.$emit('health', hp) },
    emitEnemyHeath(ehp) { this.$emit('enemyHealth', ehp) },

    hit() {
      let damage = Math.floor(Math.random() * 9)+1;
      this.emitHealth(this.enemyHealth - damage);

      this.enemyStruggle(damage);
    },

    heal() {
      let cure = Math.floor(Math.random() * 10)+1;
      this.emitHealth(this.health + cure);
      if(this.health > 100) { this.emitHealth(100); }
      this.enemyStruggle(0);
    },
    defense() {
      this.enemyStruggle(0).then((act) => {
        if(act.rand == 1 && act.action !== 0) {
          this.emitHealth((this.health + act.action)-1);
        }
      })
    },
    run() {
      this.emitHealth(100);
      this.emitEnemyHeath(100);
    },
    enemyStruggle(myDamage) {
      return new Promise((resolve, reject) => {

        let rand = Math.floor(Math.random() * 3)+1;
        let action = Math.floor(Math.random() * 10)+1;

        switch (rand) {
          case 1:
            this.emitHealth(this.health - action);
          break;
          case 2:
            this.emitEnemyHeath(this.enemyHealth + action);
          if(this.enemyHealth > 100) { this.emitEnemyHeath(100); }
          break;
          case 3:
            if(myDamage !== 0) {
              this.emitEnemyHeath((this.enemyHealth + myDamage)-1);
            }
          break;
        }

        let enemyAction = {rand: rand, action: action };
        resolve(enemyAction);
      });
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
