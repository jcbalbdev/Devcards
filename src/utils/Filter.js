import listacards from '../config/listacards.json'

export function Filtrando(valor){
  const filtro = listacards.filter((elem)=>(elem.iconcard===valor))
  console.log(filtro) ;
  return filtro;
}


