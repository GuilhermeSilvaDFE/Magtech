export default function createFooter (){
    let footer = document.createElement("footer")
    footer.className = "footer"
    footer.innerHTML = `
             <p>São Luís-ma  2025.  Todos os direitos reservados.</p>
    `
    
    document.body.appendChild(footer)

}