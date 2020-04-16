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
                    <th>
                        <position>{{data.position}}</position><br>
                        <p><a :href="data.site" target="_blank">{{data.company}} &#9701; </a></p>
                        <p v-html="data.duration"></p>
                    </th>
                    <th width="23%"><a :href="data.site" target="_blank"><img :src="data.img" width =100%/></a></th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul v-for="des in data.description" v-bind:key="des">
                            <li>{{des}}.</li>
                        </ul>
                    </td>
                    <td></td>
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
                    <th width="23%"><img :src="data.img" width =100%/></th>
                    <th>
                        <position>{{data.position}}</position><br>
                        <p><a :href="data.site" target="_blank">{{data.organization}} &#9701; </a></p>
                        <p v-html="data.duration"></p>
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <ul v-for="des in data.description" v-bind:key="des">
                            <li>{{des}}.</li>
                        </ul>
                    </td>
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
import $ from 'jquery'
export default {
  name: 'Experience',
  data(){
      return {
          jobsJson: jobData,
          volunteerJson: volunteerData
      }
  },
  methods: {

  },
  mounted: function() {
        $("thead").on("click", function() {
            console.log('thead clicked');
            $(this).parents("table").find("tbody").toggle();
        });
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
  min-height: 150px;
  width: 100%;
  display: inline-block;
  vertical-align: top; 
}

.experienceCards p, .experienceCards ul, .experienceCards td, .experienceCards th {
color: var(--inactive-p-color);
}

.experienceCards:hover p, .experienceCards:hover ul, .experienceCards:hover td, .experienceCards:hover th{
color: var(--active-p-color);
transition: 0.3s;
}

.experienceCards th {
    font-weight: normal;
}

.experienceCards th p{
    margin: 0;
    display: inline;
}

.experienceCards th a{
    text-decoration: none;
}


.experienceCards position {
    font-size: 1.5em;
}

img{
  align-self: flex-end;
  max-width: 100px;
  padding-left: 0.5em;
  margin: 10px auto;
}
</style>
