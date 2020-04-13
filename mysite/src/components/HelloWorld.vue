<template>
  <b-container fluid class="name" id="helloWorldComponent">
      <h1 id="hello"></h1>
      <h2 id ="titles"></h2>
  </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
      
  },
  mounted: async function() {
      let nav = document.getElementById("navComponent");
      let welcome = document.getElementById("welcomeComponent");
      let aboutMe = document.getElementById("aboutMeComponent");
      let experience = document.getElementById("experienceComponent");
      let skills = document.getElementById("skillsComponent");
      let projects = document.getElementById("projectsComponent");
      let footer = document.getElementById("footerComponent");
      nav.setAttribute('style','display:none')
      var i = 0;
      var name = "Hi, I'm Michael D'Silva.";
      var speed1 = 80;
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      async function typeMyName() {
        if (i < name.length) {
          document.getElementById("hello").innerHTML += name.charAt(i);
          await sleep(10);
          i++;
          
          setTimeout(typeMyName, speed1);          
        }
        return new Promise;
      }

      async function loadName() {
        typeMyName();
        await sleep(2165)
        await sleep(500)
        var speed2 = 100;
        document.getElementById("hello").innerHTML = "Hi, I'm Michael D'Silva"
        await sleep(speed2)
        document.getElementById("hello").innerHTML = "i, I'm Michael D'Silva"
        await sleep(speed2)
        document.getElementById("hello").innerHTML = ", I'm Michael D'Silva"
        await sleep(speed2)
        document.getElementById("hello").innerHTML = " I'm Michael D'Silva"
        await sleep(speed2)
        document.getElementById("hello").innerHTML = "I'm Michael D'Silva"
        await sleep(speed2)
        document.getElementById("hello").innerHTML = "'m Michael D'Silva"
        await sleep(speed2)
        document.getElementById("hello").innerHTML = "m Michael D'Silva"
        await sleep(speed2)
        document.getElementById("hello").innerHTML = " Michael D'Silva"
        await sleep(speed2)
        document.getElementById("hello").innerHTML = "Michael D'Silva"
        await sleep(speed2)
        document.getElementById("hello").innerHTML = "michael d'silva"
        await sleep(speed2)
        document.getElementById("hello").innerHTML = "michael dsilva"
        await sleep(speed2)
        document.getElementById("hello").innerHTML = "michaeldsilva"
        await sleep(speed2)

        setTimeout(() => document.getElementById("hello").setAttribute('style', 'display:none'), 1000)
      }

      await loadName()
      await sleep(1000)
      welcome.style.display = 'block';
      aboutMe.style.display = 'block';
      experience.style.display = 'block';
      skills.style.display = 'block';
      projects.style.display = 'block';
      footer.style.display = 'block';

      await sleep(500)
      nav.setAttribute('style','display: ')


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.name{
  background: var(--name-background-color);
  padding-top: 20em;
  padding-bottom: 40em;
  height: 100vh;
  width: 100%;
  position: relative;
  animation-name: slidein;
  animation-delay: 4.5s;
  animation-duration: 1.5s;
  animation-fill-mode:forwards;
}

@keyframes slidein { 
  to {
    height: 0px;
    padding-top: 1em;
    padding-bottom: 1em;
  }
}

.name h1{
  color: var(--name-text-color);
  text-align: center;
  vertical-align: center;
}

.name h2{
  color: whitesmoke;
  text-align: center;
  font-size: 1.75em;
}

.name a{
  text-decoration: none;
}

</style>
