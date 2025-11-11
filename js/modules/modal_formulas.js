
import DoDragAndDrop from "./drag_end_drop.js"



   
    const buttonModal = document.querySelector(".btn-select-formula")
        buttonModal.classList.add("button-style")
        buttonModal.innerHTML = `
            Selecionar fórmulas
        `
        buttonModal.addEventListener("click",()=>{
            const modalConteinerFormulas =  document.querySelector(".modal-conteiner-formulas")
            modalConteinerFormulas.querySelector(".conteiner-formulas").removeAttribute("id")
            modalConteinerFormulas.show()
            const isOpen = document.querySelector(".modalFormula").open
            if(isOpen){
                document.querySelector(".modalFormula").close()
                document.querySelector(".btn-enable-variables").setAttribute("id", "is-disabled")
                document.querySelector(".btn-adjust-measures").setAttribute("id", "is-disabled")
                window.location.href = "./quests.html";
            }
            
         
        })

    const buttonEnableVariables = document.querySelector(".btn-enable-variables")
        buttonEnableVariables.addEventListener("click", ()=>{
            document.querySelectorAll(".wraper-values-quest").forEach((wrap)=>{

                    if( wrap.getAttribute("data-enable") === "is-enabled"){
                        console.log("if")
                        wrap.removeAttribute("data-enable")
                    } else{
                        console.log("else")
                        wrap.setAttribute("data-enable", "is-enabled")
                        
                    }

                })
                
                
    })
     
    const btnInlustration = document.querySelector(".btn-Inlustração")
    const modalInlustration = document.querySelector(".modal-inlustration")
    const btnCloseInlustration = document.querySelector(".modal-inlustration__btn-close")
    
   

    btnInlustration.addEventListener("click", ()=>{
           
            modalInlustration.showModal()
                
    })
    btnCloseInlustration.addEventListener("click", ()=>{
           
            modalInlustration.close()
                
    })




    

//    function breakFocus(item, func){
//         let arrClass =  Array.from(item.classList)
//         let result = arrClass.find(clas => clas == "is-in-focus")
//         if(result){
//             item.classList.remove("is-clickable")
//             item.classList.remove("is-in-focus")
//             let conteinerMedidas = item.closest(".formulas").querySelector(".conteiner-medidas")
//             if(conteinerMedidas){
//                 item.closest(".formulas").removeChild(conteinerMedidas)
//             }
//             item.removeEventListener("click", func)
            
//             return true
//         }else{
//             return false
//         }
//     }     
//    function adjustMeasures(){
//        const btnAdjustMeasures = document.querySelector(".btn-adjust-measures")
//        btnAdjustMeasures.removeAttribute("id")

       

//        btnAdjustMeasures.addEventListener("click", ()=>{
//            let AdjustMeasuresOf = document.querySelector(".modalFormula").querySelectorAll(".constantes")
          

//            AdjustMeasuresOf.forEach((val)=>{
                
//                 let hasNumber = val.querySelector(".values-quest") == undefined? null: val.querySelector(".values-quest").textContent
//                 if((hasNumber !== null) && (hasNumber !== "π")){
//                     console.log(hasNumber)
//                     if(!isNaN(hasNumber[0])){
//                         if (!val._adicionarMedidas) {
//                             val._adicionarMedidas = function() {
//                                 val.closest(".formulas").appendChild(createConteinerMedidas());
                              
//                             };
//                         }
//                         if(!breakFocus(val, val._adicionarMedidas )){
//                             val.classList.add("is-clickable", "is-in-focus")
//                             val.addEventListener("click", val._adicionarMedidas )
                            
//                         }

                        
//                     }
//                 }
                
               
//            })
//        })
    
//    }
   

   const conteinerModal = document.createElement("dialog")
   conteinerModal.classList.add("modal-conteiner-formulas")
   conteinerModal.innerHTML =`
        
        <div  class="conteiner-formulas">
                    
            <div class="wrap-formulas"> 
                    <div class="formulas" data-type-formula="fio-condutor">
                        <div class="equal">
                            <div class="constantes caracteres"><span class="letter">B</spn></div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres"><span class="letter">μ0</span></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres"><span class="letter">I</span></div>
                        </div>
                        <div class="denominador">
                            <div class="constantes caracteres"><span class="letter values-quest">2</span></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres"><span class="letter values-quest">π</span></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres"><span class="letter">R</span></div>
                        </div>
                    </div>
            </div> 
            
            <div class="wrap-formulas"> 
                    <div class="formulas" data-type-formula="bobina-chata">
                        <div class="equal">
                            <div class="constantes caracteres"><span class="letter">B</spn></div>
                            <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres"><span class="letter">μ0</span></div>
                            <div class"caracteres">•</div>
                            <div class="constantes caracteres"><span class="letter">I</span></div>
                        </div>
                        <div class="denominador">
                            <div class="constantes caracteres"><span class="letter values-quest">2</span></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres"><span class="letter">R</span></div>
                        </div>    
                    </div>
            </div> 
            
            <div class="wrap-formulas"> 
                    <div class="formulas" data-type-formula="espira-circular"  id="is-modified">
                        <div class="equal">
                                <div class="constantes caracteres"><span class="letter">B</spn></div>
                                <div class="caracteres">=</div>
                        </div>
                        <div class="numerador"> 
                                <div class="constantes caracteres"><span class="letter">μ0</span></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres"><span class="letter">N</span></div>
                                <div class="caracteres">•</div>
                                <div class="constantes caracteres"><span class="letter">I</span></div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres"><span class="letter values-quest">2</span></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres"><span class="letter">R</span></div>
                        </div>
                        
                    
                    </div>
            </div> 
            
            <div class="wrap-formulas"> 
                    <div class="formulas" data-type-formula="solenoide" id="is-modified">
                    <div class="equal">
                            <div class="constantes caracteres"><span class="letter">B</spn></div> 
                            <div class="caracteres">=</div>
                    </div>
                        <div class="numerador"> 
                            <div class="constantes caracteres"><span class="letter">μ0</span></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres"><span class="letter">N</span></div>
                            <div class="caracteres">•</div>
                            <div class="constantes caracteres"><span class="letter">I</span></div>
                        </div>
                        <div class="denominador"> 
                            <div class="constantes caracteres"><span class="letter">L</span></div>
                        </div>
                    </div>
            </div> 

        </div>
        <dialog class="modalFormula">
            <div class="modalFormula__wrapper">
                <div class="formula-wrapper" data-incognita="?"></div>

                <div class="dados-formula">
                    <span class=" title-dados button-style">DADOS</span>
                    <div class="dados ">
                    </div>
                </div>
            </div>
                
        </dialog>
   
   `


   
    
   function  createModalFormulaInteractive (item){
        const modalOfAFormula = item.closest(".modal-conteiner-formulas").querySelector(".modalFormula")

        const formula = item.cloneNode(true)
        formula.querySelectorAll(".constantes").forEach((constante)=>{
            constante.classList.add("zone")
            
        })

    
        modalOfAFormula.querySelector(".formula-wrapper").innerHTML = formula.outerHTML
        modalOfAFormula.show()
        

        const hideModal = item.closest(".conteiner-formulas")
        hideModal.setAttribute("id","is-hided")

       
       
        DoDragAndDrop()
   }


    

    let wrapFormulas  = conteinerModal.querySelectorAll(".wrap-formulas")
    wrapFormulas.forEach((wrap)=>{
        wrap.addEventListener("click",()=>{
           createModalFormulaInteractive(wrap.querySelector(".formulas"))


            document.querySelector(".btn-enable-variables").removeAttribute("id")
            document.querySelector(".btn-enable-variables").removeAttribute("id")
            adjustMeasures()
        })
        
    })

    document.querySelector(".section-display-formulas").appendChild(conteinerModal)

   