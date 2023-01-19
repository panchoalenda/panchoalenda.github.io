document.getElementById('quien').onclick = function () {

    /* console.log(document.getElementById('quienes').getAttribute('class'));*/

    if (document.getElementById('quienes').style.display == "") {
        document.getElementById('quienes').style.display = "none"
        document.getElementById('qy').setAttribute('class', 'fa-solid fa-eye')
    } else if (document.getElementById('quienes').style.display == "block") {
        
            document.getElementById('quienes').style.display = "none";
            document.getElementById('qy').setAttribute('class', 'fa-solid fa-eye')
            console.log(document.getElementById('quienes').style.display);

        } else {
            document.getElementById('quienes').style.display = "block";
            document.getElementById('qy').setAttribute('class', 'fa-solid fa-eye-slash');
            console.log(document.getElementById('quienes').style.display);

        }
   
    };



    /* Utilizando hijos
    if (document.getElementById('quienes').children[2].getAttribute('class') == "active") {

        document.getElementById('quienes').children[2].setAttribute('class', 'noactive')
        document.getElementById('qy').setAttribute('class', 'fa-solid fa-eye')

        console.log(document.getElementById('quienes').children[2].getAttribute('class'));
        console.log(document.getElementById('qy'));

    } else {

        document.getElementById('quienes').children[2].setAttribute('class', 'active')
        document.getElementById('qy').setAttribute('class', 'fa-solid fa-eye-slash')

        console.log(document.getElementById('quienes').children[2].getAttribute('class'));
        console.log(document.getElementById('qy'));

    }*/


document.getElementById('program').onclick = function () {

    /**let parrafo1 = document.getElementById('quienes').children[2];*/

    console.log(document.getElementById('programa').children[2].getAttribute('class'));
    if (document.getElementById('programa').children[2].getAttribute('class') == "active") {
        document.getElementById('programa').children[2].setAttribute('class', 'noactive')
        document.getElementById('pr').setAttribute('class', 'fa-solid fa-eye')
    } else {
        document.getElementById('programa').children[2].setAttribute('class', 'active')
        document.getElementById('pr').setAttribute('class', 'fa-solid fa-eye-slash')
    }
};

document.getElementById('oest').onclick = function () {

    /** let parrafo2 = document.getElementById('quienes').children[2];*/

    console.log(document.getElementById('oestudio').children[2].getAttribute('class'));
    if (document.getElementById('oestudio').children[2].getAttribute('class') == "active") {
        document.getElementById('oestudio').children[2].setAttribute('class', 'noactive');
        document.getElementById('oe').setAttribute('class', 'fa-solid fa-eye');
    } else {
        document.getElementById('oestudio').children[2].setAttribute('class', 'active');
        document.getElementById('oe').setAttribute('class', 'fa-solid fa-eye-slash');
    }
};

document.getElementById('exper').onclick = function () {

    /**let tabla = document.getElementById('tabla').children[0];*/
    console.log(document.getElementById('tabla').getAttribute('class'));
    /**console.log(document.getElementById('tabla').children[0]);*/

    if (document.getElementById('tabla').getAttribute('class') == "active") {

        document.getElementById('tabla').setAttribute('class', 'noactive');
        document.getElementById('ex').setAttribute('class', 'fa-solid fa-eye');


    } else {

        document.getElementById('tabla').setAttribute('class', 'active');
        document.getElementById('ex').setAttribute('class', 'fa-solid fa-eye-slash');

    }
};

document.getElementById('edu').onclick = function () {

    /**let tabla = document.getElementById('tabla').children[0];*/
    console.log(document.getElementById('tabla2').getAttribute('class'));
    /**console.log(document.getElementById('tabla').children[0]);*/

    if (document.getElementById('tabla2').getAttribute('class') == "active") {

        document.getElementById('tabla2').setAttribute('class', 'noactive');
        document.getElementById('ed').setAttribute('class', 'fa-solid fa-eye');

    } else {

        document.getElementById('tabla2').setAttribute('class', 'active');
        document.getElementById('ed').setAttribute('class', 'fa-solid fa-eye-slash');
    }
};

document.getElementById('ref').onclick = function () {

    /**let tabla = document.getElementById('tabla').children[0];*/
    console.log(document.getElementById('referencia').getAttribute('class'));
    /**console.log(document.getElementById('tabla').children[0]);*/

    if (document.getElementById('referencia').getAttribute('class') == "active") {

        document.getElementById('referencia').setAttribute('class', 'noactive');
        document.getElementById('re').setAttribute('class', 'fa-solid fa-eye');

    } else {

        document.getElementById('referencia').setAttribute('class', 'active');
        document.getElementById('re').setAttribute('class', 'fa-solid fa-eye-slash');
    }
};


document.getElementById('color').onclick = function () {
    
    console.log(document.getElementsByClassName('container'));

    if (document.body.style.backgroundColor == "") {
        document.body.style.backgroundColor = "#9BEFDF";
       
    } else if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "#9BEFDF";
    
    } else {
        document.body.style.backgroundColor = "white";
      
    }
   
};

    /*console.log(document.body.style.color);

    if (document.body.style.backgroundColor == "white") {
        
        document.body.style.backgroundColor = "black";

    } else {
      
        document.documentElement.style.color = "white"
    }*/

