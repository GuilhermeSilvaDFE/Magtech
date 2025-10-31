export default function createFooter (){
    let footer = document.createElement("footer")
    footer.className = "footer"
    footer.innerHTML = `
             <p>São Luís-ma <br> 2025 <br> todos os direitos reservados.</p>
    `
    
    document.body.appendChild(footer)

}