document.addEventListener("DOMContentLoaded", function() {
    addEventListeners();
});

function addEventListeners() {
    let menu = document.getElementsByClassName('menu')[0];
    menu.addEventListener("click", menuClicked, false);
}

// lista svih animacija koje se koriste (potrebna da bi se znalo koje animacije treba ukloniti)
const animationList = [
    'slide-content-out-overlay', 'slide-signature-out-overlay', 'slide-content-in-overlay', 'slide-signature-in-overlay'
];

// pritisnuto dugme za overlay meni
function menuClicked() {
    let menu = document.getElementsByClassName('menu')[0];
    if(!menu.classList.contains('open')) {
        menu.classList.add('open');
        menu.removeEventListener("click", menuClicked);
        setTimeout(function(){ menu.addEventListener("click", menuClicked); }, 1200);
        let menu_mid = document.getElementsByClassName("menu_mid");
        menu_mid[0].classList.add('transitionable');
        setTimeout(function() { menu_mid[0].classList.remove('transitionable'); }, 250);
        showOverlay();
    } else {
        menu.classList.remove('open');
        menu.removeEventListener( "click", menuClicked);
        setTimeout(function(){ menu.addEventListener('click', menuClicked); }, 500);
        let menu_mid = document.getElementsByClassName("menu_mid");
        menu_mid[0].classList.add('transitionable');
        setTimeout(function() { menu_mid[0].classList.remove('transitionable'); }, 250);
        hideOverlay();
    }
}

function showOverlay() {
    hideContent();
    showOverlayMenu();
}

function hideOverlay() {
    showContent();
    hideOverlayMenu();
}

// fade-out content-a pri prikazivanju overlay menija
function hideContent() {
    let content = document.getElementsByClassName('content')[0];
    removeAnimations(content);
    content.classList.add('slide-content-out-overlay');

    let signature = document.getElementsByClassName('signature')[0];
    removeAnimations(signature);
    signature.classList.add('slide-signature-out-overlay');

    let logo = document.getElementById('logo');
    logo.style.visibility = 'hidden';
}

// prikazivanje overlay menija
function showOverlayMenu() {
    let overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
    overlay.style.zIndex = '2';

    let overlay_menu_links = document.getElementsByClassName('menu_items')[0].getElementsByTagName('a');

    for (let i = 0; i < overlay_menu_links.length; i++) {
        delay = (i / 7 + 0.5) + 's';
        overlay_menu_links[i].style.animation = "slide-in-overlay-items 0.25s ease-out " + delay + " both";
    }
}

// sakrivanje overlay menija
function hideOverlayMenu() {
    let overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
    overlay.style.zIndex = '-2';

    let overlay_menu_links = document.getElementsByClassName('menu_items')[0].getElementsByTagName('a');

    for (let i = 0; i < overlay_menu_links.length; i++) {
        overlay_menu_links[i].style.animation = "";
    }
}

// fade-in content-a posle gasenja overlay menija
function showContent() {
    let content = document.getElementsByClassName('content')[0];
    removeAnimations(content);
    content.classList.add('slide-content-in-overlay');

    let signature = document.getElementsByClassName('signature')[0];
    removeAnimations(signature);
    signature.classList.add('slide-content-in-overlay');
    
    let logo = document.getElementById('logo');
    logo.style.visibility = 'visible';
}

// skidanje svih animacija sa elementa radi ponovnog startovanja
function removeAnimations(element) {
    for (let i = 0; i < animationList.length; i++) {
        element.classList.remove(animationList[i]);
    }
}