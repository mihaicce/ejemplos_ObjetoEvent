 const form = document.getElementById('form')
 const input = document.getElementById('input')
 const button = document.getElementById('button')

// OBJETO EVENT -mostrar el evento

    input.addEventListener('keyup', (event) =>{
    console.log(event)
    })


  // addEventListener('click', (event) =>(
  //     console.log(event)
  // ))

// Propriedades del Evento .type = tipo de evento
//                         .is trusted

// button.addEventListener('click', (event) =>{
//     console.log(event.target)
//     })

//GALLERY

// const gallery = document.getElementById('gallery')
// gallery.addEventListener("click", (event) =>{
//     console.log(event.target)
//     console.log(event.target.classList.add("red"))
// })


//Ejemplo de prevent default

// const link = document.getElementById("link")

// link.addEventListener("click", (event) => {
//     event.preventDefault();
// })

//   form.addEventListener("submit", (event) => {
//       event.preventDefault()
//       console.log("El Formulario se ha enviado");
//   })


//TIMESTAMP

// let mihai = document.getElementById("button");
// let bla = document.getElementById("button2");
// let datoTime;

// mihai.addEventListener("click", (event) => {
  
//     let caja=document.getElementById("d");


    
//     if (datoTime){
//         console.log((event.timeStamp-datoTime/1000));
//         caja.innerHTML=caja.innerText+"  DIFERENCIA  " + String(event.timeStamp-datoTime/1000)

//         datoTime=event.timeStamp; 
//     }
//     else {
//         caja.innerHTML=caja.innerText+"  tiempo de primer click  " + event.timeStamp
//         console.log(event.timeStamp)
//         datoTime=event.timeStamp
//     };
// })

// bla.addEventListener("click", (event) => {
   

//     let caja=document.getElementById("d");
//     caja.innerHTML=caja.innerText+"  tiempo de segundo click  " + event.timeStamp

//     console.log(event.timeStamp)
// })

