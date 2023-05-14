// Sintaxis
// $("selector").accion()

// $("h1").hide()

//$(document).ready(() => {
//
//})

$(() => {
    //$("#el-1").hide()
    $(".hide-btn").click(() => {
        console.log("Ocultando...")
        $("h1").hide()
    })
    $(".show-btn").click(() => {
        console.log("Mostrando...")
        $("h1").show()
    })
})