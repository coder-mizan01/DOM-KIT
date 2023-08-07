/*on mouse click */

const buttonList = document.querySelector('.set').children;

buttonList[0].addEventListener('click',function(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
})

buttonList[1].addEventListener('click',function(){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
})


buttonList[2].addEventListener('click',function(){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
})

buttonList[3].addEventListener('click',function(){
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
})

const buttonList2 = document.querySelector('.set2').children;

buttonList2[0].addEventListener('click',function(){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
})

buttonList2[1].addEventListener('click',function(){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
})


buttonList2[2].addEventListener('click',function(){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
})



/*on button click*/

document.addEventListener('keypress',function(event){
     makeSound(event.key)
     makeAnimation(event.key)
})


function makeSound(key){

  switch (key) {
    case "w": var audio = new Audio("sounds/tom-1.mp3");
         audio.play();
        break;
    case "a": var audio = new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
    case "s": var audio = new Audio("sounds/tom-3.mp3");
         audio.play();
         break;
    case "d": var audio = new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
    case "j": var audio = new Audio("sounds/crash.mp3");
         audio.play();
         break; 
    case "k": var audio = new Audio("sounds/snare.mp3");
         audio.play();
         break;                                   
    case "l": var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;
    default:
        break;
  }

}


function makeAnimation(key){
    const animeClass = document.querySelector(`.${key}`);

    animeClass.classList.add('pressed');
   setTimeout(function(){
     animeClass.classList.remove('pressed')
   },200)
}





