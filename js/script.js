'use strict';
// File Upload Function
(function () {
   const realFile = document.querySelector('.realfile');
   const inputFile = document.querySelector('.input-file');
   const fileRegex = /[\/\\]([\w\d\s\.\-\(\)]+)$/;

   inputFile.addEventListener('click', () => {
      realFile.click();
   });

   realFile.addEventListener('change', () => {
      if (realFile.value) {
         inputFile.innerHTML = realFile.value.match(fileRegex)[1];
      } else {
         inputFile.innerHTML = 'No File Chosen.';
      }
   });
})();
