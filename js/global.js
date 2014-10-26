$(document).ready(function(){
    // 1. Initialize fotorama manually.
    var $fotoramaDiv = $('.fotorama').fotorama();
    // 2. Get the API object.
    var fotorama = $fotoramaDiv.data('fotorama');
    // 3. Inspect it in console.
    fotorama.startAutoplay(10000);
});
