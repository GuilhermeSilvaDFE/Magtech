
export default function createBackButtom (){
    let buttom = document.createElement("buttom")
    buttom.classList.add("btn-back-page" , "btn-back", "has-tooltip")
    buttom.setAttribute("data-tooltip", "voltar página")
    buttom.innerHTML = `<div class="img-btn-close"></div>`
    buttom.addEventListener("click", (event)=>{
        event.preventDefault()
        window.history.back();
    })
    
    return buttom


}

