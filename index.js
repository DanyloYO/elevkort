function main() {
    const name = document.querySelector(".name").value 
    const age = document.querySelector(".age").value 
    const cls = document.querySelector(".cls").value 
    if (!name || !age || !cls) {
        return null
    }
    if(isNaN(age)){
        alert("Alder må være tall")
        return null
    }
    
    const elev = {
        name,
        age,
        cls,
    }
    return elev
}


const btn = document.getElementById("btn")
const modal = document.querySelector(".modal")
const lukk = document.getElementById("lukk")

btn.addEventListener("click",(e)=>{
    const elev = main()

    const dv = document.querySelector(".info")
    if(!elev) {
        dv.innerHTML = "Values" 
        modal.style.display = "none"

        return
    }

    console.log(`Имя ${elev.name}, Возраст: ${elev.age}, класс: ${elev.cls}`) 

    modal.style.display = "flex"
    dv.innerHTML = 
    `
    <h2>ELEVKORT</h2>

    <p><b>Navn:</b> ${elev.name}</p>
    <p><b>Alder:</b> ${elev.age}</p>
    <p><b>Class:</b> ${elev.cls}</p>

    <p class="tekst">${elev.name} går i ${elev.cls} og er ${elev.age} år</p>
    `
    

})

lukk.addEventListener("click",()=>{
    modal.style.display = "none"
})

modal.addEventListener("click",(e)=>{
    if(e.target === modal) {
        modal.style.display = "none"
    }
})
