<template>
  <router-view/>
</template>

<style>
:root{
  --bg: #161616;
  --bg-alt: #222222;
  --fg-alt: #da3434;
  --fg: #ffffff;
  --ml-bg: #7e438a;
}

/*Html Styling*/
html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 1em;
}

::-webkit-scrollbar-track {
  background: rgb(216, 25, 226) ;
  margin-block: 0.5em;
  border-radius: 100vw;
}

::-webkit-scrollbar-thumb {
  background: hsl(100, 50, 190);
  border: .25em solid rgb(17, 36, 119);
  border-radius: 100vw;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(120, 50, 190) ;
}


#app {
  font-family: monospace; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  background: var(--bg);
  color: var(--fg);
  overflow-x: hidden;
  background-image: url('/img/clancyy.jpg'); 
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-size: 100% 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 600px) {
  body{
    background-size: auto 100%;
  }
}

</style>
