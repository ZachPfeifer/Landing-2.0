<template>
  <div id="app container-fluid op">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <!-- <router-view /> -->

    <!-- Sidebar/menu -->
    <!-- <div class>
      <nav
        class="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center bg-nav"
        style="z-index:3;width:300px;font-weight:bold"
        id="mySidebar"
      >
        <br />
        <h3 class="w3-padding-64 w3-center">
          <b>
            Zachary
            <br />Pfeifer
          </b>
        </h3>
        <a
          href="javascript:void(0)"
          onclick="w3_close()"
          class="w3-bar-item w3-button w3-padding w3-hide-large"
        >CLOSE</a>
        <a href="#" onclick="w3_close()" class="w3-bar-item w3-button">PROJECTS</a>
        <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">ABOUT ME</a>
        <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
    </nav>-->

    <!-- Top menu on small screens -->
    <!-- <header class="w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16">
        <span class="w3-left w3-padding">Zachary Pfeifer</span>
        <a href="javascript:void(0)" class="w3-right w3-button w3-white" onclick="w3_open()">☰</a>
    </header>-->

    <!-- Overlay effect when opening sidebar on small screens -->
    <!-- <div
        class="w3-overlay w3-hide-large w3-animate-opacity"
        onclick="w3_close()"
        style="cursor:pointer"
        title="close side menu"
        id="myOverlay"
    ></div>-->

    <!-- !PAGE CONTENT! -->
    <!-- <div class="w3-main" style="margin-left:300px"> -->
    <!-- Push down content on small screens -->
    <!-- <div class="w3-hide-large" style="margin-top:83px"></div> -->

    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link>| -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <nav
      class="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center ml-4"
      style="z-index:3;width:300px;font-weight:bold"
      id="mySidebar"
    >
      <MenuCard class="op" />
    </nav>
    <router-view class="op container" />
    <!-- //FIXME padding???S -->
  </div>
</template>

<script>
import MenuCard from "./components/MenuCard.vue";
export default {
  components: { MenuCard }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.op {
  background-color: rgba(255, 254, 254, 0.644);
}

/* NEW CARD TRIAL */
</style>