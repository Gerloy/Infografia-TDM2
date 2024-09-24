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

//cartel instajack
let instajack = document.getElementById('instajack');

//Boton
let salir_mod1 = document.getElementById('boton-salir-mod1');
let volver_mod1 = document.getElementById('boton-volver-mod1');
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
    funcionalidades[0].style.background = 'url("../res/boton-func0-unselect.png") no-repeat';
    console.log(i);
})

funcionalidades[0].addEventListener('click', function(){
    if (i != 2){
        esconderFunc();
        funcionalidades[0].style.background = 'url("../res/boton-func0-gris.png") no-repeat';
        i = 2;
        mostrarFunc();
        funcionalidades[1].style.background = 'url("../res/boton-func1-unselect.png") no-repeat';
    } 
})

funcionalidades[1].addEventListener('click', function(){
    if (i != 3){
        esconderFunc();
        funcionalidades[1].style.background = 'url("../res/boton-func1-gris.png") no-repeat';
        i = 3;
        mostrarFunc();
        funcionalidades[2].style.background = 'url("../res/boton-func2-unselect.png") no-repeat';
    } 
})

funcionalidades[2].addEventListener('click', function(){
    if (i != 4){
        esconderFunc();
        funcionalidades[2].style.background = 'url("../res/boton-func2-gris.png") no-repeat';
        i = 4;
        mostrarFunc();
        funcionalidades[3].style.background = 'url("../res/boton-func3-unselect.png") no-repeat';
    } 
})

funcionalidades[3].addEventListener('click', function(){
    if (i != 5){
        esconderFunc();
        i = 5;
        mostrarFunc();
        funcionalidades[3].style.background = 'url("../res/boton-func3-gris.png") no-repeat';
        funcionalidades[0].style.background = 'url("../res/boton-func0-unselect.png") no-repeat';
        container.style.display = 'none';
        boton_continuar.style.display = 'inline-block';
    } 
})

boton_continuar.addEventListener('click', function(){
    esconderFunc();
    i ++;
    mostrarFunc();
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
    if(i>0 && i<5){
        funcionalidades[i-1].style.background = 'url("../res/boton-func'+(i-1)+'-gris.png") no-repeat';
    }
}

function mostrarFunc(){
    imgs[i].style.display = 'inline-block';
    carteles[i].style.display = 'flex';
    if (i<5){boton_continuar.style.display = 'none'; boton_restart.style.display = 'none';}
    if (i!=0 && i!=6){instajack.style.opacity = 0} else{instajack.style.opacity = 1}
    if (i==0){volver_mod1.style.display = 'none'; salir_mod1.style.display = 'none'; container.style.display = 'none'; boton_empezar.style.display = 'inline-block';}else{volver_mod1.style.display = 'inline-block'; salir_mod1.style.display = 'inline-block';}
    if (i>4 && i<7){
        boton_restart.style.display = 'none';
        boton_continuar.style.display = 'inline-block';
    }
    if (i == 7){
        boton_restart.style.display = 'inline-block';
        boton_continuar.style.display = 'none';
    }
    if(i>0 && i<5){
        container.style.display = 'flex';
        funcionalidades[i-1].style.background = 'url("../res/boton-func'+(i-1)+'-unselect.png") no-repeat';
        if(i==4){funcionalidades[0].style.background = 'url("../res/boton-func0-gris.png") no-repeat';}
    }
}

//Hover funcionalidades

function over0(){
    if (i==1){
        funcionalidades[0].style.background = 'url("../res/boton-func0-select.png") no-repeat';
    }
}

function leave0(){
    if (i==1){
        funcionalidades[0].style.background = 'url("../res/boton-func0-unselect.png") no-repeat';
    }
}

function over1(){
    if (i==2){
        funcionalidades[1].style.background = 'url("../res/boton-func1-select.png") no-repeat';
    }
}

function leave1(){
    if (i==2){
        funcionalidades[1].style.background = 'url("../res/boton-func1-unselect.png") no-repeat';
    }
}

function over2(){
    if (i==3){
        funcionalidades[2].style.background = 'url("../res/boton-func2-select.png") no-repeat';
    }
}

function leave2(){
    if (i==3){
        funcionalidades[2].style.background = 'url("../res/boton-func2-unselect.png") no-repeat';
    }
}

function over3(){
    if (i==4){
        funcionalidades[3].style.background = 'url("../res/boton-func3-select.png") no-repeat';
    }
}

function leave3(){
    if (i==4){
        funcionalidades[3].style.background = 'url("../res/boton-func3-unselect.png") no-repeat';
    }
}


//Ultimos botones
volver_mod1.addEventListener('click', function(){
    if(i>0){
        esconderFunc();
        i--;
        mostrarFunc();
    }
});

salir_mod1.addEventListener('click', function(){
    if(i>0){
        esconderFunc();
        i = 0;
        mostrarFunc();
    }
});

