<template>
  <div class="container">
    <h1>Projects</h1>
    <div class="div2">
        <h3>Personal Website: <a href="javascript:alert('You are already here!');">michaeldsilva.com</a> </h3>
        <img src="img/project_images/m.png" height="60px">
        <img src="img/project_images/vue.png" height="60px">
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
    <img src="img/project_images/spaceinvaders.png" height="60px">
    <img src="img/project_images/c_sharp.png" height="60px">
    <ul>
        <li>This "shoot 'em up game" was created in collaboration with two other software engineering students. </li> 
        <li>The game's scripts were coded in C# and the assets and scenes were created in <a href="https://unity.com/" target="_blank">Unity</a>. </li>
        <li>NOTE: The game will automatically open in full screen and the quit game button will cause the game to freeze.</li>
    </ul>
    </div>

    <div class="div2">
    <h3>Full Stack Web Application</h3>
    <img src="img/project_images/mean.jpg" height="60px">
    <ul>
        <li>The Full Stack Web App was created with the MEAN (MongoDB, Express, Angular and Node.js) stack.</li> 
        <li>The web app was created for a final project for Web Technologies course. </li>
    </ul>
    </div>

    <div class="div2">
    <h3>Relational Database Application</h3>
    <img src="img/project_images/mysql.png" height="60px">
    <ul>
        <li>Created a relational database application with PHP that accesses a MySQL database through SQL commands for a Database Management Systems course. </li>
    </ul>
    </div>

    <div class="div2">
    <h3>Mobile Android Application</h3>
    <img src="img/project_images/android.png" height="60px">
    <img src="img/project_images/java.png" height="60px">
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

.div2{
  padding-top: 1em;
  padding-bottom: 1em;
  background: var(--container-color); 
  border-style: ridge;
  border-width: 0.1em; 
  border-color: var(--border-color);
  margin: 2px;
  width: 32%;
  min-width: 350px;
  min-height: 350px;
  display: inline-block;
  vertical-align: top; 
}

.div2 p, .div2 ul, .div2 td, .div2 th {
color: var(--inactive-p-color);
}

.div2:hover p, .div2:hover ul, .div2:hover td{
color: var(--active-p-color);
transition: 0.3s;
}

.div2 tr td:nth-child(2){
  width: 20%;
}

.div2 img{
  max-width: 300px;
}

</style>
