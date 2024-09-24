//Array de tragamonedas
let tragamonedas = [
    document.getElementById('tragamonedas1'),
    document.getElementById('tragamonedas2'),
    document.getElementById('tragamonedas3'),
    document.getElementById('tragamonedas4')
];

//Array de info
let info = [
    document.getElementById('info1-mod2'),
    document.getElementById('info2-mod2'),
    document.getElementById('info3-mod2'),
    document.getElementById('info4-mod2')
];

//Textos
let tex_arriba = document.getElementById('tex-palanca-arriba');
let tex_abajo = document.getElementById('tex-palanca-abajo');

//Premios
let pre_uno = document.getElementById('premio1');
let pre_dos = document.getElementById('premio2');

//Boton de retroceder y de cerrar
let salir_mod2 = document.getElementById('boton-salir-mod2');
let volver_mod2 = document.getElementById('boton-volver-mod2');

//Cosas de control
let i_traga = 0;
let palanca = document.getElementById('bot-mod2');

palanca.addEventListener('click', function(){
    esconderTraga();
    if (i_traga < info.length-1){
        i_traga++;
    }else{
        i_traga = 0;
        tex_abajo.style.display = 'flex';
        tex_arriba.style.display = 'none';
        pre_dos.style.display = 'none';
    }
    console.log(i_traga);
    mostrarTraga();
});

function esconderTraga(){
    tragamonedas[i_traga].style.display = 'none';
    info[i_traga].style.display = 'none';
}

function mostrarTraga(){
    tragamonedas[i_traga].style.display = 'inline-block';
    info[i_traga].style.display = 'flex';
    if (i_traga > 0) { volver_mod2.style.display = 'inline-block'; salir_mod2.style.display = 'inline-block';}else{volver_mod2.style.display = 'none'; salir_mod2.style.display = 'none';}
    if (i_traga > 1) {tex_arriba.style.display = 'flex'; tex_abajo.style.display = 'none';}
    if (i_traga == 2) {pre_uno.style.display = 'inline-block';} else if (i_traga == 3){pre_dos.style.display = 'inline-block'; pre_uno.style.display = 'none';}
    if (i_traga < 3) {pre_dos.style.display = 'none';}
    if (i_traga < 2) {pre_uno.style.display = 'none';}
    if (i_traga < 2) {tex_abajo.style.display = 'flex', tex_arriba.style.display = 'none';}
}

//Ultimos botones
volver_mod2.addEventListener('click', function(){
    if(i_traga>0){
        esconderTraga();
        i_traga--;
        mostrarTraga();
    }
});

salir_mod2.addEventListener('click', function(){
    if(i_traga>0){
        esconderTraga();
        i_traga = 0;
        mostrarTraga();
    }
});
