export function Shuffle(array) {
  // Copiamos el arreglo original para no modificarlo directamente
  const shuffledArray = array.slice();

  // Función de orden personalizada que devuelve un valor aleatorio entre -0.5 y 0.5
  function compareRandom() {
    return Math.random() - 0.5;
  }

  // Aplicamos la función de orden personalizada para desordenar el arreglo
  let rpt = shuffledArray.sort(compareRandom);

  return rpt;
}





/* export function Shuffle(arreglo){
  let rpt = arreglo.sort();
  return rpt;
} */

/* for(let i =0;i<arreglo.length;i++){
    let j = Math.floor(Math.random()*(arreglo.length-1))
    let tmp = arreglo[i]         
    arreglo[i] = arreglo[j]
    arreglo[j]= tmp
  } */

  /* function shuffleArray(array) {
  // Copiamos el arreglo original para no modificarlo directamente
  const shuffledArray = array.slice();

  // Función de orden personalizada que devuelve un valor aleatorio entre -0.5 y 0.5
  function compareRandom() {
    return Math.random() - 0.5;
  }

  // Aplicamos la función de orden personalizada para desordenar el arreglo
  shuffledArray.sort(compareRandom);

  return shuffledArray;
} */