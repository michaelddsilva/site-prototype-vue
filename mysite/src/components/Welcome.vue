<template>
  <div class="container">
  
  <div class="me1" style="text-align: center">
        <img src="../assets/images/me_images/me4.png" width = 300px alt = "me"> 
    </div>
    
    <div class="me2" >
        <div class="me" style="text-align: left">
            <h1 style="text-align: center"><b>Welcome to my site!</b></h1>
            <p>Hi my name is Michael D'Silva. Welcome to my site. I am a third year software engineering student at Western University (UWO).</p>
            <p>Here on my site you can find my experiences, projects, skills and interests.</p>
            <p>Check out my resume: <br><br>
                
                <a href="../assets/files/Michael%20D'Silva's%20Resume v2.pdf" target = "_blank"><img src="../assets/images/pdf.svg" width="40px"></a>
            </p>
            <h2>Fun Facts</h2>
            <table>
                <tbody>
                    <tr>
                        <td><img src="../assets/images/funFacts_symbols/icons8-graduation-cap-96.png" width="40px"></td>
                        <td><p>High School Class Valedictorian</p></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><img src="../assets/images/funFacts_symbols/righthand.svg" width="40px"></td>
                        <td><p>I'm left-handed</p></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><img src="../assets/images/funFacts_symbols/icons8-chef-64.png" width="40px"></td>
                        <td><p>I'm pretty good at cooking</p></td>
                    </tr>
                </tbody>
            </table>
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
.me {
  border-style: none;
}

.me1 {
  background: var(--container-color); 
  border-style: none;
  width: 31%;
  min-width: 350px;
  display: inline-block;

}

.img {
    display: inline-block;
    position: relative;
    top: 0;
}

.me2 {
  padding-top: 1em;
  padding-bottom: 1em;
  background: none;
  width: 60%;
  min-width: 350px;
  display: inline-block;
}

.me3 {
  padding: 1em;
  border-style: none;
  width: 100%;
  min-width: 350px;
  display: inline-block;
}

.me3 p, .me3 ul, .me3 td, .me3 th {
  color: var(--active-p-color);
}

.me td {
  background: var(--container-color);
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 4px;
  width: fit-content;
  min-height: 70px;
  vertical-align: middle;
}

.me tbody {
  margin: 5px;
}

.me table img {
  transform: scale(-1, 1); 
  transform-origin: center;
}

.resume{
  text-align: center;
  padding: 1em;
}


</style>
