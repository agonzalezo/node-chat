var socket = io();
let boton = document.getElementById("boton");
let texto = document.getElementById("texto");
let mensajes = document.getElementById("mensajes");
let cantidad = document.getElementById("cantidad");
let nickbtn = document.getElementById("nickbtn");
let nick  = document.getElementById("nickname");
let mynick;
let newtext;
let total_users;

//#region Show modal
document.getElementById("nickname").focus();
document.getElementById("launchmodal").click();

nickbtn.addEventListener("click",login)
boton.addEventListener("click", enviar);

function login(evt){
  mynick = nick.value;
  nick.value=null;
  // texto.focus();
  document.getElementById("btnclose").click();
}

function enviar(evento) {
  newtext = document.createTextNode("Me: " + texto.value);
  let newli = document.createElement("p");
  newli.setAttribute("class", "mymessage");
  newli.appendChild(newtext);
  mensajes.appendChild(newli);
  socket.emit("frontmessage", texto.value, mynick);
  mensajes.scrollTop=500;
  texto.value=null;
}

socket.on("backendmessage", (data) => {
  const nombre = data.nickname.toUpperCase();
  newtext = document.createTextNode(`${nombre}: ${data.data}`);
  let newli = document.createElement("p");
  newli.setAttribute("class", "othermessage");
  newli.appendChild(newtext);
  mensajes.appendChild(newli);
  mensajes.scrollTop=500;
});

socket.on("alluser", (data) => {
    console.log(`Cantidad de usuarios conectados ${data}`)
  cantidad.innerText=`Total Users ${data}`;
});

document.onkeypress= (e)=>{
 console.log(e.key); 
}


//#region Performance region
texto.onkeypress=(key)=>{
  if (key.key == 'Enter') {
    console.log('undio enter');
    boton.click();
  }
}

nick.onkeypress=(key)=>{
  if (key.key== 'Enter' && nick.value != ""){
    nickbtn.click();
  }
}