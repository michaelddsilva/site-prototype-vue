<template>
  <div id="app">
    <Navigation/>
    <div id="helloWorld"></div>
    <HelloWorld/>
    <div id="welcome"></div>
    <Welcome/>
    <div id="aboutMe"></div>
    <AboutMe/>
    <div id="experience"></div>
    <Experience/>
    <div id="skills"></div>
    <Skills/>
    <div id="projects"></div>
    <Projects/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import HelloWorld from './components/HelloWorld.vue'
import Welcome from './components/Welcome.vue'
import AboutMe from './components/AboutMe.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    HelloWorld,
    Welcome,
    AboutMe,
    Experience,
    Skills,
    Projects,
    Footer
  },
  methods: {
    copyrightYear() {
      var year = new Date().getFullYear();
      document.querySelector("footer p").innerHTML = "Copyright <i class='far fa-copyright'></i> " + year + " Michael D'Silva";
    }
  },
  mounted: function() {
    console.log("App mounted.");
    var year = new Date().getFullYear();
    document.querySelector("footer p").innerHTML = "Copyright &#169 " + year + " Michael D'Silva";
    var nav = document.querySelector(".topnav");
    nav.style.opacity = 0;
    setTimeout(()=>{
      nav.style.display = 'block';
      setTimeout(()=>(nav.style.opacity = 1), 50);
    }, 2000);
  }
}
</script>

<style>
  @import './assets/styles/styles.css';
</style>
