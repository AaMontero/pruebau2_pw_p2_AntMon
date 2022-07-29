<template>
  <Juego2 :array2 ="idImagenes" :nombresP ="nombresPokemon" ></Juego2>
</template>

<script>
import Juego2 from './Juego2.vue'
import obtenerPokemons from "../helpers/metodosJuego.js";
export default {
    data() {
        return{
            idImagenes:[],
            nombresPokemon:[]
        }
    },components:{
        Juego2
    }
    ,methods:{
        async obtenerImagenesyNombres(){
            const arreglo = await obtenerPokemons();
            this.nombresPokemon.push(arreglo[0].nombre);
            this.nombresPokemon.push(arreglo[1].nombre);
            this.nombresPokemon.push(arreglo[2].nombre);
            console.log(this.nombresPokemon)
            this.idImagenes.push(arreglo[0].id); 
            this.idImagenes.push(arreglo[1].id); 
            this.idImagenes.push(arreglo[2].id); 
            console.log(this.idImagenes)
        },

    },
    mounted(){
        this.obtenerImagenesyNombres();
    }
}
</script>

<style>

</style>