export default function nextAndBack(){
    let btnNext = document.querySelector(".btn-next")
    let btnBack = document.querySelector(".carousel__btn-back")
    let wraper = document.querySelector(".wraper")
    

    
    btnNext.addEventListener("click",()=>{
        
        wraper.style.marginLeft = "-100%"
    })

    btnBack.addEventListener("click",()=>{
        console.log("ddd")
        wraper.style.marginLeft = "0"
    })

    
}