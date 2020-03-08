<template>
  <div class="name">
      <a href=#intro><h1 id="hello"></h1></a>
      <h2 id ="titles"></h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
      
  },
  mounted: function() {
      console.log("Footer mounted.");
      var i = 0;
      var name = "Hi, I'm Michael D'Silva";
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

</style>
