const frm = document.querySelector("form")
const respLista = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const peso = Number(frm.inPeso.value)

    if (verApostaExiste(peso)){
        alert("alguém já apostou este peso,informe outro...")
        frm.inPeso.focus()
        return
    }
    if (localStorage.getItem("melanciaNome")){
        const melanciasNome=localStorage.getItem("melanciaNome")+";"+nome
        const melanciasPeso= localStorage.getItem("melanciaPeso")+";"+peso
        localStorage.setItem("melanciaNome",melanciasNome)
        localStorage.setItem("melanciapeso",melanciasPeso)
    }else{
        localStorage.setItem("melanciaNome",nome)
        localStorage.setItem("melanciaPeso",peso)
}

mostrarApostas()
frm.reset()
frm.inNome.focus()
})
const verApostaExiste=(peso)=>{
    if (localStorage.getItem("melanciaPeso")){
        const pesos = localStorage.getItem("melanciasPeso").split(";")
        return pesos.includes(peso.toString())
    }else{
        return false
    }
}
const mostrarApostas=()=>{
    if (!localStorage.getItem("melanciaNome")){
        respLista.innerText=""
        return
    }

    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciasPeso").split(";")
    
    let linha=""
    for (let i=0;i<nomes.length;i++){
        linha+=`${nomes[i]} apostou ${pesos[i]}g\n`
    }
    respLista.innerText=linha
}
window.addEventListener("load",mostrarApostas)