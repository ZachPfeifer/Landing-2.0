<template>
  <div class="Bio">
    <!-- About section -->
    <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="about">
      <h4>
        <b class="scrible-text">About Me</b>
      </h4>
      <hr />
      <img
        class="w3-image w3-padding-32"
        src="../assets/Bio-Pic.jpg"
        alt="Pretty Boiii"
        width="300"
        height="325"
      />
      <div class="w3-content w3-justify" style="max-width:600px">
        <h4 class="scrible-text">Zachary Pfeifer</h4>
        <p>
          Hello my name is Zachary Pfeifer and I am an aspiring Software Developer. I have been interested in coding and
          technology since Highschool where I got my first taste of HTML/Css. From there I dipped my towes into technical
          support for computers which lead me to want to further my knowledge in coding. Now I am a grauduate from Boise
          Codeworks. At Codeworks I aquired knowledge on how to build full-stack app and the work that goes into
          maintaining them. As of the moment I am looking to break into the Software Developement Industry.
        </p>
        <p font-weight-bold>Mail: mr.zman1@yahoo.com</p>
        <p font-weight-bold>Telephone: (503) 689-2022</p>
        <hr class="w3-opacity" />
        <h4 class="w3-padding-16">Technical Skills</h4>
        <p class="w3-wide">HTML/CSS</p>
        <div class="w3-white">
          <div
            class="w3-container w3-padding-small w3-center w3-grey"
            style="width:70%"
          >Very Comfortable</div>
        </div>
        <p class="w3-wide">JavaScript</p>
        <div class="w3-white">
          <div class="w3-container w3-padding-small w3-center w3-grey" style="width:50%">Comfortable</div>
        </div>
        <p class="w3-wide">C#</p>
        <div class="w3-white">
          <div class="w3-container w3-padding-small w3-center w3-grey" style="width:50%">Comfortable</div>
        </div>
        <a href="../assests/ZacharyPfeiferSD-Resume.pdf" download>
          <button class="w3-button w3-light-grey w3-padding-large w3-margin-top w3-margin-bottom">
            Download
            Resume
          </button>
        </a>
      </div>
      <Icons />
    </div>
  </div>
</template>


<script>
import Icons from "../components/Icons.vue";
export default {
  name: "Bio",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { Icons }
};
</script>


<style scoped>
img {
  border-radius: 50%;
}
</style>