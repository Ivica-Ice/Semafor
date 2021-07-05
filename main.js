
function semafor() {
    var boja = document.getElementsByClassName('boja');
    boja[0].style.background = 'red';
    boja[1].style.background = 'grey';
    boja[2].style.background = 'grey';

    function changeToYellow() {
        boja[1].style.background = 'yellow';
    }

    function changeToGreen() {
        boja[0].style.background = 'grey';
        boja[1].style.background = 'grey';
        boja[2].style.background = 'green';
    }

    var x = setTimeout(changeToYellow, 3000);
    var y = setTimeout(changeToGreen, 5000);
    var start = setInterval(semafor, 8000);

}

semafor();