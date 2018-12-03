<template>
  <div id='hello-world'>
    {{swapiPeople}}
    <!-- <div v-for="target in targets"> -->
    <h1>Hello my name is {{target.name}}</h1>
    <img :src="target.img">
    <p :class="{low: checkLow()}">Health: {{target.health}}</p>
    <p v-if="target.health == 0">He's Sleeping</p>
    <button @click='attack(1)'>SLAP</button>
    <button @click='attack(5)'>Punch</button>
    <button @click='attack(10)'>Kick</button>
    <!-- </div> -->
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {

      }
    },
    computed: {
      target() {
        return this.$store.state.targets[0]
      },
      swapiPeople() {
        return this.$store.state.swapiPeople
      }
    },
    methods: {
      attack(val) {
        //dispatch invokes an action by its string name
        this.$store.dispatch('attack', val)
      },
      checkLow() {
        return this.target.health < 51
      }
    }
  }
</script>


<style scoped>
  img {
    height: 200px
  }

  .low {
    color: orange
  }

  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>