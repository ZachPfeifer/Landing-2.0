<template>
  <div class="Home container-fluid">
    <h1 class="text-center">Current Work:</h1>
    <Projects class="d-flex justify-content-between scrible-text scrible-text text-center" />
    <hr />
    <h1 class="text-center">Bio:</h1>
    <Bio />
    <hr />
    <h1 class="text-center">Icons:</h1>
    <Icons />
    <hr />
    <h1 class="text-center">Contact:</h1>
    <Contact />
  </div>
</template>


<script>
import Projects from "../components/Projects.vue";
import Bio from "../components/Bio.vue";
import Icons from "../components/Icons.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { Projects, Bio, Icons, Contact }
};
</script>


<style>
</style>