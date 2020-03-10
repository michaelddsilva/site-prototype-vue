<template>
  <div class="container">
  
    <div class="me1">
        <img src="../assets/images/me_images/me4.png" width = 300px alt = "me"> 
    </div>
    <div class="me2" >
            <h1 style="text-align: center"><b>Welcome to my site!</b></h1>
            <p>Hi my name is Michael D'Silva. Welcome to my site. I am a third year software engineering student at Western University (UWO).</p>
            <p>Here on my site you can find my experiences, projects, skills and interests.</p>
            <p>Check out my resume: <br><br>            
                <a href="./Resume.pdf" target = "_blank"><img src="../assets/images/pdf.svg" width="40px"></a>
            </p>
            <div class="welcomeFacts">
              <h2>Fun Facts</h2>
                <ul>
                    <li>
                        <img src="../assets/images/funFacts_symbols/icons8-graduation-cap-96.png" width="40px">
                        <p>High School Class Valedictorian</p>
                    </li>
                    <li>
                        <img src="../assets/images/funFacts_symbols/icons8-hand-left-96.png" width="40px">
                        <p>I'm left-handed</p>
                    </li>
                    <li>
                        <img src="../assets/images/funFacts_symbols/icons8-star-wars-96.png" width="40px">
                        <p>I've watched every Star Wars film</p>
                    </li>
                </ul>
            </div>
            <div class="welcomeFacts">
                <h2>Skill Sets</h2>
                <ul>
                    <li>
                        <img src="../assets/images/skillSets_symbols/icons8-web-64.png" width="40px">
                        <p>Web Development</p>
                    </li>
                    <li>
                        <img src="../assets/images/skillSets_symbols/icons8-mobile-64.png" width="40px">
                        <p>App Development</p>
                    </li>
                    <li>
                        <img src="../assets/images/skillSets_symbols/icons8-business-64.png" width="40px">
                        <p>Management Consulting</p>
                    </li>
                </ul>
            </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  margin: 8px;
}

.me1 img {
  min-width: 300px;
  width: 100%;
}

.me1 {
  background: none; 
  border-style: none;
  width: 31%;
  min-width: 350px;
  display: inline-flex;
}

.me2 {
  background: none;
  width: 60%;
  min-width: 350px;
  display: inline-block;
}

.welcomeFacts ul {
  list-style: none;
}

.welcomeFacts li {
  background: none;
  margin-bottom: 8px;
  min-height: 70px;
  vertical-align: middle;
  text-align: left;
}

.welcomeFacts li p:hover {
  color: var(--active-p-color);
}

.welcomeFacts li p {
  color: var(--inactive-p-color);
}

.welcomeFacts li {
  background: var(--container-color);
  border-style: ridge;
  border-width: 0.1em; 
  border-color: var(--border-color);
}

.welcomeFacts {
    display: inline-block;
    min-width: 300px;
    width: 49%;
    text-align: left;
}

.resume{
  text-align: center;
  padding: 1em;
}

</style>
