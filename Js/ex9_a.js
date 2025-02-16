const numDeP = document.querySelector("#inCliente")
localStorage.setItem("clientes",0)
window.addEventListener("load", () => {
    localStorage.getItem("clientes")+=1
    if (localStorage.getItem("clientes") == 1) {
        alert("Bem vindo ao nosso site!")
    numDeP.value = Number(localStorage.getItem("clientes"))
    }else{
        alert("Bem vindo de volta ao nosso site!")
        numDeP.value = Number(localStorage.getItem("clientes"))}
})