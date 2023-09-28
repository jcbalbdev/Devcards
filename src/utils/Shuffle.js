
export function Shuffle(arreglo){
  for(let i =0;i<arreglo.length;i++){
    let j = Math.floor(Math.random()*(arreglo.length-1))
    let tmp = arreglo[i]         
    arreglo[i] = arreglo[j]
    arreglo[j]= tmp
  }
  return arreglo;
}