<template>
  <div id="app">
    <Nav/>
      <b-container>
        <router-view></router-view>
      </b-container>
    <Foot/>
  </div>
</template>

<script>

import Nav from "./components/Nav";

import Foot from "./components/Foot";

export default {
  name: 'App',
  components: {
    Foot,
    Nav
  }
}
</script>

<style>

</style>
