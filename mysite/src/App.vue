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
    var nav = document.getElementById("navComponent");
    var welcome = document.getElementById("welcomeComponent");
    var aboutMe = document.getElementById("aboutMeComponent");
    var experience = document.getElementById("experienceComponent");
    var skills = document.getElementById("skillsComponent");
    var projects = document.getElementById("projectsComponent");
    var footer = document.getElementById("footerComponent");
    nav.style.opacity = 0;
    nav.style.display = 'none';
    nav.style.transition = 'opacity 3s ease-in';
    welcome.style.opacity = 0.2;
    welcome.style.display = 'none';
    welcome.style.transition = 'opacity 3s ease-in';
    aboutMe.style.opacity = 0;
    aboutMe.style.display = 'none';
    aboutMe.style.transition = 'opacity 3s ease-in';
    experience.style.opacity = 0;
    experience.style.display = 'none';
    experience.style.transition = 'opacity 3s ease-in';
    skills.style.opacity = 0;
    skills.style.display = 'none';
    skills.style.transition = 'opacity 3s ease-in';
    projects.style.opacity = 0;
    projects.style.display = 'none';
    projects.style.transition = 'opacity 3s ease-in';
    footer.style.opacity = 0;
    footer.style.display = 'none';
    footer.style.transition = 'opacity 3s ease-in';
    
    setTimeout(()=>{
      nav.style.display = 'block';
      welcome.style.display = 'block';
      aboutMe.style.display = 'block';
      skills.style.display = 'block';
      projects.style.display = 'block';
      footer.style.display = 'block';
      setTimeout(()=>{
        nav.style.opacity = 1;
        welcome.style.opacity = 1;
        aboutMe.style.opacity = 1;
        skills.style.opacity = 1;
        projects.style.opacity = 1;
        footer.style.opacity = 1;
      }, 50);
    }, 2000);
  }
}
</script>

<style>
  @import './assets/styles/styles.css';
</style>
