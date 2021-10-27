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
    <div>
      <!-- The modal -->
      <b-modal id="my-modal"
        ><card-detail
          :title="singleJv && singleJv.title"
          :thumbnail="singleJv && singleJv.thumbnail"
          :genre="singleJv && singleJv.genre"
          :description="singleJv && singleJv.short_description"
          :date="singleJv && singleJv.release_date"
          :developer="singleJv && singleJv.developer"
          :platform="singleJv && singleJv.platform"
          :publisher="singleJv && singleJv.publisher"
      /></b-modal>
    </div>
  </div>
</template>

<script>
//Simple card display for the whole game list
import card from "../components/card.vue";

//More detailed card for single game modal
import cardDetail from "../components/cardDetail.vue";

const axios = require("axios").default;
export default {
  name: "result",
  components: {
    card,
    cardDetail,
  },
  data() {
    return {
      jvs: [], //Json array with all the games' info
      id: 1, //Game index for single game display
      singleJv : null
    };
  },

  //gets all videogames at init
  mounted() {
    this.getVg();
  },
  methods: {
    //Gets all the videogames from api
    async getVg() {
      let options = {
        //API settings, keys, method
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "7d72930235msh2d96d13e2a5ba40p1d6df0jsnd7cfe694c4a2",
        },
      };

      //Do request
      let temp = await axios.request(options);

      //Get data into jvs array
      this.jvs = temp.data;
    },

    //When child is clicked, get id from child back, and use said ID to display single game
    async childClicked(val) {
      let options = {
        //API settings, keys, method, request params
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
        params: { id: val },
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "3b6fde0462msh8f59fe31774848ap1a098cjsn4821d8bafdfb",
        },
      };
      let temp = await axios.request(options);
      this.$bvModal.show('my-modal')
      this.singleJv = temp.data;
    },
  },
};
</script>

<style>
</style>