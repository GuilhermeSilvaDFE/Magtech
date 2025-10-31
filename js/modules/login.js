import dataBase from "../db_quest_statement.js"
import modalWarn from "./modal_warn.js"
let db = dataBase()



   
const btnInit = document.querySelector(".btn-init")
const modalLogin = document.querySelector(".modal-login")
const btnClose = document.querySelector(".modal-login__btn-close")
const inputRegistrarProfile = document.querySelector(".input-registrar")
const inputLoginProfile = document.querySelector(".input-login")
const btnRegistrarProfile = document.querySelector(".btn-registrar")
const btnLoginProfile = document.querySelector(".btn-login")
const toggleToLogin = document.querySelector(".toggle-to-login")
const toggleToRegistrar = document.querySelector(".toggle-to-registrar")
const sectionLogin = document.querySelector(".modal-login__login")
const sectionRegistrar = document.querySelector(".modal-login__registrar")


function formatInputValue(value){
    value = value.toLowerCase()
    value = value.replaceAll(" ", "")

    return value
}


//modal---------------------------------
btnInit.addEventListener("click", ()=>{
    modalLogin.showModal()
})

btnClose.addEventListener("click", ()=>{
    modalLogin.close()
})

toggleToLogin.addEventListener("click", ()=>{
    sectionLogin.removeAttribute("id")
    sectionRegistrar.setAttribute("id", "is-hided")
})

toggleToRegistrar.addEventListener("click", ()=>{
    sectionRegistrar.removeAttribute("id")
    sectionLogin.setAttribute("id", "is-hided")
})

//criar novo profile---------------------
function createNewProfile(){
    let profiles = JSON.parse(localStorage.getItem("profiles") || "[]") 
    let inputNameValue = inputRegistrarProfile.value

    inputNameValue =  formatInputValue(inputNameValue)
    
    
   
    
    if (inputRegistrarProfile.value) {
        let userDetect = null
        profiles.forEach(user => {
            if(user.userName == inputNameValue){
            
                modalWarn("img/warning.png", "Você já estar registrado. Por favor, faça login em 'Já havia se registrado? click aqui.'","sounds/error.mp3", 1)
                userDetect = true
            }
        })

        if(!userDetect){
             profiles[profiles.length] = {
                userName: inputNameValue,
                userNameView: inputRegistrarProfile.value,
                position: profiles.length,
                randomColor:'#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0'),
                data: db
            }

            inputRegistrarProfile.value = ""
            modalWarn("img/warning.png", "Parabéns! você foi registrado com sucesso.", "sounds/victory.mp3", 1)

            localStorage.setItem("profiles", JSON.stringify(profiles))
        }
       
    }else{
        modalWarn("img/warning.png", "Criatura🧐. Digite seu nome!!!" ,"sounds/error.mp3", 1)
    }

  
   
}

btnRegistrarProfile.addEventListener("click", ()=>{
    
    createNewProfile()
    
})

//carregar profile---------------------
function loadProfile(){
    let profiles = JSON.parse(localStorage.getItem("profiles") || "null")
    
    if(!profiles){
        alert("Usuário não encontrado.")
        return
    }

    

    if (inputLoginProfile.value) {
        let inputNameValue = inputLoginProfile.value
        inputNameValue =  formatInputValue(inputNameValue)
        let detect = null
        
        profiles.forEach(user => {
            if(user.userName == inputNameValue){
                localStorage.setItem("current-profile", user.userName)

                inputLoginProfile.value = ""
                if (modalLogin.open) { modalLogin.close()}
                

                window.location.href = "pages/home.html";
            
                modalWarn("img/warning.png", "Bem vindo de volta.", "sounds/victory.mp3", 1)
                detect = true
            }
        })
        if(!detect){
            modalWarn("img/warning.png", "Você não estar registrado. Por favor, registri-se primeiro.", "sounds/error.mp3", 1)
        }
        
    } else {
        modalWarn("img/warning.png", "Criatura🧐. Digite seu nome!!!","sounds/error.mp3", 1)
    }
    
}

btnLoginProfile.addEventListener("click", ()=>{
    loadProfile()
    
})

