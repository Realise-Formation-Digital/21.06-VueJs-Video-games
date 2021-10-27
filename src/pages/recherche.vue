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

    //Get all videogames and store it in jvs array
    async getVg() {
      //API settings, method, URL, keys
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
      //Store result in jvs array
      this.jvs = temp.data;
    },
    filterJv() {
      //Get search value from text box
      const s = this.search;

      //Look for results in array with filter parameter
      const filter = this.jvs.filter(function (u) {
        return u.title.includes(s);
      });


      //If filter result is not empty
      if (filter.length !== 0){ 
        //Add filtered search to filtered array
        this.jvsSearch = filter;
      } else {
        //Else error
        alert('Aucun jeu trouvé avec ce critère de recherche!');
      }
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
      //Do request
      let temp = await axios.request(options);
      //Show modal
      this.$bvModal.show('my-modal')
      //Assign data from single videogame to singeJv
      this.singleJv = temp.data;
    },
  },
};
</script>

<style>
</style>

