/*Guardarmos variable en memoria */

const $video = document.querySelector('#video');/* #video es un id del html*/ 
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

/*CREACION DE EVENTOS */

/*addEventListene (Agregar oyente de eventos) , (nombre evento(click), nombre funcion)*/

$play.addEventListener('click', handlePlay); /* Handle (Encargarse de) dar play */
$pause.addEventListener('click', handlePause);/* Handle (Encargarse de) dar pause */
$backward.addEventListener('click', handleBackward); /* Handle (Encargarse de) Hacia ataras*/
$forward.addEventListener('click', handleForward); /* Handle (Encargarse de) Hacia adelante*/


function handlePlay() {
    /*Metodo play */
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    $backward.hidden = false;
    $forward.hidden=false;
    console.log('Le diste click al boton de play');
}

function handlePause() {
    /*Metodo pause */
    $pause.hidden = true /*Hidden (oculto) */
    // $backward.hidden = true;
    // $forward.hidden = true;
    $play.hidden = false
    $video.pause()
    console.log('Le diste click al boton de pause');
}

function handleBackward(){
    // cuurentTime = Tiempo actual

    $video.currentTime -= 10; /*Currenttime (Tiempo actual) */
    console.log('Atras 10 segundos',$video.currentTime);
}

function  handleForward(){
    $video.currentTime += 10;
    console.log('Adelante 10 segundos',$video.currentTime);
}


const $progress = document.querySelector('#progress');

$video.addEventListener('loadedmetadata',handleLoaded);
$video.addEventListener('timeupdate',handleTimeUpdate);

function handleLoaded(){
    $progress.max = $video.duration;
    console.log('Ha cargado mi video',$video.duration);
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
    // console.log('tiempo actual', $video.currentTime);
}


$progress.addEventListener('input',handleInput);

function handleInput(){
    $video.currentTime = $progress.value;
    console.log($progress.value);
}