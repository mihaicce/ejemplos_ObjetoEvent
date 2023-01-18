const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

// input.addEventListener('keyup', (event) =>{
// console.log(event)
// })

// addEventListener('click', (event) =>(
//     console.log(event)
// ))

// Propriedades del Evento 

// button.addEventListener('click', (event) =>{
//     console.log(event.target)
//     })

//const gallery = document.getElementById('gallery')
//gallery.addEventListener("click", (event) =>{
    //console.log(event.target)
     //console.log(event.target.classList.add("red"))
//})


//Ejemplo de prevent default

const link = document.getElementById("link")

link.addEventListener("click", (event) => {
    event.preventDefault();
})

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     console.log("El Formulario se ha enviado")
// })