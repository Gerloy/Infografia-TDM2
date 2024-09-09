//Array de imagenes
var imgs = [
    document.getElementById('mesa0'),
    document.getElementById('mesa1'),
    document.getElementById('mesa2'),
    document.getElementById('mesa3'),
    document.getElementById('mesa4'),
    document.getElementById('mesa5'),
    document.getElementById('mesa6'),
    document.getElementById('mesa7')
];

//Array de carteles
var carteles = [
    document.getElementById('mod1-cartel0'),
    document.getElementById('mod1-cartel1'),
    document.getElementById('mod1-cartel2'),
    document.getElementById('mod1-cartel3'),
    document.getElementById('mod1-cartel4'),
    document.getElementById('mod1-cartel5'),
    document.getElementById('mod1-cartel6'),
    document.getElementById('mod1-cartel7')
];

//Imagen y cartel actual
var i = 0;

//Boton
var boton_empezar = document.getElementById('mod1-jugar');
var boton_salir = 0;
var boton_continuar = document.getElementById('boton-continuar-mod1');
var boton_restart = document.getElementById('boton-restart-mod1');;
var funcionalidades = [
    document.getElementById('bot-func0'),
    document.getElementById('bot-func1'),
    document.getElementById('bot-func2'),
    document.getElementById('bot-func3'),
];
var container = document.getElementById('container-funcionalidades');

boton_empezar.addEventListener('click', function(){
    esconderFunc();
    i = 1;
    mostrarFunc();
    container.style.display = 'flex';
    this.style.display = 'none';
})

funcionalidades[0].addEventListener('click', function(){
    if (i != 2){
        esconderFunc();
        i = 2;
        mostrarFunc();
    } 
})

funcionalidades[1].addEventListener('click', function(){
    if (i != 3){
        esconderFunc();
        i = 3;
        mostrarFunc();
    } 
})

funcionalidades[2].addEventListener('click', function(){
    if (i != 4){
        esconderFunc();
        i = 4;
        mostrarFunc();
    } 
})

funcionalidades[3].addEventListener('click', function(){
    if (i != 5){
        esconderFunc();
        i = 5;
        mostrarFunc();
        container.style.display = 'none';
        boton_continuar.style.display = 'inline-block';
    } 
})

boton_continuar.addEventListener('click', function(){
    esconderFunc();
    i ++;
    mostrarFunc();
    if (i == 7){
        boton_restart.style.display = 'inline-block';
        this.style.display = 'none';
    }
})

boton_restart.addEventListener('click', function(){
    esconderFunc();
    i = 0;
    mostrarFunc();
    boton_empezar.style.display = 'inline-block';
    this.style.display = 'none';
})



function esconderFunc(){
    imgs[i].style.display = 'none';
    carteles[i].style.display = 'none';
}

function mostrarFunc(){
    imgs[i].style.display = 'inline-block';
    carteles[i].style.display = 'flex';
}