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
            <div class="switch-container">
                <label class="switch">
                    <input class = "toggle" type="checkbox" id="toggleSwitch" v-on:click="toggleCSS()">
                    <span class="slider round"></span>
                </label>
            </div>
            </b-collapse>
        </b-navbar>

  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    created: function() {
        console.log("Navigation created.");
    },
    mounted: function() {
        console.log("Navigation mounted.");
    },
    toggleCSS() {
        var check = document.getElementById("toggleSwitch");
        if (check.checked) {
            document.documentElement.setAttribute('site-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('site-theme', 'light');
        }    
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.topnav {
    overflow: hidden;
    background-color: var(--nav-color);
    z-index: 2;
    position: fixed;
        top:0;
        margin: 0em;
        padding-right: 0 em;
        width: 100%;
}

.topnav a {
    color: #f2f2f2;
    text-decoration: none;
    font-size: 1.25em;

}

.topnav a:hover {
    color: var(--accent-color);
}


.topnav .icon {
    display: none;
}

.switch-container {
    vertical-align: middle;
}

.switch {
    position: relative;
    display: inline-block;
    padding-top: 1;
    width: 4em;
    height: 2em;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 1.5em;
    width: 1.5em;
    left: 4px;
    bottom: 4px;
    background-color: var(--background-color);
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: var(--accent-color);
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.progress-container {
    position: fixed;
    top: 3em;
    z-index: 2;
    width: 100%;
}

.progress-box {
    height: 4px;
    background: #f2f2f2;
}

.progress-bar {
  height: 4px;
  background: var(--link-color);
  width: 0%;
}

</style>
