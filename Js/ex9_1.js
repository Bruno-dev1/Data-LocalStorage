const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocaClube = () => {
    let clube
    if (frm.rbBrasil.checked) {
        clube = "Brasil"
    } else if (frm.rbPelotas.checked) {
        clube = "Pelotas"
    } else {
        clube = "Farroupilha"
    }
    dvTitulo.className=`row core-${clube}`

    imClube.src=`Img/${clube.toLowerCase()}.png`
    imClube.className="img-fluid"
    imClube.alt=`Escudo de ${clube}`

    localStorage.setItem("clube", clube)
}
frm.rbBrasil.addEventListener("change", trocaClube)
frm.rbPelotas.addEventListener("change", trocaClube)
frm.rbFarroupilha.addEventListener("change", trocaClube)

const verificarClube = () => {
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube")
        if (clube == "Brasil") {
            frm.rbBrasil.checked = true
        }else if(clube=="Pelotas"){
            frm.rbPelotas.checked= true
        }else{
            frm.rbFarroupilha.checked= true
        }
    trocaClube()
    }}
window.addEventListener("load", verificarClube)


