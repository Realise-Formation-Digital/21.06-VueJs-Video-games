 <template>
  <div>
    <br />
    <h1>Recherche</h1>
    <div id="recherche">
      <input type="text" v-model="search" />
      <b-btn @click="filterJv()">search</b-btn>
    </div>

    <h1>Resultat</h1>
    <div v-for="(jv, index) in jvsSearch" :key="index">
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

//Axios
const axios = require("axios").default;

export default {
  name: "recherche",
  components: {
    card, cardDetail
  },
  data() {
    return {
      jvs: [],
      search: "",
      id : 1,
      jvsSearch: [],
      singleJv : null
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
      console.log(this.jvs);
    },
    filterJv() {
      const s = this.search;
      const filter = this.jvs.filter(function (u) {
        return u.title.includes(s);
      });
      this.jvsSearch = filter;
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

