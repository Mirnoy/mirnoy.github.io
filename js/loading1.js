/*let timer = function() {
      let timerHeader = document.querySelector(".intro__title");

}*/
setTimeout(function() {
      let loader = document.querySelector('.intro__body1');
      let continueBotton = document.querySelector('.intro__body')
      loader.classList.toggle('off');
      continueBotton.classList.toggle('off');

}, 60000);
