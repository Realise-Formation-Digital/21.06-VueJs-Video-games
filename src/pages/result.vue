<template>
  <div>
      <h1>Resultat</h1>
      <div v-for="(jv, index) in jvs" :key="index">
        <card :description="jv.short_description" :genre="jv.genre" :thumbnail="jv.thumbnail" :title="jv.title"/>
      </div>
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
        jvs : []
      }
    },
    mounted(){
      this.getVg()
    },
    methods : {
      async getVg() {
        const temp = await axios.get("http://localhost:3000/jv");
        this.jvs = temp.data;
        console.log(this.jvs[1]);
      }
    }
}
</script>

<style>

</style>