var socket = io();
let boton = document.getElementById("boton");
let texto = document.getElementById("texto");
let mensajes = document.getElementById("mensajes");
let cantidad = document.getElementById("cantidad");
let newtext;
let total_users;
//#endregion

boton.addEventListener("click", enviar);

function enviar(evento) {
  console.log("clickeado");
  newtext = document.createTextNode("Me: " + texto.value);
  let newli = document.createElement("p");
  newli.setAttribute("class", "mymessage");
  newli.appendChild(newtext);
  mensajes.appendChild(newli);
  socket.emit("frontmessage", texto.value);
  texto.value=null;
}

socket.on("backendmessage", (data) => {
  console.log(`other say {${data}}`);
  newtext = document.createTextNode(`Other : ${data.data}`);
  let newli = document.createElement("p");
  newli.setAttribute("class", "othermessage");
  newli.appendChild(newtext);
  mensajes.appendChild(newli);
});

socket.on("alluser", (data) => {
    console.log(`Cantidad de usuarios conectados ${data}`)
  cantidad.innerText=data;
});

document.onkeypress= (e)=>{
 console.log(e.key); 
}