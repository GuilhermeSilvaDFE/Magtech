
import { setProfile } from "../main.js"

export default function createModalProfile (btn, parent){
    let profiles = JSON.parse(localStorage.getItem("profiles") || "[]")
    let currentProfileName = localStorage.getItem("current-profile") || "*user indefinido!"
    let currentProfile =  profiles.find(el => el.userName == currentProfileName)
    
    
    let modalProfile = document.createElement("dialog")
    modalProfile.classList.add("modal-profile")
    modalProfile.innerHTML = `
    <button class="modal-profile__btn-close btn-back has-tooltip" data-tooltip="voltar" ><div class="img-btn-close"></div></button>
    <div class="modal-profile__wraper">
        <section class="modal-profile__main-profile"></section>
        <section class="modal-profile__profiles"></section>
    </div>`

    const btnClose = modalProfile.querySelector(".modal-profile__btn-close")
    const sectinProfiles = modalProfile.querySelector(".modal-profile__profiles")
    const sectionMainProfile = modalProfile.querySelector(".modal-profile__main-profile")

    //load profile in modal-profile__main-profile
    const perfil = document.querySelector(".perfil__wrapper").cloneNode(true)
    perfil.setAttribute("id","monst-priority")
    setProfile(perfil)

    let questsResolves = 0
    if(currentProfile){
        currentProfile.data.forEach(dt => {
        
            if(dt.resolved){questsResolves++}
            
       
        })

        sectionMainProfile.appendChild(perfil)
        sectionMainProfile.innerHTML += `
            <div class="profile-detalis">
                <p class="profile__name-user">${currentProfile.userNameView}</p>
                <span class="profile__number">questões: ${questsResolves}/12</span>
            <div>
        `
    }
    
    
    

    //load profiles in modal-profile__profiles

    profiles.forEach(user => {
        let questsResolves = 0
        user.data.forEach((dt)=>{
            if(dt.resolved){questsResolves++}
            
        })
        sectinProfiles.innerHTML += `
        <div class="profile-secundary">
            <span class="perfil__wrapper" style="background-color:${user.randomColor};">
              <span class="perfil__letter">${user.userName[0].toLocaleUpperCase()}</span>
            </span>
            <p class="profile__name-user">${user.userNameView}</p>
            <span class="profile__number">questões: ${questsResolves}/12</span>
        <div>`
    })

    //events
    btn.addEventListener("click", ()=>{
        modalProfile.showModal()
    })
    btnClose.addEventListener("click", ()=>{
        modalProfile.close()
    })
    
    parent.appendChild(modalProfile)


}