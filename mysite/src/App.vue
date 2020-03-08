<template>
  <div id="app">
    <Navigation/>
    <HelloWorld id="HelloWorld" />
    <AboutMe id="aboutMe" />
    <Experience/>
    <Skills/>
    <Projects/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import HelloWorld from './components/HelloWorld.vue'
import AboutMe from './components/AboutMe.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    HelloWorld,
    AboutMe,
    Experience,
    Skills,
    Projects
  },
  mounted: function() {
    console.log("App mounted.");
  }
}
</script>

<style>
  @import './assets/styles/styles.css';
</style>
