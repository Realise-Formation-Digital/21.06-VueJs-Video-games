<template>
  <div>
    <b-carousel
      id="carousel"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
     
      <!-- Slides with image only -->
      <b-carousel-slide v-for="(img, index) in imgs" :key="index" :img-src="img"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
    name : "Carousel",
    data() {
      return {
    
      }
    },
    methods: {

    },
    props:['imgs']
  }

</script>

<style>

</style>