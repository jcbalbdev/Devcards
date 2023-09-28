import {Filtrando} from './Filter'

export function ButtonFiltro(){
  const buttons = document.querySelectorAll('.buttonheader');
  buttons.forEach((button)=>{
  let valor = button.firstElementChild.getAttribute('src')
  button.addEventListener('click',()=>{
    
    Filtrando(valor);
  
    });
  })
}      
      
