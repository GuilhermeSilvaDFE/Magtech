import createBackButtom from "./back-page_btn.js"
import createModalProfile from "./modal_profile.js"


export default function createHeader (){
  let header = document.createElement("header")
  header.className = "header"
  header.innerHTML = `
        <div class="header-content">
          <div class="logos">
            <h2>MAGTECH</h2>
          </div>
          <div class="logos"> 
              <div class="img"></div>
          </div>
          <div class="logos"> 
            <div>
              <div class="img"></div>
              <spam>INSTITUTO FEDERAL <br> MARANHÃO</spam>
            </div>
          </div>
          <div class="logos"> 
              <div class="img"></div>
          </div>
          <div class="perfil logos"> 
            <span class="perfil__wrapper has-tooltip"  data-tooltip="ver perfil.">
              <span class="perfil__letter"></span>
            </span>
          </div>
        </div>
  ` 
  header.appendChild(createBackButtom())
  document.body.insertBefore(header,document.querySelector("main"))
  createModalProfile(header.querySelector(".perfil__wrapper"), header.querySelector(".header-content"))
}
  

