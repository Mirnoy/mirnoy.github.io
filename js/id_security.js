function copyText(element) {

   var range, selection;


   if (document.body.createTextRange) {

        range = document.body.createTextRange();

        range.moveToElementText(element);

        range.select();

   } else if (window.getSelection) {

        selection = window.getSelection();

        range = document.createRange();

        range.selectNodeContents(element);

        selection.removeAllRanges();

        selection.addRange(range);

   }

   console.log(range);

   try {

        document.execCommand("copy");

        alert("Ваш айди скопирован : " + selection );

   }

   catch (err) {

       alert("Невозможно скопировать!");

   }

}