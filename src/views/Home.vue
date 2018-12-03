<template>
  <div class="home">
    <Hello />
    <Hello />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Hello from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {
      Hello
    }
  }
</script>