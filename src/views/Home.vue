<template>
  <div class="Home container-fluid mx-auto">
    <h1 class="text-center">Current Work:</h1>
    <Projects class="d-flex justify-content-between scrible-text scrible-text text-center" />
    <hr />
    <Bio />
    <hr />

    <Contact />
    <Footer />
  </div>
</template>


<script>
import Projects from "../components/Projects.vue";
import Bio from "../components/Bio.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { Projects, Bio, Contact, Footer }
};
</script>


<style>
</style>