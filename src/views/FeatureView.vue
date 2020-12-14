<template>
  <div class="about">
    <h1>Feature View</h1>
    <h2>Feature Title: {{feature.feature.name}}</h2>
    <p>Feature Description: {{feature.feature.description}}</p>
    <br/>
    <h3>Scenario Title: {{feature.feature.children[0].name}}</h3>
    <br/>
    <div>{{feature.feature.children[0].steps[0].keyword}} {{feature.feature.children[0].steps[0].text}}</div>
    <div>{{feature.feature.children[0].steps[1].keyword}} {{feature.feature.children[0].steps[1].text}}</div>
    <div>{{feature.feature.children[0].steps[2].keyword}} {{feature.feature.children[0].steps[2].text}}</div>


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