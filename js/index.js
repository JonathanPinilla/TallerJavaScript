function main() {//función main que verifica cual es el color actual
    var color;
    if (localStorage.getItem("colorActual") != null && localStorage.getItem("colorActual") == "rojo") {
        clicRojo();
    } else if (localStorage.getItem("colorActual") != null && localStorage.getItem("colorActual") == "azul") {
        clicAzul();
    } else if (localStorage.getItem("colorActual") != null && localStorage.getItem("colorActual") == "verde") {
        clicVerde();
    } else {
        var color = localStorage.setItem("colorActual", "default");
    }
}


function clicRojo() {//cambia a color rojo y guarda la variable local para que sea mantenido este color en los otros html
    var color = "rojo";
    localStorage.setItem("colorActual", color);
    var bg = document.getElementById("cuerpo");
    bg.style.backgroundColor = "red";
    if (document.getElementById("foto") != null) {
        document.getElementById("foto").style.borderColor = "red"
    }
    document.getElementById("tit1").style.color = "red";
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == "index.html") {
        document.getElementById("tit2").style.color = "red";
        document.getElementById("tit3").style.color = "red";
    } else {
        document.getElementById("tit2").style.color = "white";
        document.getElementById("tit2").style.backgroundColor = "red"
        document.getElementById("tit3").style.color = "white";
        document.getElementById("tit3").style.backgroundColor = "red"
    }

    if (document.getElementById("tit4") != null) {
        document.getElementById("tit4").style.color = "white";
        document.getElementById("tit4").style.backgroundColor = "red"
    }
    if (document.getElementById("tit5") != null) {
        document.getElementById("tit5").style.color = "white";
        document.getElementById("tit5").style.backgroundColor = "red"
    }
    document.getElementById("icoTema").style.color = "red"
    document.getElementById("pg1").style.backgroundColor = "#413737"
    document.getElementById("pg1").style.color = "#FFFFFF"
    document.getElementById("pg2").style.backgroundColor = "#413737"
    document.getElementById("pg2").style.color = "#FFFFFF"
    document.getElementById("pg3").style.backgroundColor = "#413737"
    document.getElementById("pg3").style.color = "#FFFFFF"
    document.getElementById("pg4").style.backgroundColor = "#413737"
    document.getElementById("pg4").style.color = "#FFFFFF"
    document.getElementById("pg5").style.backgroundColor = "#413737"
    document.getElementById("pg5").style.color = "#FFFFFF"
    if (document.getElementById("dpdf") != null) {
        document.getElementById("dpdf").style.backgroundColor = "red"
    }
}

function clicAzul() {//cambia a color rojo y guarda la variable local para que sea mantenido este color en los otros html
    var bg = document.getElementById("cuerpo");
    bg.style.backgroundColor = "blue";
    var color = "azul";
    localStorage.setItem("colorActual", color);
    if (document.getElementById("foto") != null) {
        document.getElementById("foto").style.borderColor = "blue"
    }
    document.getElementById("tit1").style.color = "blue";
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == "index.html") {
        document.getElementById("tit2").style.color = "blue";
        document.getElementById("tit3").style.color = "blue";
    } else {
        document.getElementById("tit2").style.color = "white";
        document.getElementById("tit2").style.backgroundColor = "blue"
        document.getElementById("tit3").style.color = "white";
        document.getElementById("tit3").style.backgroundColor = "blue"
    }
    if (document.getElementById("tit4") != null) {
        document.getElementById("tit4").style.color = "white";
        document.getElementById("tit4").style.backgroundColor = "blue"
    }
    if (document.getElementById("tit5") != null) {
        document.getElementById("tit5").style.color = "white";
        document.getElementById("tit5").style.backgroundColor = "blue"
    }
    document.getElementById("icoTema").style.color = "blue"
    document.getElementById("pg1").style.backgroundColor = "#413737"
    document.getElementById("pg1").style.color = "#FFFFFF"
    document.getElementById("pg2").style.backgroundColor = "#413737"
    document.getElementById("pg2").style.color = "#FFFFFF"
    document.getElementById("pg3").style.backgroundColor = "#413737"
    document.getElementById("pg3").style.color = "#FFFFFF"
    document.getElementById("pg4").style.backgroundColor = "#413737"
    document.getElementById("pg4").style.color = "#FFFFFF"
    document.getElementById("pg5").style.backgroundColor = "#413737"
    document.getElementById("pg5").style.color = "#FFFFFF"
    if (document.getElementById("dpdf") != null) {
        document.getElementById("dpdf").style.backgroundColor = "blue"
    }

}

function clicVerde() {//cambia a color rojo y guarda la variable local para que sea mantenido este color en los otros html
    var bg = document.getElementById("cuerpo");
    bg.style.backgroundColor = "green";
    var color = "verde";
    localStorage.setItem("colorActual", color);
    if (document.getElementById("foto") != null) {
        document.getElementById("foto").style.borderColor = "green"
    }
    document.getElementById("tit1").style.color = "green";
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == "index.html") {
        document.getElementById("tit2").style.color = "green";
        document.getElementById("tit3").style.color = "green";
    } else {
        document.getElementById("tit2").style.color = "white";
        document.getElementById("tit2").style.backgroundColor = "green"
        document.getElementById("tit3").style.color = "white";
        document.getElementById("tit3").style.backgroundColor = "green"
    }
    if (document.getElementById("tit4") != null) {
        document.getElementById("tit4").style.color = "white";
        document.getElementById("tit4").style.backgroundColor = "green"
    }
    if (document.getElementById("tit5") != null) {
        document.getElementById("tit5").style.color = "white";
        document.getElementById("tit5").style.backgroundColor = "green"
    }
    document.getElementById("icoTema").style.color = "green"
    document.getElementById("pg1").style.backgroundColor = "#413737"
    document.getElementById("pg1").style.color = "#FFFFFF"
    document.getElementById("pg2").style.backgroundColor = "#413737"
    document.getElementById("pg2").style.color = "#FFFFFF"
    document.getElementById("pg3").style.backgroundColor = "#413737"
    document.getElementById("pg3").style.color = "#FFFFFF"
    document.getElementById("pg4").style.backgroundColor = "#413737"
    document.getElementById("pg4").style.color = "#FFFFFF"
    document.getElementById("pg5").style.backgroundColor = "#413737"
    document.getElementById("pg5").style.color = "#FFFFFF"
    if (document.getElementById("dpdf") != null) {
        document.getElementById("dpdf").style.backgroundColor = "green"
    }
}

function colorDefault() {//Color default de la página por si se desea volver a este
    var bg = document.getElementById("cuerpo");
    bg.style.backgroundColor = "#413737";
    var color = "default";
    localStorage.setItem("colorActual", color);
    if (document.getElementById("foto") != null) {
        document.getElementById("foto").style.borderColor = "#FF5757"
    }
    document.getElementById("tit1").style.color = "#FF5757";
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == "index.html") {
        document.getElementById("tit2").style.color = "#FF5757";
        document.getElementById("tit3").style.color = "#FF5757";
    } else {
        document.getElementById("tit2").style.color = "white";
        document.getElementById("tit2").style.backgroundColor = "#FF5757"
        document.getElementById("tit3").style.color = "white";
        document.getElementById("tit3").style.backgroundColor = "#FF5757"
    }
    if (document.getElementById("tit4") != null) {
        document.getElementById("tit4").style.color = "white";
        document.getElementById("tit4").style.backgroundColor = "#FF5757"
    }
    if (document.getElementById("tit5") != null) {
        document.getElementById("tit5").style.color = "white";
        document.getElementById("tit5").style.backgroundColor = "#FF5757"
    }
    document.getElementById("icoTema").style.color = "#FF5757"
    document.getElementById("pg1").style.backgroundColor = "#FF5757"
    document.getElementById("pg1").style.color = "#413737"
    document.getElementById("pg2").style.backgroundColor = "#FF5757"
    document.getElementById("pg2").style.color = "#413737"
    document.getElementById("pg3").style.backgroundColor = "#FF5757"
    document.getElementById("pg3").style.color = "#413737"
    document.getElementById("pg4").style.backgroundColor = "#FF5757"
    document.getElementById("pg4").style.color = "#413737"
    document.getElementById("pg5").style.backgroundColor = "#FF5757"
    document.getElementById("pg5").style.color = "#413737"
    if (document.getElementById("dpdf") != null) {
        document.getElementById("dpdf").style.backgroundColor = "#FF5757"
    }
}


//Acordeon
function acord() {
    var ac = document.getElementsByClassName("acordeon");
    var i;

    for (i = 0; i < ac.length; i++) {
        //detecta el click
        ac[i].addEventListener("click", function () {

            /* quita o pone la clase active */
            this.classList.toggle("active");

            /* oculta o muestra el panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

