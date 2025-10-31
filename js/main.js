import createHeader from "./modules/header.js";
createHeader()






export function setProfile(parentUserProfile){
    
    let profiles = JSON.parse(localStorage.getItem("profiles"))
    
    if (profiles) {
        const userProfile = parentUserProfile.querySelector(".perfil__letter")
        const currentProfileName = localStorage.getItem("current-profile")
        const currentProfile =  profiles.find(el => el.userName == currentProfileName)
        
        userProfile.closest(".perfil__wrapper").style.backgroundColor= currentProfile.randomColor
        userProfile.setAttribute("data-name-perfil", currentProfileName )
        userProfile.textContent = currentProfileName[0].toLocaleUpperCase()
        
    }
   
}

setProfile(document)


import createFooter from "./modules/footer.js";
createFooter()

import nextAndBack from "./modules/btn-carousel.js";
nextAndBack()


import dataBase from "./db_quest_statement.js";
dataBase()









