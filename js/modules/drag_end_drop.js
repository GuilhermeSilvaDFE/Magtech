
import Sortable from "https://cdn.jsdelivr.net/npm/sortablejs@latest/modular/sortable.esm.js";
import {montarObjValues} from "./calculos.js";

export default function DoDragAndDrop(){
    const zones = document.querySelectorAll(".zone")
    zones.forEach((zone)=>{
        new Sortable(zone, {
            group: 'shared',  // mesmo grupo → permite arrastar entre eles
            animation: 150 ,   // animação suave

             // quando o item entra em um novo contêiner
            onAdd: function (evt) {
                console.log("Item adicionado em:", evt.to);     // destino
                console.log("Item removido de:", evt.from);     // origem
                console.log("Elemento movido:", evt.item);      // o próprio elemento
                let values = Object.entries(montarObjValues())
                

                document.querySelector(".dados").innerHTML = ""
                let incognita
                values.forEach((arr)=>{
                    if ((arr[0] != "two") && (arr[0] != "typeFormula") && (arr[0] != "π") && (arr[1] != null)) {
                        document.querySelector(".dados").innerHTML +=`
                             <span class="button-style">${arr[0]} = ${arr[1]}</span>
                         ` 
                    }
                    
                    if ((arr[0] != "two") && (arr[0] != "typeFormula") && (arr[0] != "π") && (arr[1] == null)){
                        incognita = arr[0]
                    }
                })

                document.querySelector(".formula-wrapper").setAttribute("data-incognita", incognita)
               

                function itemAdded(){
                    const  conteinerFinal = evt.to
                    conteinerFinal.setAttribute("id","is-added")
                  
                }

                function itemRemoved(){
                    const conteinerInicial = evt.from
                    conteinerInicial.removeAttribute("id")


                    
                }

                
                itemAdded()
                itemRemoved()
                
                
            },

            
            

            
        });
        
    })

   

}