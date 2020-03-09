<template>
  <div class="container">
    <h1>Projects</h1>
    <div class="div2">
        <h3>Personal Website: <a href="javascript:alert('You are already here!');">michaeldsilva.com</a> </h3>
        <img src="../assets/images/project_images/m.png" height="60px">
        <img src="../assets/images/project_images/vue.png" height="60px">
        <ul>
            <li>This site is hosted through <a href="https://github.io" target ="_blank">github.io</a>.</li>
            <li>The repository for the site can be located <a href="https://github.com/michaelddsilva/michaelddsilva.github.io" target ="_blank">here</a>.</li>
            <li>The icons i'm using in site sections are from <a target="_blank" href="https://icons8.com">Icons8</a>.</li>
            <li>I started this site in Febuary of 2019 and have been updating it with my recent experiences, and tweaking it as I improve my experience as a web developer.</li>
            <li>This site implements <a href="https://vuejs.org/">Vue.js</a>.</li>
        </ul>
    </div>

    <div class="div2">
    <h3>Shoot 'em up Genre Game: <a href="https://michaelddsilva.github.io/game/" target ="_blank">[play_here]</a></h3>
    <img src="../assets/images/project_images/spaceinvaders.png" height="60px">
    <img src="../assets/images/project_images/c_sharp.png" height="60px">
    <ul>
        <li>This "shoot 'em up game" was created in collaboration with two other software engineering students. </li> 
        <li>The game's scripts were coded in C# and the assets and scenes were created in <a href="https://unity.com/" target="_blank">Unity</a>. </li>
        <li>NOTE: The game will automatically open in full screen and the quit game button will cause the game to freeze.</li>
    </ul>
    </div>

    <div class="div2">
    <h3>Full Stack Web Application</h3>
    <img src="../assets/images/project_images/mean.jpg" height="60px">
    <ul>
        <li>The Full Stack Web App was created with the MEAN (MongoDB, Express, Angular and Node.js) stack.</li> 
        <li>The web app was created for a final project for Web Technologies course. </li>
    </ul>
    </div>

    <div class="div2">
    <h3>Relational Database Application</h3>
    <img src="../assets/images/project_images/mysql.png" height="60px">
    <ul>
        <li>Created a relational database application with PHP that accesses a MySQL database through SQL commands for a Database Management Systems course. </li>
    </ul>
    </div>

    <div class="div2">
    <h3>Mobile Android Application</h3>
    <img src="../assets/images/project_images/android.png" height="60px">
    <img src="../assets/images/project_images/java.png" height="60px">
    <ul>
        <li>This application is being created for a Software Engineering Design course. </li>
        <li>The application was created in Android Studio. </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
