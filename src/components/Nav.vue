<template>
  <mdb-tabs
    :active="0"
    pills
    fill
    justify
    class="mb-5"
    :links="[
      { text: 'Bienvenue' },
      { text: 'Resultat' },
      { text: 'Contact' },
      { text: 'A propos' }]"
  />
</template>

<script>
  import { mdbTabs } from 'mdbvue';
  export default {
    name: 'Pills',
    components: {
      mdbTabs


    }
  }
</script>

<style scoped>

</style>