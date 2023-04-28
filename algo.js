const cuerpoPagina = document.querySelector("#body")
const nombreUsuario = document.querySelector("#usuario");
const pEdadUsuario = document.querySelector("#edadUsuario")
const edadUsuario = document.querySelector("#edad");
const pInfoUsuario = document.querySelector("#infoUsuario");
const emailUsuario = document.querySelector("#email")
const pEmailUsuario = document.querySelector("#emailUsuario")
const dniUsuario = document.querySelector("#dni");
const pDniUsuario = document.querySelector("#dniUsuario");
const imagenComienzo = document.querySelector("#imagenComienzo");
const imagenFinal = document.querySelector ("#imagenFinal")
const botonEnviar = document.querySelector("#boton");
const imgComienzo = "https://www.shutterstock.com/image-vector/spanish-language-vector-template-welcome-260nw-1792430023.jpg";
const imgfinal = "https://t1.uc.ltmcdn.com/es/posts/6/7/3/como_decorar_la_entrada_de_la_casa_segun_el_feng_shui_25376_orig.jpg";


document.body.style.backgroundColor = "#0d1117";
document.body.style.color = "#e6edf3";
imagenComienzo.src = imgComienzo;

function mensajeUsuario() {
    pInfoUsuario.innerHTML = ("Bienvenido a nuestra pagina " + nombreUsuario.value);
    pEmailUsuario.innerHTML = ("Su email es " + emailUsuario.value);
    pDniUsuario.innerHTML = ("Su dni es " + dniUsuario.value);
    pInfoUsuario.style.fontFamily = "monospace";
    pEdadUsuario.style.fontFamily = "monospace";
    pEmailUsuario.style.fontFamily = "monospace";
    pDniUsuario.style.fontFamily = "monospace";
    pInfoUsuario.style.color = "pink";
    pEdadUsuario.style.color = "pink";
    pEmailUsuario.style.color = "pink";
    pDniUsuario.style.color = "pink";
    imagenComienzo.src = imgfinal;
    if (edadUsuario.value >= 18) {
        pEdadUsuario.innerHTML = ("Su edad es de " + edadUsuario.value + " Es mayor de edad")
    } else pEdadUsuario.innerHTML = ("Su edad es de " + edadUsuario.value + " Es menor de edad")

}



