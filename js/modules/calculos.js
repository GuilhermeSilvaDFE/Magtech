import modalWarn from "./modal_warn.js"

let profiles = JSON.parse(localStorage.getItem("profiles"))
let currentProfileName = localStorage.getItem("current-profile")


let  currentProfile =  profiles.find(el => el.userName == currentProfileName)


const btn_processar =  document.querySelector(".btn-processar-calculo")


export function montarObjValues(){
    let cons =  document.querySelectorAll(".modalFormula .constantes")
        
        let objOfConstates = {
            typeFormula: document.querySelector(".modalFormula .formulas").getAttribute("data-type-formula"),
        }
        cons.forEach((con)=>{

          let constLetter = con.querySelector(".letter")
            
          
          let valueQuest = con.querySelector(".values-quest")
          let value = null


          if(valueQuest){
                value = valueQuest
          }else{
            value = null 
          }

          objOfConstates[constLetter.textContent == "2"? "two": constLetter.textContent ] = value == null? value : value.textContent

          
          
          console.log(objOfConstates)
          
        })
        return objOfConstates
}

function resolver(valores, type) {
    let variavelFaltando = Object.keys(valores).find(k => valores[k] === null);
    const formulaSolenoide = 'B = μ0 * N * I';
    const formulaEspiraCircular = 'B = (μ0*N*I)/(2*R)';
    const formulaBobinaChata = 'B = (μ0*I)/(2*R)';
    const formulaFioCondutor = 'B = (μ0*I)/(2*pi*R)';

    

    if (type == "fio-condutor"){
      let eq =  formulaFioCondutor
      valores.μ0 = "4*pi*e-7"
      
      if(valores.B == "4 · 10-6"){ valores.B = "4*e-6", console.log(valores.B)}

      console.log(valores)

      Object.entries(valores).forEach(([key, val]) => {
          if (val !== null) eq = eq.replace(new RegExp(`\\b${key}\\b`, 'g'), `(${val})`);
      });

      return nerdamer.solve(eq, variavelFaltando).toString();

    }

    if (type == "bobina-chata"){
      let eq =  formulaBobinaChata
      valores.μ0 = "4*pi*e-7"
      console.log(valores)

      Object.entries(valores).forEach(([key, val]) => {
          if (val !== null) eq = eq.replace(new RegExp(`\\b${key}\\b`, 'g'), `(${val})`);
      });

      return nerdamer.solve(eq, variavelFaltando).toString();

    }
    
    if (type == "espira-circular"){
      let eq =  formulaEspiraCircular
      valores.μ0 = "4*pi*e-7"
      console.log(valores)

      Object.entries(valores).forEach(([key, val]) => {
          if (val !== null) eq = eq.replace(new RegExp(`\\b${key}\\b`, 'g'), `(${val})`);
      });

      return nerdamer.solve(eq, variavelFaltando).toString();

    }

    if(type == "solenoide"){
      let eq = formulaSolenoide;
      if(valores.N !== null){ valores.N += `/${valores.L}`}
      valores.μ0 = "4*pi*e-7"

      if(valores.B == "5π · 10-4"){ valores.B = "5*pi*e-4"}
      
    

      Object.entries(valores).forEach(([key, val]) => {
          if (val !== null) eq = eq.replace(new RegExp(`\\b${key}\\b`, 'g'), `(${val})`);
      });

      return nerdamer.solve(eq, variavelFaltando).toString();
    }

}




btn_processar.addEventListener("click",()=>{
        
    
    let objOfConstates = montarObjValues()

     
  

    const resultado = resolver( objOfConstates, objOfConstates.typeFormula)
    console.log(resultado);

    
    
    var isResolved = false
    currentProfile.data.forEach((dt)=>{
      if(dt.resposta == resultado){
          document.querySelector(".section-display-formulas").innerHTML = dt.calculos

          dt.resolved = true
          profiles[currentProfile.position] = currentProfile
          localStorage.setItem("profiles", JSON.stringify(profiles))

          btn_processar.textContent = "processado"
         
          modalWarn("../img/icon-corret.png", "Parabéns! Certa resposta!", "../sounds/victory.mp3", 1)

          let buttonsOfModal = document.querySelectorAll(".section-opitions-conteiner button")
          
          document.querySelector(".btn-Inlustração").removeAttribute("id")

          buttonsOfModal.forEach((btn)=>{
            if(!Array.from(btn.classList).find(clas => clas == "btn-processar-calculo")){
              
              if(!Array.from(btn.classList).find(clas => clas == "btn-Inlustração")){
                btn.setAttribute("id", "is-not-visible")
              }
              
            }
            
          })
        
        isResolved = true
        return
      }
    })
    if(!isResolved){
      modalWarn("../img/icon-error.png", "Hô🤔,  Você🫵 errou!", "../sounds/error.mp3", 1)
    }
    
    

   
})

