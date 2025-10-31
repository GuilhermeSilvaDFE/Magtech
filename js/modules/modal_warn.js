
export default function modalWarn(warnType, descript, somType, volume){
    let warn = document.createElement("div")
    warn.classList.add("modal-warn")
    warn.innerHTML = `
    <img width="30" class="modal-warn__type" src="${warnType}">
    <p class="modal-warn__descript">${descript}</p>
    `
    
    document.querySelector("header").appendChild(warn)

    // Criando objetos de som
    const som = new Audio(somType);
    
    som.volume = volume || 1


    // Funções para tocar o som
    function tocarSom() {
        som.currentTime = 0; // volta para o início
        som.play();
    }



    tocarSom()
    

    setTimeout(()=>{
         document.querySelector("header").removeChild(warn)
    },4000)

}

