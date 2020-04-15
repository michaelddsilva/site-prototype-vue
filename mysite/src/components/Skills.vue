<template>
  <b-container class="container" id="skillsComponent">
    <h1>Skills</h1>

        <div class="div1" v-for="data in categoryJson" v-bind:key="data">
            <img :src="data.img" height="40px">
            <h3>{{data.category}}</h3>
            <ul v-for="skill in data.items" v-bind:key="skill">
                <li>{{skill}}</li>
            </ul>
        </div>


  </b-container>
</template>

<script>
import categoryData from '../data/skills.js'
export default {
    name: 'Skills',
    data(){
      return {
          categoryJson: categoryData
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.div1 {
    min-width: 350px;
    min-height: 250px;
    width: 26%;
}

ul {
    margin: 0;
}

</style>
