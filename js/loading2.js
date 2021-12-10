/*let timer = function() {
      let timerHeader = document.querySelector(".intro__title");

}*/
setTimeout(function() {
      let loader = document.querySelector('.intro__body1');
      loader.classList.toggle('off');
      document.location.href = "check.html";

}, 180000);
