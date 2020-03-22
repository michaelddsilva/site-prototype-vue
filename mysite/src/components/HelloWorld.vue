<template>
  <b-container fluid class="name" id="helloWorldComponent">
      <h1 id="hello"></h1>
      <h2 id ="titles"></h2>
  </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
      
  },
  mounted: function() {
      console.log("Footer mounted.");
      var i = 0;
      var name = "Hi, I'm Michael D'Silva.";
      var speed1 = 100;
      function typeMyName() {
        if (i < name.length) {
          document.getElementById("hello").innerHTML += name.charAt(i);
          i++;
          
          setTimeout(typeMyName, speed1);          
        }
      }
      typeMyName();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.name{
  background: var(--name-color);
  padding-top: 20em;
  padding-bottom: 40em;
  width: 100%;
  position: relative;
  animation-name: slidein;
  animation-delay: 2s;
  animation-duration: 5s;
  animation-fill-mode:forwards;
}

@keyframes slidein { 
  to {
    top: 0;
    padding-top: 8em;
    padding-bottom: 4em;
  }
}

.name h1{
  color: white;
  text-align: center;
  vertical-align: center;
}

.name h2{
  color: whitesmoke;
  text-align: center;
  font-size: 1.75em;
}

.name a{
  text-decoration: none;
}

</style>
