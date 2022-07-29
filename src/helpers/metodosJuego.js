//Hace una llamada al API y devuelve un pokemon 
const obtenerPokemon = async(id) => {
    const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      ).then((r) => r.json()); 
      return data
}

//Obtiene un numero aleatorio 
const getNumeroAleatorio = (min, max) =>{
    return  Math.floor(Math.random()* (max-min) + min) 
}
//Construye un vector de 5 con numeros hasta el 600
const construirVectorNumerosP = () => {
    const arregloPokemonsNumero = [getNumeroAleatorio(1, 600)
        ,getNumeroAleatorio(1, 600),getNumeroAleatorio(1, 600),getNumeroAleatorio(1, 600),getNumeroAleatorio(1, 600)]
    return arregloPokemonsNumero
}
//Construye un arreglo de 3 con numeros hasta el 4 
const construirVectorNumerosA = () => {
    const arregloIndices = [getNumeroAleatorio(0, 5)
        ,getNumeroAleatorio(0, 5),getNumeroAleatorio(0, 5)]
    return arregloIndices 
}
//Metodo que me toma los 3 valores y los busca en el de 5
const obtenerNumeros = (arrayI, arrayP) => {
    const arrayF = []
    for (let index = 0; index < arrayI.length; index++) {
        arrayF.push(arrayP[arrayI[index]])
        }
    return arrayF; 
}
//Devuelve un array de 3 con los numeros entre los 5 
const idPokemostres = () =>{
    const arrayP = construirVectorNumerosP();
    const arrayA = construirVectorNumerosA();
    return obtenerNumeros(arrayA,arrayP);
}
//Obtiene a los 3 pokemones
const convertirVectorNombres = async([p1,p2,p3] = []) => {
    const data1 = await obtenerPokemon(p1)
    const data2 = await obtenerPokemon(p2)
    const data3 = await obtenerPokemon(p3)
    return [{nombre: data1.name, id: data1.id},
        {nombre: data2.name, id: data2.id},
        {nombre: data3.name, id: data3.id}]

}
//Metodo Fachada
const obtenerPokemons = () =>{
    return obtenerPokemonArray(); 
}
//Metodo Final - Retorna un array 
const obtenerPokemonArray = () =>{
    return convertirVectorNombres(idPokemostres())
}


export default obtenerPokemons; 
