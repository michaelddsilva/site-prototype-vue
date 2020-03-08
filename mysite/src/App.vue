<template>
  <div id="app">
    <HelloWorld msg="Hello there."/>
    <AboutMe/>
    <Experience/>
    <Skills/>
    <Projects/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AboutMe from './components/AboutMe.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AboutMe,
    Experience,
    Skills,
    Projects
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
