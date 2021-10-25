<template>
  <div>
      <h1>Resultat</h1>
      <card description="test" genre="test" thumbnail="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" title="test"/>
  </div>
</template>

<script>
import card from "../components/card.vue"
const axios = require("axios").default;
export default {
    name:"result",
    components : {
      card
    },
    data() {
      return {
        jv : []
      }
    },
    mounted(){
      this.getVg()
    },
    methods : {
      async getVg() {
        const temp = await axios.get("https://www.freetogame.com/api/games");
        this.jv = temp;
        console.log(this.jv);
      }
    }
}
</script>

<style>

</style>