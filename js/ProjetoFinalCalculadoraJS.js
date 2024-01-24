
/* -----------CALCULADORA------------- */

const converter = () =>{
    let valor_moedas = document.querySelector("#inputValor").value
    console.log(valor_moedas)
    
    if (document.querySelector("#selectMoedasCalculadora").value == "1"){
        window.alert("Favor selecionar uma moeda")
        document.querySelector("#textResultado").value = ""
    }
    else if (document.querySelector("#selectMoedasCalculadora").value == "2"){
        let valor_real = valor_moedas*245052.51
        document.querySelector("#textResultado").value = `${valor_moedas} Stark coin = R$ ${valor_real.toLocaleString('pt-br')}`
    }
    else if (document.querySelector("#selectMoedasCalculadora").value == "3"){
        let valor_real = valor_moedas* 210053.55
        document.querySelector("#textResultado").value = `${valor_moedas} bitcoin = R$ ${valor_real.toLocaleString('pt-br')}`
        
    }
    else if (document.querySelector("#selectMoedasCalculadora").value == "4"){
        let valor_real = valor_moedas* 10906.44   
        document.querySelector("#textResultado").value = `${valor_moedas} Ethereum = R$ ${valor_real.toLocaleString('pt-br')}`
        
    }else{
        let valor_real = valor_moedas* 4.92   
        document.querySelector("#textResultado").value = `${valor_moedas} Tether = R$ ${valor_real.toLocaleString('pt-br')}`
    }

}

let btnConverter = document.querySelector("#btnConverter");
btnConverter.addEventListener("click" , converter)
