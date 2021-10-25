<template>
  <div>
    <h1>Resultat</h1>
    <div v-for="(jv, index) in jvs" :key="index">
      <card
        :description="jv.short_description"
        :genre="jv.genre"
        :thumbnail="jv.thumbnail"
        :title="jv.title"
        :id="jv.id"
        @clicked="childClicked"
      />
    </div>
  </div>
</template>

<script>
import card from "../components/card.vue";
const axios = require("axios").default;
export default {
  name: "result",
  components: {
    card,
  },
  data() {
    return {
      jvs: [],
    };
  },
  mounted() {
    this.getVg();
  },
  methods: {
    async getVg() {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "7d72930235msh2d96d13e2a5ba40p1d6df0jsnd7cfe694c4a2",
        },
      };
      const temp = await axios.request(options);
      this.jvs = temp.data;
    },
    childClicked(val) {
      console.log(val);
    },
  },
};
</script>

<style>
</style>