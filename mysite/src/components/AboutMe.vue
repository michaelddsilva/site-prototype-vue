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
				<table>
					<thead>
						<tr>
							<td>
								<b>Western University (UWO)</b>
							</td>
							<td>
								<b>September 2017 - Present</b>
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<p>Candidate for Bachelor of Engineering Science (BESc), Software Engineering</p>
								<p>
									<i>Western Scholarship of Distinction</i>
								</p>
								<img src="img/organizations_logos/Western_Logo_H_Engineering_RGB_SIM.svg" />
							</td>
							<td>
								<img src="img/organizations_logos/western.png" width="75%" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</b-container>
</template>

<script>
import affiliationsData from "../data/affiliations";
export default {
	name: "AboutMe",
	data() {
		return {
			affiliationsJson: affiliationsData
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
</style>
