/* -----------PAGINA INICIAL------------- */
let filtro = "1"
const filtrar = () =>{
    filtro = document.querySelector("#selectMoedas").value
    if (filtro == "1"){
        document.querySelectorAll('.w-75').forEach(elemento => elemento.setAttribute("hidden", "hidden"))
        document.querySelectorAll('.w-75').forEach(elemento => elemento.removeAttribute("hidden", "hidden"))
    }
    else if (filtro == "2"){
        document.querySelectorAll('.w-75').forEach(elemento => elemento.setAttribute("hidden", "hidden"))
        document.querySelector('.informacao').removeAttribute("hidden")
    }
    else if (filtro == "3"){
        document.querySelectorAll('.w-75').forEach(elemento => elemento.setAttribute("hidden", "hidden"))
        document.querySelector('.starkCoin').removeAttribute("hidden")
    }
    else if (filtro == "4"){
        document.querySelectorAll('.w-75').forEach(elemento => elemento.setAttribute("hidden", "hidden"))
        document.querySelector('.bitcoin').removeAttribute("hidden")
    }
    else if (filtro == "5"){
        document.querySelectorAll('.w-75').forEach(elemento => elemento.setAttribute("hidden", "hidden"))
        document.querySelector('.ethereum').removeAttribute("hidden")
    }
    else{
        document.querySelectorAll('.w-75').forEach(elemento => elemento.setAttribute("hidden", "hidden"))
        document.querySelector('.tether').removeAttribute("hidden")
    }

}


