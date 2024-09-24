//Array de tragamonedas
let cont_puerta = [
    document.getElementById('cont-puerta1'),
    document.getElementById('cont-puerta2'),
    document.getElementById('cont-puerta3'),
    document.getElementById('cont-puerta4'),
    document.getElementById('cont-puerta5'),
    document.getElementById('cont-puerta6')
];

//Botones
let boton_puerta = [
    document.getElementById('horas1'),
    document.getElementById('horas2'),
    document.getElementById('horas3'),
    document.getElementById('horas4'),
    document.getElementById('horas5'),
    document.getElementById('horas6'),
];

//Cosas de control
let i_puertas = 0;

boton_puerta[0].addEventListener('click', function(){
    esconderPuertas();
    i_puertas=0;
    mostrarPuertas();
});

boton_puerta[1].addEventListener('click', function(){
    esconderPuertas();
    i_puertas=1;
    mostrarPuertas();
});

boton_puerta[2].addEventListener('click', function(){
    esconderPuertas();
    i_puertas=2;
    mostrarPuertas();
});

boton_puerta[3].addEventListener('click', function(){
    esconderPuertas();
    i_puertas=3;
    mostrarPuertas();
});

boton_puerta[4].addEventListener('click', function(){
    esconderPuertas();
    i_puertas=4;
    mostrarPuertas();
});

boton_puerta[5].addEventListener('click', function(){
    esconderPuertas();
    i_puertas=5;
    mostrarPuertas();
});

function esconderPuertas(){
    cont_puerta[i_puertas].style.display = 'none';
}

function mostrarPuertas(){
    cont_puerta[i_puertas].style.display = 'inline-block';
}
