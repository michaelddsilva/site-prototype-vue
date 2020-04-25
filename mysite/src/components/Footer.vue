<template>
	<b-container>
		<footer class="FooterClass" id="footerComponent">
			<p></p>
			<div class="links">
				<p>
					Icons from
					<a target="_blank" href="https://svgrepo.com">svgrepo</a>.
					Hosted through
					<a href="https://github.io" target="_blank">github.io</a>.
				</p>
			</div>
		</footer>
	</b-container>
</template>

<script>
export default {
	name: "Footer",
	methods: {
		copyrightYear() {
			var year = new Date().getFullYear();
			document.querySelector("footer p").innerHTML =
				"Copyright <i class='far fa-copyright'></i> " + year + " Michael D'Silva";
		}
	},
	mounted: function() {
		console.log("Footer mounted.");
		var year = new Date().getFullYear();
		document.querySelector("footer p").innerHTML =
			"Copyright &#169 " + year + " Michael D'Silva";
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
