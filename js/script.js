const cclose = document.querySelector(".close")
const box = document.querySelector(".box-head")
const menu1 = document.querySelector(".menu1")
const menu2 = document.querySelector(".menu2")
const menu3 = document.querySelector(".menu3")


cclose.onclick = () =>{
    box.classList.toggle("active")
}

menu1.onclick = () =>{
    menu1.classList.toggle("active")
}
menu2.onclick = () =>{
    menu2.classList.toggle("active")
}
menu3.onclick = () =>{
    menu3.classList.toggle("active")
}

