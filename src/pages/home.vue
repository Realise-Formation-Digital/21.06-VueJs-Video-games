<template>
<div>
  <h1>Bienvenue</h1>
 <Carousel
 :imgs="listImg.slice(0, 5)"/>
 </div>
</template>

<script>
import Carousel from "../components/carousel.vue"
const axios = require("axios").default;

export default {
  name: "home",
  components: {
    Carousel,
  },
  data() {
    return {
      jvs: [],    //Array with all videogames
      listImg:[]  //Which images we're gonna display in carousel
    };
  },
  mounted() {
    this.getVg();  //Get videogames at init
  },
  methods: {
    async getVg() {
      //Options are request parameters, methods, headers, etc.
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "7d72930235msh2d96d13e2a5ba40p1d6df0jsnd7cfe694c4a2",
        },
      };
      //Do request
      const temp = await axios.request(options);

      //store request result in jvs array
      this.jvs = temp.data;

      //Get thumbnails loop
      this.listImg = this.jvs.map((listunite) => {
        return listunite.thumbnail;
      });

      //Shuffle thumbnail arrays so we display at random later
      this.listImg.sort(() => 0.5 - Math.random());
    },
  },
};

</script>

<style scoped>
</style>