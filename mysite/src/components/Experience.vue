<template>
  <b-container class="container" id="experienceComponent">
    <h1>Experience</h1>

    <div class="div1">
    <h2>Work Experience</h2>
        <div class="workxp" v-for="data in jobsJson" v-bind:key="data">
        <table v-if="data.display">
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
                            <li>{{des}}</li>
                        </ul>
                    </td>
                    <td><a :href="data.site" target="_blank"><img :src="data.img" width =80%/></a></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>

    <div class="div1">
    <h2>Volunteer Experience</h2>
        <div class="workxp" v-for="data in volunteerJson" v-bind:key="data">
        <table v-if="data.display">
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
                            <li>{{des}}</li>
                        </ul>
                    </td>
                    <td><a :href="data.site" target="_blank"><img :src="data.img" width =80%/></a></td>
                </tr>
            </tbody>
        </table>
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

td {
    width: 70%
}

ul {
    margin-right: 0;
    margin-bottom: 5px;
}
</style>
