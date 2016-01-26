if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
    script = document.createElement( 'script' );
   script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'; 
    script.onload=fillOrder;
    document.body.appendChild(script);
} 
else {
    fillOrder();
}
 
function fillOrder() {
    alert(document.getElementById('advSQuery').value)
}
