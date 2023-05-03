const inputInfo1 = document.querySelector("#info-entrada");
const inputInfo2 = document.querySelector("#info-edad");
const inputInfo3 = document.querySelector("#info-email");
const inputInfo4 = document.querySelector("#info-dni");


const Resultado1 = document.querySelector("#resultado-1");
const Resultado2 = document.querySelector("#resultado-2");
const Resultado3 = document.querySelector("#resultado-3");
const Resultado4 = document.querySelector("#resultado-4");
const Resultado5 = document.querySelector("#resultado-5");
const Resultado6 = document.querySelector("#resultado-6");
const Resultado7 = document.querySelector("#resultado-7");
const Resultado8 = document.querySelector("#resultado-clave-secreta");

const cuerpoPagina = document.querySelector("body");
const imagen1 = document.querySelector("#imagen1");
const imagen2 = document.querySelector("#imagen2");
const imagen3 = document.querySelector("#imagen3");

const inputInfo5 = document.querySelector("#clave-secreta");

const IMG_1 = "https://pbs.twimg.com/media/E2GkieqWEAI_eoJ.jpg";
const IMG_2 = "https://images.ecestaticos.com/0qSp1YaY7xqz8TMaFH8_-dW-Utc=/0x0:2272x1514/1200x675/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F7dc%2F4a7%2F141%2F7dc4a7141426d7264a57c686dfc781db.jpg";
const IMG_3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6g_CMffUhxNtdO4FRySTwdt4gpoznRmZKw&usqp=CAU"; 

const COLOR_DE_FONDO = "#0d1117";
const TXT_DE_PAGINA = "#e6edf3";
const TXT_DE_FUENTE = "monospace";
const TXT_DE_COLOR = "yellow";
const IMG_TAMAÑO_1 = "400px";
const IMG_TAMAÑO_2 = "350px";

const MAYOR_DE_EDAD = 18;
const CLAVE_SECRETA = "jacunamatata";

let usuarioIngresado = "def usuario";
let edadIngresado = "def edad";
let emailIngresado = " def email";
let dniIngresado = "def dni";

let usuarioClaveSecreta = "def clave"; 

cuerpoPagina.style.backgroundColor = COLOR_DE_FONDO;
cuerpoPagina.style.color = TXT_DE_PAGINA;

function recibiTuInfo() {
    
imagen1.src = IMG_1;
imagen1.style. width = IMG_TAMAÑO_1;
imagen1.style. higth = IMG_TAMAÑO_2;
    Resultado1.style.frontFamily = TXT_DE_FUENTE;
    Resultado2.style.frontFamily = TXT_DE_FUENTE;
    Resultado3.style.frontFamily = TXT_DE_FUENTE;
    Resultado4.style.frontFamily = TXT_DE_FUENTE;
    Resultado5.style.frontFamily = TXT_DE_FUENTE;
    Resultado6.style.frontFamily = TXT_DE_FUENTE;
    Resultado7.style.frontFamily = TXT_DE_FUENTE;
    
    Resultado1.style.color = TXT_DE_COLOR;
    Resultado2.style.color = TXT_DE_COLOR;
    Resultado3.style.color = TXT_DE_COLOR;
    Resultado4.style.color = TXT_DE_COLOR;
    Resultado5.style.color = TXT_DE_COLOR;
    Resultado6.style.color = TXT_DE_COLOR;
    Resultado7.style.color = TXT_DE_COLOR;

    usuarioIngresado = inputInfo1.value;
    Resultado1.innerHTML = "Bienvenido:" + usuarioIngresado;
    edadIngresado = inputInfo2.value;
    Resultado2.innerHTML = "EDAD:" + edadIngresado;
    emailIngresado = inputInfo3.value;
    Resultado3.innerHTML = "EMAIL:" + emailIngresado;
    dniIngresado = inputInfo4.value;
    Resultado4.innerHTML = "DNI:" + dniIngresado;
    
   if ((edadIngresado >= MAYOR_DE_EDAD)) {
       Resultado7.innerHTML="Eres mayor de edad";
    
   } else {
    Resultado7.innerHTML ="Eres menor de edad";
   }
}

function recibiTuInfo2() {
    usuarioClaveSecreta = inputInfo5.value;

  if (usuarioClaveSecreta == CLAVE_SECRETA) {
    Resultado8.innerHTML = "Clave secreta (jacunamatata) correcta";
    imagen2.src = IMG_2;

  } else {
        Resultado8.innerHTML = "Clave secreta incorrecta";
        Resultado8.style.color = "red";
        imagen3.src = IMG_3;   
  }
}
   

   