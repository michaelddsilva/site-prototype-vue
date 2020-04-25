<template>
	<b-container class="container" id="welcomeComponent">
		<div class="me">
			<div class="me1">
			<h4>Michael D'Silva</h4>
			</div>
			<div class="me-img">
				<img src="../assets/images/me_images/me3.jpg" width="300px" alt="me" />
			</div>
			<div class="resume">
			<h6>
				Check out my resume:
				<a href="./Resume.pdf" target="_blank">
					<img src="../assets/images/icons8-resume-100.png" height="80px" />
				</a>
			</h6>			</div>

		</div>
		<div class="me2">
			<h3>Welcome to my site.</h3>
			<p>I am a third year software engineering student at Western University (UWO).</p>
			<p>I created this site to showcase my experience and projects portfolio.</p>
			<div class="json-card" v-for="data in michaeldsilvaJson" v-bind:key="data">
				<sq>{</sq>
				<p>name: '{{data.name}}',</p>
				<p>title: '{{data.title}}',</p>
				<p>email: '<a href=data.email[0] target="_blank">{{data.email[1]}}</a>',</p>
				<p>linkedin: '<a href=data.linkedin[0] target="_blank">{{data.linkedin[1]}}</a>',</p>
				<p>github: '<a href=data.github[0] target="_blank">{{data.github[1]}}</a>',</p>
				<p>favouriteLanguages:</p>
				<span v-for="lang in data.favouriteLanguages" v-bind:key="lang">
					<p>'{{lang}}',</p>
				</span>
				<p>favouriteFramework: '{{data.favouriteFramework}}',</p>
				<p>skillSets:</p>
				<span v-for="skill in data.skillSets" v-bind:key="skill">
					<p>'{{skill}}',</p>
				</span>
				<sq>}</sq>
			</div>
		</div>
	</b-container>
</template>

<script>
import michaeldsilvaData from "../data/michaeldsilva.js";
import $ from "jquery";

export default {
	name: "Welcome",
	data() {
		return {
			michaeldsilvaJson: michaeldsilvaData
		};
	},
	mounted: function() {
		$("p").each(function() {
			$(this).html($(this).html().replace("{", '<span style="color: var(--accent2-color)!important;">{</span>'));
		});
		$("p").each(function() {
			$(this).html($(this).html().replace(":", '<span style="color: var(--accent2-color)!important;">:</span>'));
		});
		$("p").each(function() {
			$(this).html($(this).html().replace("'", '<span style="color: var(--accent2-color)!important;">&#34;</span>'));
		});
		$("p").each(function() {
			$(this).html($(this).html().replace("',", '<span style="color: var(--accent2-color)!important;">&#34;,</span>'));
		});
		$("p").each(function() {
			$(this).html($(this).html().replace("}", '<span style="color: var(--accent2-color)!important;">}</span>'));
		});
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
	margin: 8px;
}

.me {
	margin: 10px;
	width: 25%;
	min-width: 350px;
	padding-top: 10px;
	display: inline-block;
	position: static;
	top: 0;
	text-align: center;
}

.me1 h4 {
	text-align: center;
}

.me1 {
	background: var(--container-color);
	border-style: ridge;
	border-width: 0.1em;
	border-color: var(--border-color);
	width: 100%;
	min-width: 350px;
	margin: 0.5em auto;
	display: inline-block;
	align-items: center;
}

.me-img {
	background: var(--container-color);
	border-style: ridge;
	border-width: 0.1em;
	border-color: var(--border-color);
	width: 100%;
	min-width: 350px;
	border-radius: 50%;
	display: inline-block;
	align-items: center;
	padding: 1em;
}

.me-img img {
	min-width: 300px;
	display: block;
	margin: 0em auto!important;
	align-self: center;
	border-radius: 50%;
}

.resume {
	background: var(--container-color);
	border-style: ridge;
	border-width: 0.1em;
	border-color: var(--border-color);
	width: 100%;
	min-width: 350px;
	margin: 0.5em auto;
	display: inline-flex;
	align-items: center;
}

.resume img {
	margin: 0 auto!important;
	align-self: center;
}

.me2 {
	padding-left: 1em;
	background: none;
	width: 60%;
	min-width: 350px;
	display: inline-block;
	vertical-align: top;
}

.json-card {
	width: 80%;
	min-width: 350px;
	background-color: var(--nav-color);
	padding: 0.5em;
	font-family: Consolas;
	margin-left: 1em;
}

.json-card p {
	text-indent: 2em;
	color: #f1fa8c;
}

.json-card span p {
	text-indent: 4em;
}

.json-card li {
	list-style: none;
}

.facts {
	position: relative;
	animation-name: slidein;
	animation-duration: 3s;
}

@keyframes slidein {
	from {
		left: 300px;
	}

	to {
		left: 0px;
	}
}

.resume {
	text-align: center;
	padding: 1em;
}
</style>
