<template>
  <div class="container">
    <h1>Experience</h1>
    <div class="div1">
    <h2>Work Experience</h2>
    <div class="workxp" v-for="data in jobsJson" v-bind:key="data">
    <table>
        <thead>
            <tr>
                <td><b>{{data.company}}, {{data.position}}</b></td>
                <th>{{data.duration}}</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <ul v-for="des in data.description" v-bind:key="des">
                        <li>{{des}}</li>
                    </ul>
                </td>
                <td><img :src="data.img" width =80%></td>
            </tr>
        </tbody>
    </table>
    </div>
    </div>

    <div class="div1">
        <h2>Volunteer Experience</h2>
        <div class="workxp" v-for="data in volunteerJson" v-bind:key="data">
            <table>
                <thead>
                    <tr>
                        <td><b>{{data.organization}}, {{data.position}}</b></td>
                        <th>{{data.duration}}</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul v-for="des in data.description" v-bind:key="des">
                                <li>{{des}}</li>
                            </ul>
                        </td>
                        <td><img :src="data.img" width =80%></td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>

  </div>
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

</style>
