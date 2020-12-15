<template>
  <div id="app">
    <FeatureView :feature="this.feature"/>
  </div>
</template>

<script>
import FeatureView from "@/views/FeatureView";
import GherkinParser from "@/services/GherkinParser";
import GitRepoService from "@/services/GitRepoService";

export default {
  components: {FeatureView},
  created() {
    GitRepoService.getFeature().then(response => {
      this.feature = GherkinParser.parseFeatureFile(response.data)
    })
        .catch(error => {
          console.log(error)
        })
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
