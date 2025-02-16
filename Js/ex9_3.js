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
        localStorage.setItem("melanciaPeso",melanciasPeso)
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

frm.btVencedor.addEventListener("click",()=>{
    if (!locacalStorage.getItem("melanciaPeso")){
        alert("Ninguém apostou")
        return
    }
    const pesoCorreto= Number(prompt("Qual o peso correto da melancia?"))
        if (pesoCorreto==0 || isNaN(pesoCorreto)){
            return
        }
        const nomes = localStorage.getItem("melanciaNome").split(";")
        const pesos = localStorage.getItem("melanciasPeso").split(";")

        let vencedorNome = nomes[0]
        let vencedorPeso = Number(pesos[0])
//descobrir o vencedor
        for (let i=1;i<nomes.length;i++){
            const difVencedor = Math.abs(vencedorPeso-pesoCorreto)
            const difAposta = Math.abs(Number(pesos[i])- pesoCorreto)

        if (difAposta < difVencedor){
            vencedorNome = nomes[i]
            vencedorPeso = Number(pesos[i])
        }
    }
    let mensagem ="Resultado - Peso Correto: "+pesoCorreto+"g"
    mensagem+="\n"+ repeat("-",40)
    mensagem+="\nVencedor: "+vencedorNome
    mensagem+="\nApostou: "+vencedorPeso+"g"
    alert(mensagem)
})
frm.btLimpar.addEventListener("click",()=>{
    if(confirm("Deseja realmente limpar as apostas?")){
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")
        mostrarApostas()
    }
})