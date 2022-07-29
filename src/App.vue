<template>
<Pagina></Pagina>

</template>

<script>
import Juego from './components/Juego.vue'
import Pagina from './components/Pagina.vue'
export default {
  name: 'App',
  components: {
    Juego,
    Pagina
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
