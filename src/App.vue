<template>
  <div id="app">
    <FeatureView :feature="feature"/>
  </div>
</template>

<script>
import FeatureView from "@/views/FeatureView";
import GherkinParser from "@/services/GherkinParser";

export default {
  components: {FeatureView},
  created() {
    this.feature = GherkinParser.printGherkinStream()
  },
  data() {
    return {
      feature: null
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

h4 {
  font-size: 20px;
}
</style>
