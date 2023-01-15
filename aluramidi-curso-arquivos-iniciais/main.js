function tocaSom (selectorAudio) {

    const elemento = document.querySelector(selectorAudio);
    // if (elemento === null) {
    // //  alert('Elemento não econtrado');
    //     console.log('Elemento não encontrado');
    // } Vai cair no "ELSE" pq é o contrário do if abaixo

    if (elemento /*!= null */ && elemento.localName === 'audio') {

        elemento.play();

        // console.log(elemento.localName === 'audio');

        // if (elemento.localName === 'audio') {
        //     elemento.play();
        // } if adicionado ao primeiro &&
    }
    else {
        console.log('Elemento não encontrado ou Seletor inválido');
    }
}
// 
//     document.querySelector('#som_tecla_clap').play();
// }

// document.querySelector('.tecla_clap').onclick = tocaSomClap;

// function tocaSomTim() {
//     document.querySelector('#som_tecla_tim').play();
// }

// document.querySelector('.tecla_tim').onclick = tocaSomTim;

// function tocaSomPuff () {
//     document.querySelector('#som_tecla_puff').play();
// }

// document.querySelector('.tecla_puff').onclick = tocaSomPuff;

// function tocaSomSplash () {
//     document.querySelector('#som_tecla_splash').play();
// }

// document.querySelector('.tecla_splash').onclick = tocaSomSplash;

// function tocaSomToim () {
//     document.querySelector('#som_tecla_toim').play();
// }

// document.querySelector('.tecla_toim').onclick = tocaSomToim;

// function tocaSomPsh () {
//     document.querySelector('#som_tecla_psh').play();
// }

// document.querySelector('.tecla_psh').onclick = tocaSomPsh;

// function tocaSomTic () {
//     document.querySelector('#som_tecla_tic').play();
// }

// document.querySelector('.tecla_tic').onclick = tocaSomTic;

// function tocaSomTom () {
//     document.querySelector('#som_tecla_tom').play();
// }

// document.querySelector('.tecla_tom').onclick = tocaSomTom;

// Criar referência constante
const listaDeTeclas = document.querySelectorAll('.tecla');

// listaDeTeclas[0].onclick = tocaSomPom;
// listaDeTeclas[1].onclick = tocaSomTiClap;
// listaDeTeclas[2].onclick = tocaSomTim;
// listaDeTeclas[3].onclick = tocaSomPuff;
// listaDeTeclas[4].onclick = tocaSomSplash;
// listaDeTeclas[5].onclick = tocaSomToim;
// listaDeTeclas[6].onclick = tocaSomPsh;
// listaDeTeclas[7].onclick = tocaSomTic;
// listaDeTeclas[8].onclick = tocaSomTom;

// WHILE (ENQUANTO)
// let contador = 0;

// while (contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];

//     const instrumento = tecla.classList[1];
//    //Template string = ${}
//     const idAudio = `#som_${instrumento}`;

//     console.log (idAudio);

//     tecla.onclick = function () {
//         tocaSom(idAudio);
//     }

//     contador++;

//     // console.log(contador);
// }

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;    //Template string = ${}

//    console.log (idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    // console.log(contador);
    tecla.onkeydown = function (evento) {
//       tecla.classList.add('ativa'); // Qualquer tecla ao ser precionada
        
        // console.log(evento.code === 'Space') // Mostra no console se apertamos a tecla Espaço
        console.log(evento.code === 'Space' || evento.code === 'Enter');

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa'); 
    }
}