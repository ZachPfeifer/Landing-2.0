<template>
  <div class="Footer">
    <footer class="w3-container w3-padding-32 w3-grey">
      <div class="w3-row-padding">
        <div class="w3-third">
          <h3>
            <i class="fas fa-user-ninja fa-2x" style=" width:50px"></i> INFO
          </h3>
          <hr />
          <p class="font-italic info-padding">
            I am a relatively new Software Developer and I'm always looking for new
            ways of doing
            thing. I love
            learning new things so always feel free to send me messages by using my Contact Me area.
          </p>
          <hr />
        </div>

        <div class="w3-third">
          <h3>
            <i class="fas fa-users fa-2x w3-margin-right" style="width:50px"></i> Other Media Sites
          </h3>
          <hr />
          <ul class="w3-ul">
            <li class="w3-padding-16 w3-hover-black">
              <a class="social-link" href="https://www.facebook.com/zach.pfeifer.10">
                <i class="fab fa-facebook fa-lg"></i>

                <span class="w3-large">FaceBook</span>
                <br />
                <span>
                  <p class="font-italic">Where faces go</p>
                </span>
              </a>
            </li>
            <li class="w3-padding-16 w3-hover-black">
              <a class="social-link" href="https://github.com/ZachPfeifer">
                <i class="fab fa-github fa-lg"></i>
                <span class="w3-large">GitHub</span>
                <br />
                <span>
                  <p class="font-italic">Code Hub</p>
                </span>
              </a>
            </li>
            <li class="w3-padding-16 w3-hover-black">
              <a class="social-link" href="https://www.linkedin.com/in/zachary-pfeifer-7227b3192/">
                <i class="fab fa-linkedin fa-lg"></i>
                <span class="w3-large">Linked-In</span>
                <br />
                <span>
                  <p class="font-italic">Professional Profile</p>
                </span>
              </a>
              <hr />
            </li>
          </ul>
        </div>

        <div class="w3-third">
          <h3>
            <i class="fas fa-toolbox fa-2x w3-margin-right"></i>Helpful Links:
          </h3>
          <hr />
          <p>
            <span class="w3-tag w3-dark-grey w3-margin-bottom text-white">
              <a class="social-link" href="https://www.w3schools.com">
                W3
                Schools
              </a>
            </span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              <a
                class="social-link"
                href="https://getbootstrap.com/docs/4.2/getting-started/introduction/"
              >Bootstrap</a>
            </span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              <a class="social-link" href="https://fontawesome.com/">Awesome Fonts</a>
            </span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              <a class="social-link" href="https://www.quackit.com/html/codes/">Quackit</a>
            </span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              <a class="social-link" href="https://fonts.google.com/">Google Fonts</a>
            </span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              <a class="social-link" href="https://stackoverflow.com">Stack Overflow</a>
            </span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              <a class="social-link" href="https://edabit.com/challenges">WhiteBoard Challenges</a>
            </span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              <a class="social-link" href="https://www.freecodecamp.org/">Free Codecamp</a>
            </span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              <a class="social-link" href="https://htmlcheatsheet.com/js/">Coding Cheat Sheet</a>
            </span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              <a class="social-link" href="https://vuejs.org/v2/guide/">Vue.js Docs</a>
            </span>
          </p>
          <hr />
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.text-white {
  color: aliceblue;
}
</style>