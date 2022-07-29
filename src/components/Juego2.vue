<template>
  <div v-if="victoria" id="victoria">
    <img src="../assets/congratulations.gif" alt="No hay la imagen" />
    <h2>Felicitaciones has ganado un total de $10.000.000</h2>
  </div>
  <div v-if="derrota" id="victoria">
    <h2>Has perdido :C vuelve a intentarlo!</h2>
  </div>
  <div v-if="verJuego" id="Todo">
    <table>
      <tr>
        <td>
          <label for="Puntaje">Puntaje: </label>
          <label for="Puntaje Numero">{{ puntaje }}</label>
        </td>
        <td></td>
        <td>
          <label for="Puntaje">Intento: </label>
          <label for="Puntaje Numero">{{ intento }}</label>
        </td>
      </tr>
      <tr>
        <td>
          <img :src="imagenFuente()" alt="No se encuentra la imagen" />
        </td>
        <td>
          <img :src="imagenFuente1()" alt="No se encuentra la imagen" />
        </td>
        <td>
          <img :src="imagenFuente2()" alt="No se encuentra la imagen" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="imagen1">{{ nombre1 }}</label>
        </td>
        <td>
          <label for="imagen2">{{ nombre2 }}</label>
        </td>
        <td>
          <label for="imagen2">{{ nombre3 }}</label>
        </td>
      </tr>
    </table>
    <div>
      <button v-on:click="obtenerPokemonsB">Jugar</button>
    </div>
  </div>
  <button v-on:click="reiniciarJuego">Nuevo Juego</button>
</template>

<script>
import obtenerPokemons from "../helpers/metodosJuego.js";
export default {
  data() {
    return {
      puntaje: 0,
      intento: 0,
      imagen1: null,
      imagen2: null,
      imagen3: null,
      nombre1: "XXXXXXXX",
      nombre2: "XXXXXXXX",
      nombre3: "XXXXXXXX",
      NoestaJugando: true,
      array: [],
      verJuego: true,
      victoria: false,
      derrota: false,
      textoBoton: "JUGAR",
    };
  },
  methods: {
    async obtenerArregloPokemons() {
      this.array = await obtenerPokemons();
    },
    incrementarPuntaje() {
      if (
        this.array2[0] == this.array2[1] ||
        this.array2[0] == this.array2[2] ||
        this.array2[1] == this.array2[2]
      ) {
        this.puntaje = this.puntaje + 2;
      }
      if (
        this.array2[0]== this.array2[1] &&
        this.array2[0] == this.array2[2]
      ) {
        this.puntaje = this.puntaje + 3;
      }
    },
    reiniciarJuego() {
      (this.puntaje = 0),
        (this.intento = 0),
        (this.imagen1 = null),
        (this.imagen2 = null),
        (this.imagen3 = null),
        (this.nombre1 = "XXXXXXXX"),
        (this.nombre2 = "XXXXXXXX"),
        (this.nombre3 = "XXXXXXXX"),
        (this.NoestaJugando = true),
        (this.array = []),
        (this.verJuego = true);
      (this.victoria = false), (this.derrota = false);
    },
    async obtenerPokemonsB() {
      if (this.puntaje >= 10) {
        this.verJuego = false;
        this.victoria = true;
        this.derrota = false;
      }
      if (this.intento >= 5) {
        this.verJuego = false;
        this.derrota = true;
        this.victoria = false;
      }
      const arrayR = await obtenerPokemons();
      this.array2[0]= arrayR[0].id;
      this.array2[1]= arrayR[1].id;
      this.array2[2] = arrayR[2].id;
      this.nombresP[0] = arrayR[0].nombre;
      this.nombresP[1] = arrayR[1].nombre;
      this.nombresP[2] = arrayR[2].nombre;
      console.log(arrayR)
      
      this.NoestaJugando = false;
      this.cambiarNombres();
      this.incrementarPuntaje();
      this.intento += 1;
    },
    cambiarNombres() {
      this.nombre1 = this.nombresP[0];
      this.nombre2 = this.nombresP[1];
      this.nombre3 = this.nombresP[2];
    },
    imagenFuente() {
      if (this.NoestaJugando == true) {
        return require("../assets/fondonegro.jpg");
      } else {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.array2[0]}.svg`;
      }
    },
    imagenFuente1() {
      if (this.NoestaJugando == true) {
        return require("../assets/fondonegro.jpg");
      } else {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.array2[1]}.svg`;
      }
    },
    imagenFuente2() {
      if (this.NoestaJugando == true) {
        return require("../assets/fondonegro.jpg");
      } else {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.array2[2]}.svg`;
      }
    },
  },
  props: {
    array2: {
      type: Array,
      required: true,
    },
    nombresP: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
img {
  width: 200px;
  height: 200px;
  margin: 20px;
}
table {
  margin: auto;
}
button {
  margin-top: 25px;
  width: 150px;
  height: 25px;
}
#Todo {
  align-items: center;
}
</style>