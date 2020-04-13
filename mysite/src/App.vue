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
 
  },
  mounted: function() {
    console.log("App mounted.");
    let nav = document.getElementById("navComponent");

    nav.style.display = 'none';
    
  }
}
history.scrollRestoration = "manual";
</script>

<style>
  @import './assets/styles/styles.css';
</style>
