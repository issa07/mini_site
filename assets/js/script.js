function myFunction() {
    let ul = document.getElementById("myTopnav");
    let nav = document.getElementById('nav');
    let heroHeight = document.querySelector('.header');
    let content = document.querySelector('.content');

    let icon = document.querySelector('.li-icon');
    if (ul.className === "topnav") {
        nav.style.display = 'block';
        heroHeight.style.height = 'auto';
        content.style.top = 'auto';
        content.style.padding = '50px 10px';
        ul.style.overflow = "visible"
        icon.style.bottom = "35px";
        icon.style.position = 'inherit';
        ul.className += " responsive";
    } 
    else if (ul.className === "topnav responsive") {
        nav.style.display = 'flex';
        content.style.top = '150px';
        content.style.padding = '0px 10px';
        heroHeight.style.height = '100vh';
        // icon.style.top = "0px";
        ul.className = "topnav";
    } 
    // alert('This work...')
}


function redimensionnement() {
    let ul = document.getElementById("myTopnav");

    let content = document.querySelector('.content');
    let heroHeight = document.querySelector('.header');

    if("matchMedia" in window ) {
        if (window.matchMedia("(min-width: 600px)").matches ) {
            // content.style.top = '50%';
            heroHeight.style.height = '100vh';
        } 
        else if (ul.className === 'topnav responsive' && window.matchMedia("(max-width: 600px)").matches ) {
            content.style.top = 'auto';
            ul.className = "topnav";

        }
        else {
            content.style.top = '30%';

        }
    }
}
window.addEventListener('resize', redimensionnement, false);















// var test = document.getElementById("test");

// test.addEventListener('click', (event) => {
//     if (test) {
//         console.log('This work...');
//     }
// })
