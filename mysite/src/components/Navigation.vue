<template>
  <div class="topnav">
        <b-navbar toggleable="lg" type="dark" variant="faded">
            <b-navbar-brand href="#">michaeldsilva</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#AboutMe">About Me</b-nav-item>
                <b-nav-item href="#Experience">Experience</b-nav-item>
                <b-nav-item href="#Skills">Skills</b-nav-item>
                <b-nav-item href="#Projects">Projects</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    background: blue;
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container {
  width: 50%;
}
</style>
