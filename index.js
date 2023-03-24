
let numEL=document.getElementById("num-EL")
let sum=0

function rate(val,value) {
    sum=value
    val.classList.add("selected")
}
function submit(){
        document.querySelector(".container").classList.add("hide")
        document.querySelector(".main").classList.remove("hide")
        numEL.textContent=sum
}
