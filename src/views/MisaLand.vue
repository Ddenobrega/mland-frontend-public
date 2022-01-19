<template>
  <div>
    <Header />
    <div id="body" class="row">
    <br><br>
    <div class="col">
    <!--Paragraph 1-->
    <div id="para1">
    <h2>Welcummm to the 
        <br>Official Misaland Community 
        <br>Website where we make things
        <br>easier and simpler for you
    </h2>
    </div>

    <br>
    <!-- Paragraph 2 -->
    <h2 id="para2">Vibe with the Community in <br>
    Our Official Discord Server
    </h2>
<br>
    <!--Discord Widget -->
      <iframe
        src="https://discord.com/widget?id=910015309824524288&theme=dark" 
        allowtransparency="true" frameborder="0" 
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
      </iframe>
    </div>
    <!-- Third Paragraph -->
      <div class="col right-container">
          <h2  id="para3">
          Creating an Active and Welcoming 
          <br>Community for everyone to 
          <br>share their interests<br>
      </h2>

      <!-- Misaland button link on the onclick event -->
        <button class="discordlink btn" 
        onclick="window.location.href = 'https://discord.gg/nSCjAfZFJ9';">
        Join Server
    </button> 

    <div>
      <img src="/img/radio.gif" style="position: absolute; width: 300px; height:auto; top: 250mm; left: 29mm;">
    </div>

      <!-- Play Audio In Background -->
      <audio autoplay id="player" src="/audio/podcast.mp3"></audio>
      <div class="mediactr"> 
        <button onclick="document.getElementById('player').play()">Play</button> 
        <button onclick="document.getElementById('player').pause()">Pause</button> 
        <button onclick="document.getElementById('player').volume -= 0.1">Vol -</button> 
        <button onclick="document.getElementById('player').volume += 0.1">Vol +</button> 
      </div>

      <!-- Fun frontpage polls -->
      <div class="poll-view">
        <div class="poll-view__title" style="text-shadow: black 0px 0px 10px;">
          <h2>What is your preferred Linux Distro?"</h2>
        </div>
        <div class="poll-view__inner">
          <div class="poll-view__help">
            <span>Choose as many answers:</span>
          </div>
          <div class="poll-view__votes">
            <div class="answer">
              <label class="checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
                Ubuntu
              </label>
            </div>
            <div class="answer">
              <label class="checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
                Debian
              </label>
            </div>
            <div class="answer">
              <label class="checkbox">   
                <input type="checkbox">
                <span class="checkmark"></span>
                  Arch 
              </label>
            </div>
            <div class="answer">
              <label class="checkbox"> 
                <input type="checkbox">
                <span class="checkmark"></span>
                  Gentoo 
              </label>
            </div>
            <div class="answer">
              <label class="checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
                  OpenSUSE
              </label>
            </div>
            <div class="answer">
              <label class="checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
                Manjaro
              </label>
            </div>
          </div>
          <div class="poll-view__submit">
            <button>Vote</button>
          </div>
        </div>
        <!---->
      </div>
      <!---->

      <!--Meta viewport to scale resolution to any device-->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      </div>
      </div>
    <Footer/>
  </div>
</template>

<!--Javascripting-->
<script>
/*Header and footer*/
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
/*Audio and volume level*/
var gfg = document.getElementById("myaudio");
//exports
export default {
  name: 'MisaLand',
  components: {
    Header,
    Footer
  },
  mounted(){
    //Set Title
    document.title = "MisaLand | Home"
  },
  methods:{
    // Volume handler
    volume(v){
      alert(gfg.volume);
      var volume
      if(v == 1){
        volume = gfg.volume = 0.2;
      }
      else if(v == 2){
        volume = gfg.volume = 1.0;
      }
      else{
        volume = null;
      }
      return volume
    },
    changeState(){
      this.question = "Hello"
    }
  },
  data(){
    return{
      question: ""
    }
  },
}
/*Pink cursor*/
document.getElementsByTagName("body")[0].style.cursor = "url('/img/aero-bright-neon-pink-normal.cur'), auto";
</script>

<!--CSS styling and templating-->
<style scoped>
/*Main body style*/
#body{
  margin-top: 20px;
  font-family: 'Patrick Hand', cursive;
}
/*First Paragraph*/
#para1 {
    text-shadow: 1px 2px 4px black;
    color: white;
    text-align: left;
    padding-left: 30mm;
}
/*Second Paragraph Line*/
#para2 {
    text-shadow: 1px 2px 4px black;
    color: white;
    text-align: left;
    padding-left: 30mm;
}
/*Discord Webhook*/
iframe {
    width: 380px;
    height: 400px;
    border: none;
    padding-left: 30mm;
}
/*3rd paragraph line*/
#para3 {
    color: white;
    text-shadow: black 0px 0px 10px;
    text-align: left;
    padding-left: 5mm;
    position: relative;
    top: 520px;
}
/*Discord Button link*/
.discordlink {
    background-color: var(--bg);
    border: 2px solid purple;
    color: var(--ml-bg);
    padding: 5px 10px;
    text-align: center;
    display: inline-block;
    font-size: 20px;
    margin: 10px 30px;
    cursor: pointer;
    position: relative;
    top: 515px;
    opacity: 0.9;
}
/*Discord Button link hover*/
.discordlink:hover {
  color: white;
  opacity: 0.75;
}
/*Styling Buttons*/
.mediactr {
  position: absolute;
  bottom: 1px;
  right: 10mm;
}
/*Audio tuning*/
.aud {
  position:relative;
  width:800px;
  margin:auto; 
  position:relative;
  top: 3px;
  left: 50px;
}
/*Poll Styling*/
.poll-view {
  max-width: 500px;
  background-color: purple;
  position: relative;
  opacity: 0.7;
  padding: 30px;
  right: 1mm;
  top: 570px;
  border: 2px solid black;
  outline-style: solid;
  outline-color:black;
}
</style>