<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted () {
    this.$store.dispatch('fetchCharacters')
  }
}
</script>

<style lang="less" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1 {
    margin: 0px;
    color: rgb(32, 35, 41);
    border: none;
    font-weight: 900;
    z-index: 1;
    font-size: 5.625rem;
}

.mt-4 {
    margin-top: 4em;
}
</style>
