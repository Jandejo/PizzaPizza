window.onload = main; 
$(document).ready(function() {
    // Efecto de movimiento en las imágenes de la carta al hacer hover
    $('.fondo, .fondo-1200, .fondo-992, .fondo-768, .fondo-480').hover(
        function() {
            $(this).animate({ marginLeft: '+=15px' }, 'fast'); // Mueve la imagen hacia la derecha
        },
        function() {
            $(this).animate({ marginLeft: '-=15px' }, 'fast'); // Mueve la imagen hacia la izquierda
        }
    );
});




function main(){

    let l = document.getElementById("ingresar");
    l.onclick = function(){alert("En proceso");}

    let pizza = document.getElementById("pizza");
    pizza.innerText="No se seleccionó ninguna pizza";
    pizza.onclick = function(){alert("No se seleccionó ninguna pizza");}

    let muz = document.getElementById("cant1");
    let pys = document.getElementById("cant2");
    let fgz = document.getElementById("cant3");
    let vdr = document.getElementById("cant4");
    
    muz.selectedIndex = 0;
    pys.selectedIndex = 0;
    fgz.selectedIndex = 0;
    vdr.selectedIndex = 0;

    muz.onchange = precio;
    pys.onchange = precio;
    fgz.onchange = precio;
    vdr.onchange = precio;
}

function precio(){
    let muz = document.getElementById("cant1");
    let pys = document.getElementById("cant2");
    let fgz = document.getElementById("cant3");
    let vdr = document.getElementById("cant4");
    let pizza = document.getElementById("pizza");

    let cm = muz.value;
    let cpys = pys.value;
    let cfgz = fgz.value;
    let cvdr = vdr.value;

    let mp = 1000*cm;
    let pysp = 1250*cpys;
    let fgzp = 1500*cfgz;
    let vdrp = 1250*cvdr;

    let total = 0;
    total += mp + pysp + fgzp + vdrp;

    pizza.onclick = function(){
        if(total === 0){alert("No se seleccionó ninguna pizza");}
        else{alert("Pedido tomado, llegará pronto."); main();}
    }

    if(total !== 0){pizza.innerText= "Precio total: $" + total;}
    else{pizza.innerText="No se seleccionó ninguna pizza";}
};