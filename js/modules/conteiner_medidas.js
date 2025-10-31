
export default function createConteinerMedidas(){
    let conteiner = document.createElement("span")
    conteiner.className = "conteiner-medidas"
    conteiner.innerHTML = `
        <span  class="title">converter:</span>
        <span  class="medidas  cm">cm</span>
        <span  class="medidas  m">m</span>
    `
    return conteiner
}