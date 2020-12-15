<template>
  <div class="about">
    <h1>Feature View</h1>
    <h2>Feature Title: {{ feature.feature.name }}</h2>
    <p>Feature Description: {{ feature.feature.description }}</p>
    <br/>
    <h3>Scenario Title: {{ feature.feature.children[0].name }}</h3>
    <br/>

    <div style="width: 100%;">
      <div style="font-weight: bold; text-align:right; width: 40%; height: 100px; float: left; ">
        {{ feature.feature.children[0].steps[0].keyword }}
      </div>
      <div style="text-align:center; margin-left: 10%; height: 100px; width: 80%">
        {{ feature.feature.children[0].steps[0].text }}
      </div>
    </div>

    <div style="width: 100%;">
      <div style="font-weight: bold; text-align:right; width: 40%; height: 100px; float: left; ">
        {{ feature.feature.children[0].steps[1].keyword }}
      </div>
      <div style="text-align:center; margin-left: 10%; height: 100px; width: 80%">
        {{ feature.feature.children[0].steps[1].text }}
      </div>
    </div>

    <div style="width: 100%;">
      <div style="font-weight: bold; text-align:right; width: 40%; height: 100px; float: left; ">
        {{ feature.feature.children[0].steps[2].keyword }}
      </div>
      <div style="text-align:center; margin-left: 10%; height: 100px; width: 80%">
        {{ feature.feature.children[0].steps[2].text }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FeatureView',
  props: {
    feature: {
      type: Object,
      required: true
    }
  }
}


</script>