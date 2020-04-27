<template>
	<b-container class="container" id="aboutMeComponent">
		<h1>About Me</h1>
		<div style="align-self: center">
			<div class="div1">
				<h2>Clubs & Organizations</h2>
				<div class="affiliations" v-for="data in affiliationsJson" v-bind:key="data">
					<table v-if="data.display">
						<thead>
							<tr>
								<td>
									<b>{{data.name}}</b>
								</td>
								<td>
									<b></b>
								</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p v-html="data.description"></p>
								</td>
								<td>
									<a :href="data.site" target="_blank">
										<img :src="data.img" width="75%" />
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="div1">
				<h2>Education</h2>
				<div class="education" v-for="data in educationJson" v-bind:key="data">
					<table>
						<thead>
							<tr>
								<td width="10%">
									<img :src="data.institutionIMG" width="80%" />
								</td>
								<td>
									<h6>{{data.degree}},</h6>
									<h6>{{data.specialization}}</h6>
									<p>
										<a :href="data.site" target="_blank">{{data.institution}}&nbsp;</a>
									</p>
									<p style="display: inline-block">
										<img src="../assets/images/misc/location.svg" height="14px"/>
										{{data.location}}
									</p>
									<br/>
									<p v-html="data.duration"></p>
									<br/>
									<br/>
									<p>
										<i>{{data.scholarships}}</i>
									</p>
									<br/>
									<br/>
									<img :src="data.facultyIMG" />
								</td>
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				</div>
			</div>
		</div>
	</b-container>
</template>

<script>
import affiliationsData from "../data/affiliations.js";
import educationData from "../data/education.js";
export default {
	name: "AboutMe",
	data() {
		return {
			affiliationsJson: affiliationsData,
			educationJson: educationData
		};
	},
	mounted() {
		console.log("AboutMe mounted.");
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div1 {
	background: none;
	border: none;
}

img {
	pointer-events: all;
}

table {
	padding-top: 1em;
	padding-bottom: 1em;
	background: var(--container-color);
	border-style: ridge;
	border-width: 0.1em;
	border-color: var(--border-color);
	margin-bottom: 5px;
}

.education tr p {
	margin: 2px;
	display: inline;
}

.education h6 {
	margin: 1px;
}

.education p img {
	margin: 1px;
}

.education tr a {
	text-decoration: none;
	font-weight: 500;
}

.education p i {
	line-height: 80%;
}
</style>
