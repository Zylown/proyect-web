var imagenes = ["img/xd1.jpg",
    "img/joya.jpg",
    "img/Tipos_de_joyas.jpg"
];

document.Imagen.src = imagenes[0];


var SliderDerecho = document.querySelector(".slider-derecho");
var Contador = 0;

function MoverDerecha() {
    Contador++;
    document.Imagen.src = imagenes[Contador];
}
SliderDerecho.addEventListener("click", MoverDerecha);