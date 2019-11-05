<template>
  <div class="Projects">
    <div class="w3-row">
      <hr />
      <div class="w3-third">
        <div class="col-3">
          <!--NOTE: Second Prototype Card-->

          <div class="flip-card m-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../assets/Highlands-Thumbnail.png"
                  alt="Highland-Authority"
                  style="width:300px;height:300px;"
                />
                <h1 class="centered">Highland Authority</h1>
              </div>
              <div class="flip-card-back font-size">
                <p>Vue.js / Node.js (MVC Pattern)</p>
                <p>
                  Highland Authority is a stat tracker website for Athletes that participate in Highland Games Events.
                  On
                  this site you can view all paricpants scores and contact info. This website also support the Judges
                  for
                  the games. Judges can add Athletes stats live while game is being played. Judges can also create Games
                  for Athletes to compete in.
                </p>
                <dl>
                  Athlete Login:
                  <dt>Email: test@judge.com</dt>
                  <dt>Password: password123</dt>Judge Login:
                  <dt>Email: test@judge.com</dt>
                  <dt>Password: password123</dt>
                </dl>
                <p class="card-text">
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://github.com/TimDohmen/HighlandAuthority';"
                  >GitHub</button>
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://highland-games.herokuapp.com/?#/login';"
                  >Website</button>
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card m-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../assets/InspireThumbnail.png"
                  alt="Inspire"
                  style="width:300px;height:300px;"
                />
                <h1 class="centered">Inspire</h1>
              </div>
              <div class="flip-card-back">
                <hr />
                <p>JavaScript / Node.js (MVC Pattern)</p>
                <p>
                  Inspire is an App ment to be used as a home page for your browser that allows you to see a random
                  image
                  as a background with the time being displayed as well as your local weather. Inside the Inpire page
                  you
                  can also make a To Do list for tasks yopu have to do for the day.
                </p>
                <p class="card-text">
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://github.com/ZachPfeifer/Inspire';"
                  >GitHub</button>
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://zachpfeifer.github.io/Inspire/';"
                  >Website</button>
                </p>
                <hr />
              </div>
            </div>
          </div>
          <div class="flip-card m-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../assets/SlapGame-Thumbnail.png"
                  alt="Boss Fight"
                  style="width:300px;height:300px;"
                />
                <h1 class="centered">Boss Fight</h1>
              </div>
              <div class="flip-card-back">
                <hr />
                <p>HTML / JavaScript</p>
                <p>
                  Boss Fight is a basic browser game where you must use items or actions to kill the boss. You have 3
                  different characters that can do actions to reduce the Bosses health.
                </p>
                <hr />
                <p class="card-text">
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://github.com/ZachPfeifer/Boss-Fight';"
                  >GitHub</button>
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://zachpfeifer.github.io/Boss-Fight/';"
                  >Website</button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!--END PROTOTYPE TWO-->
      </div>
      <div class="w3-third">
        <div class="col-3">
          <!--NOTE: Second Prototype Card COL-2-->
          <div class="flip-card m-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://fsmedia.imgix.net/1a/10/39/26/8d55/4bcf/8271/e328cc14610f/total-rickall-buffyjpg.jpeg?rect=0%2C0%2C1188%2C595&auto=format%2Ccompress&dpr=2&w=650"
                  alt="Total-Rick'All"
                  style="width:300px;height:300px;"
                />
                <h1 class="centered">Total Rick'All</h1>
              </div>
              <div class="flip-card-back">
                <hr />
                <p>C# (MVC Pattern)</p>
                <p>
                  A C# Console App inspired by the Console Adventure game Zork. In this game you move room to room to
                  find parsites to kill before you can win the game.
                </p>
                <hr />
                <p class="card-text">
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://github.com/ZachPfeifer/Console-Adventure';"
                  >GitHub</button>
                  <!-- <button type="button" class="btn btn-dark"
                  onclick="window.location.href = 'https://highland-games.herokuapp.com/?#/login';">Website</button>-->
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card m-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../assets/Kanban-Thumbnail.png"
                  alt="Inspire"
                  style="width:300px;height:300px;"
                />
                <h1 class="centered">Kanban Board</h1>
              </div>
              <div class="flip-card-back">
                <hr />
                <p>Vue.js / Node.js (MVC Pattern)</p>
                <p>
                  Kanban Board is a website inspired by trello boards. In this app you are able to make an account then
                  create boards that can have tasks and comments appended to them.
                </p>
                <hr />
                <p class="card-text">
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://github.com/ZacharyTyler/Kanban';"
                  >GitHub</button>
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://zachkanban.herokuapp.com/#/login';"
                  >Website</button>
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card m-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape.jpg"
                  alt="RunesKeep"
                  style="width:300px;height:300px;"
                />
                <h1 class="centered">RunesKeeps</h1>
              </div>
              <div class="flip-card-back">
                <hr />
                <p>Vue.js / DotNet</p>
                <p>
                  RunesKeep is a app that allows you to make an account login and add items to your bank. This app uses a
                  Dotnet backend and pull from a Runescape API to generate items
                </p>
                <hr />
                <p class="card-text">
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://github.com/ZachPfeifer/Keepr';"
                  >GitHub</button>
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://www.stickpng.com/assets/thumbs/58889546bc2fc2ef3a1860b8.png';"
                  >Website</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- third COL -->
      <div class="w3-third">
        <div class="col-3">
          <!--NOTE: Second Prototype Card COL-2-->
          <div class="flip-card m-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://www.stickpng.com/assets/thumbs/58889546bc2fc2ef3a1860b8.png"
                  alt="Total-Rick'All"
                  style="width:300px;height:300px;"
                />
                <h1 class="centered">Coming Soon</h1>
              </div>
              <div class="flip-card-back">
                <hr />
                <p>UNKOWN</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic praesentium necessitatibus eos ut. Quaerat, quasi praesentium iure veniam dicta vero debitis facilis, cupiditate ut reprehenderit ipsam libero! Voluptas, est.</p>
                <hr />
                <p class="card-text">
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://github.com/ZachPfeifer/Console-Adventure';"
                  >GitHub</button>
                  <!-- <button type="button" class="btn btn-dark"
                  onclick="window.location.href = 'https://highland-games.herokuapp.com/?#/login';">Website</button>-->
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card m-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://www.stickpng.com/assets/thumbs/58889546bc2fc2ef3a1860b8.png"
                  alt="Inspire"
                  style="width:300px;height:300px;"
                />
                <h1 class="centered">Coming Soon</h1>
              </div>
              <div class="flip-card-back">
                <hr />
                <p>UNKOWN</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate delectus accusantium quas nisi architecto, enim, quasi veritatis quia a aliquam optio atque incidunt. Suscipit, harum. Voluptas, odio. Quasi, sequi voluptatum?</p>
                <hr />
                <p class="card-text">
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://github.com/ZacharyTyler/Kanban';"
                  >GitHub</button>
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://zachkanban.herokuapp.com/#/login';"
                  >Website</button>
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card m-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://www.stickpng.com/assets/thumbs/58889546bc2fc2ef3a1860b8.png"
                  alt="RunesKeep"
                  style="width:300px;height:300px;"
                />
                <h1 class="centered">Coming Soon</h1>
              </div>
              <div class="flip-card-back">
                <hr />
                <p>UNKOWN</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eum quis nihil corrupti quod accusamus rerum fuga ratione tempore sapiente enim esse error, voluptates ipsam iusto reiciendis animi necessitatibus libero.</p>
                <hr />
                <p class="card-text">
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://github.com/ZachPfeifer/Keepr';"
                  >GitHub</button>
                  <button
                    type="button"
                    class="btn btn-dark"
                    onclick="window.location.href = 'https://www.stickpng.com/assets/thumbs/58889546bc2fc2ef3a1860b8.png';"
                  >Website</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pagination -->
      <div class="w3-center w3-padding-32">
        <div class="w3-bar">
          <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
          <a href="#" class="w3-bar-item w3-black w3-button">1</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
          <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Projects",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font: bold;
  color: crimson;
  text-shadow: 4px 3px 0px black, 9px 8px 0px rgba(0, 0, 0, 0.15);

  display: inline-block;
  width: 80%;
  border: 1px solid #000;
  background-color: rgba(255, 255, 255, 0.212);
}
</style>