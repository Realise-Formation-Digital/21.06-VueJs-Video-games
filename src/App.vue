<template>
  <div id="app">
    <Nav/>
      <div class="container">
        <router-view></router-view>
      </div>
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
    Nav,
  }
}
</script>

<style>

</style>
