<template>
  <div class="MenuCard">
    <div class="container mt-3">
      <article class="card">
        <a href="#" class="card__link">
          <!-- Icon -->
          <div class="card__icon">
            <svg viewBox="0 0 1129 994">
              <g fill="none" fill-rule="nonzero" stroke="#999" stroke-width="41">
                <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
              </g>
            </svg>
          </div>

          <!-- Media -->
          <div class="card__media">
            <svg viewBox="0 0 1129 994">
              <g fill="none" fill-rule="nonzero" stroke="#F5F5F5" stroke-width="41">
                <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
              </g>
            </svg>
          </div>

          <!-- Header -->
          <div class="card__header">
            <h3 class="card__header-title">Zachary Pfeifer</h3>
            <p class="card__header-meta">
              <a
                href="javascript:void(0)"
                onclick="w3_close()"
                class="w3-bar-item w3-button w3-padding w3-hide-large"
              >CLOSE</a>
              <a href="#" onclick="w3_close()" class="w3-bar-item w3-button">PROJECTS</a>
              <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">ABOUT ME</a>
              <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
            </p>
            <div class="card__header-icon">
              <svg viewBox="0 0 28 25">
                <path
                  fill="#fff"
                  d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                />
              </svg>
            </div>
          </div>
        </a>
        <marquee scrollamount="10" direction="right" behavior="scroll">
          <img
            class="d-flex justify-content-center"
            src="../assets/giphy(1).gif"
            alt="SKAT BOII"
            height="80"
            width="80"
          />
        </marquee>
      </article>
    </div>
    <!-- Top menu on small screens -->
    <header class="w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16">
      <span class="w3-left w3-padding">Zachary Pfeifer</span>
      <a href="javascript:void(0)" class="w3-right w3-button w3-white" onclick="w3_open()">☰</a>
    </header>

    <!-- Overlay effect when opening sidebar on small screens -->
    <div
      class="w3-overlay w3-hide-large w3-animate-opacity"
      onclick="w3_close()"
      style="cursor:pointer"
      title="close side menu"
      id="myOverlay"
    ></div>

    <!-- !PAGE CONTENT! -->
    <div class="w3-main" style="margin-left:300px">
      <!-- Push down content on small screens -->
      <div class="w3-hide-large" style="margin-top:83px"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MenuCard",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
*,
:before,
:after {
  box-sizing: border-box;
}

html {
  background-color: #222;
  color: white;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0) translateY(50%);
  }
  90% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  position: relative;
  width: 20em;
  background-color: #292929;
  transition: all 0.3s ease-in-out;
}
.card:hover {
  box-shadow: 0 10px 20px 10px rgba(black, 0.2);
}

.card__link {
  display: block;
  padding: 1em;
  text-decoration: none;
}

.card__icon {
  position: absolute;
  width: 4em;
  height: 4em;
  transition: all 0.3s ease-in-out;
}
.card:hover {
  opacity: 0;
  transform: scale(0);
}

.card__media {
  padding: 2em 0;
}
svg path {
  opacity: 0;
  transition: all 0.3s ease-in-out;
  transform-origin: center center;
}

.card:hover svg path {
  animation: fadeInScale 0.3s ease-in-out forwards;
}

.card:hover svg path:nth-child(2) {
  animation-delay: 0.1s;
}

.card:hover svg path:nth-child(3) {
  animation-delay: 0.2s;
}
.card__header {
  position: relative;
}

.card__header-title {
  margin: 0 0 0.25em;
  color: white;
}

.card__header-meta {
  margin: 0;
  color: #999;
}

.card__header-icon {
  opacity: 0;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -1em;
  transform: translateX(-20%);
  width: 2em;
  height: 2em;
  transition: all 0.3s ease-in-out;
}
.card:hover {
  opacity: 1;
  transform: translateX(0);
}
</style>