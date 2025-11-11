let profiles = JSON.parse(localStorage.getItem("profiles"))
let currentProfileName = localStorage.getItem("current-profile")
let btn_processar =  document.querySelector(".btn-processar-calculo")

let  currentProfile =  profiles.find(el => el.userName == currentProfileName)



for (let el of currentProfile.data) {
    if(localStorage.getItem("quest-number") == el.id){
        document.querySelector(".number-quest span").textContent = el.id
        document.querySelector(".quest-statement").innerHTML += el.statements
        document.querySelector(".modal-inlustration__img").src = el.inlustration
        
        


        if(el.resolved){
            document.querySelector(".section-display-formulas").innerHTML = el.calculos
            btn_processar.textContent = "processado"

            document.querySelector(".btn-Inlustração").removeAttribute("id")

            let buttonsOfModal = document.querySelectorAll(".section-opitions-conteiner button")
            buttonsOfModal.forEach((btn)=>{
            if(!Array.from(btn.classList).find(clas => clas == "btn-processar-calculo")){
              
              if(!Array.from(btn.classList).find(clas => clas == "btn-Inlustração")){
                btn.setAttribute("id", "is-not-visible")
              }
              
            }
            
          })
        }
    }
}

