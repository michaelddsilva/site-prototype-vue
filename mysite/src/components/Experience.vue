<template>
  <b-container class="container" id="experienceComponent">
    <h1>Experience</h1>

    <div class="div2">
        <h2>Work Experience</h2>
        <div v-for="data in jobsJson" v-bind:key="data">
        <div class="experienceCards" v-if="data.display">
        <table>
            <thead>
                <tr>
                    <td><b>{{data.company}}, {{data.position}}</b></td>
                    <th class="date">{{data.duration}}</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul v-for="des in data.description" v-bind:key="des">
                            <li>{{des}}.</li>
                        </ul>
                    </td>
                    <td><a :href="data.site" target="_blank"><img :src="data.img" width =100%/></a></td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
    </div>

   <div class="div2">
       <h2>Volunteer Experience</h2>
        <div v-for="data in volunteerJson" v-bind:key="data">
        <div class="experienceCards" v-if="data.display">
        <table>
            <thead>
                <tr>
                    <td><b>{{data.organization}}, {{data.position}}</b></td>
                    <th class="date">{{data.duration}}</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul v-for="des in data.description" v-bind:key="des">
                            <li>{{des}}.</li>
                        </ul>
                    </td>
                    <td><a :href="data.site" target="_blank"><img :src="data.img" width =100%/></a></td>
                </tr>
            </tbody>
        </table>
        </div> 
    </div>
   </div>

  </b-container>
</template>

<script>
import jobData from '../data/workexperience.js'
import volunteerData from '../data/volunteerexperience.js'
export default {
  name: 'Experience',
  data(){
      return {
          jobsJson: jobData,
          volunteerJson: volunteerData
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.date {
    text-align: right;
    padding-right: 10px;
}

table {
    border-collapse: separate;
}

td {
    padding: 0;
}

ul {
    margin-right: 0;
    margin-bottom: 5px;
}

.div2{
  padding-top: 1em;
  padding-bottom: 1em;
  margin: 2px;
  width: 49%;
  min-width: 350px;
  display: inline-block;
  vertical-align: top; 
}

.experienceCards{
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-bottom: 2px;
  background: var(--container-color); 
  border-style: ridge;
  border-width: 0.1em; 
  border-color: var(--border-color);
  min-height: 250px;
  display: inline-block;
  vertical-align: top; 
}

.experienceCards p, .experienceCards ul, .experienceCards td, .experienceCards th {
color: var(--inactive-p-color);
}

.experienceCards:hover p, .experienceCards:hover ul, .experienceCards:hover td{
color: var(--active-p-color);
transition: 0.3s;
}

.experienceCards tr td:nth-child(2){
  width: 23%;
}

img{
  align-self: flex-end;
  max-width: 150px;
  padding-left: 0.5em;
  margin: 10px auto;
}
</style>
