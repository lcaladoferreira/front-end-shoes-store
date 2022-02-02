let slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 } if (n < 1) { slideIndex = x.length } for
        (i = 0; i < x.length; i++) { x[i].style.display = "none"; }
    x[slideIndex - 1].style.display = "block";
}

array1 = new Array ("custom_html_banner1", "custom_html_banner2", "custom_html_banner3")

function comeco(){
document.getElementById('mySlides').src = array1[0]
document.form.texto.value="0"
}

function mais(){
document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 + 1)
if (document.form.texto.value > 2)
{document.form.texto.value = 0}
}

function menos(){
document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 -1)
if (document.form.texto.value < 0)
{document.form.texto.value = 2}
}

function regular(){
document.getElementById('mySlides').src = array1[document.form.texto.value];
setTimeout("regular()", 1)
}