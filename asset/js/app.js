
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");
//el formulario tiene una etiqueta form un fieldset 3 div y un input dentro de cada div hay label and input

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    //preventDefault cancela el evento temporalmente sin envargo podemos volver a llamarlo

});

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
        //formulario en la posicion 1 contienen el valor de la feha
        //formulario en la posicion 2 contiene lo que el usuario describa en el textArea
        //formulario en la posicion 3 contiene la cantidad
    }
  
    if(formulario[1].value == "" || formulario[2].value == "" || formulario[3].value == ""){
        alert("El formulario esta vacio o le faltan datos");
    }else{
        bitacoras.push(bitacora);
        cont++;
        mostrar();
    }
    
});

const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}
//el contendido de las variables tr y td seran los valores que tiene bitacora
// content tiene todos los nodos hijos a agregar a los nodos padres td y tr
//al finalizar la iteracion tbody contiene todos los td y tr ya con informacion
// la funcion crea una tabla de toda la informacion que contiene bitacora.

const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
//firstChild contiene  el primer nodo hijo como un ELEMENTO nodo
//como queda tbody?

const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            document.querySelector("#descp").value = item.childNodes[2].textContent;
            document.querySelector("#cant").value = item.childNodes[3].textContent;
        });
    })
}



const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}
var descp = document.getElementById("descp");
var fecha = document.getElementById("fecha");
var cant = document.getElementById("cant");

fecha.oninput = () => {
    var valor = fecha.value;
    if (valor == "" || valor == null) {
        fecha.style.borderColor = "red";
    } else {
        fecha.style.borderColor = "green";
    }
}
descp.oninput = () => {
    var valor = descp.value;
    if (valor == "" || valor == null) {
        descp.style.borderColor = "red";
    } else {
        descp.style.borderColor = "green";
    }
}
cant.oninput = () => {
    var valor = cant.value;
    if (valor == "" || valor == null) {
        cant.style.borderColor = "red";
    } else {
        cant.style.borderColor = "green";
    }
}



