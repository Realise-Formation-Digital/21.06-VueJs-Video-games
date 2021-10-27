 <template>
  <div>
    <br />
    <h1>Recherche</h1>
    <div id="recherche">
      <input type="text" v-model="search" />
      <b-btn @click="filterJv()">search</b-btn>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
export default {
  name: "recherche",
  data() {
    return {
      jvs: [],
      search : ""
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
        const s = this.search
        const filter = this.jvs.filter(function(u){
            return u.title.includes(s)
        })
        console.log(filter)
    }
  },
};
</script>

<style>
</style>

