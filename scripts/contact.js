document.addEventListener("DOMContentLoaded", function() {
    addEventListeners();
    /* fadeContentIn();  */
});

function addEventListeners() {
    let menu = document.getElementById('menu');
    menu.addEventListener("click", menuClicked, false);
}

// pritisnuto dugme za overlay meni
function menuClicked() {
    let menu = document.getElementById('menu');
    if(!menu.classList.contains('open')) {
        menu.classList.add('open');
        showOverlay();
    } else {
        menu.classList.remove('open');
        hideOverlay();
    }
}

function showOverlay() {
    fadeContentOut();
    showOverlayMenu();
}

function hideOverlay() {
    fadeContentIn();
    hideOverlayMenu();
}

// fade-out content-a pri prikazivanju overlay menija
function fadeContentOut() {
    let content = document.getElementsByClassName('content')[0];
    content.classList.remove('slide-in-left-back');
    content.classList.add('slide-out-left');
    let bg_logo = document.getElementById('bg_logo');
    bg_logo.classList.remove('slide-in-left-back');
    bg_logo.classList.add('slide-out-left');
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
        delay = (i * 0.15) + 's';
        overlay_menu_links[i].style.animation = "slide-in-right 0.25s ease-out " + delay + " both";
    }
}

// sakrivanje overlay menija
function hideOverlayMenu() {
    let overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
    overlay.style.zIndex = '-2';
    document.getElementsByClassName('menu_items')[0].classList.remove('slide-in-right-delay');

    let overlay_menu_links = document.getElementsByClassName('menu_items')[0].getElementsByTagName('a');

    for (let i = 0; i < overlay_menu_links.length; i++) {
        overlay_menu_links[i].style.animation = "";
    }
}

// fade-in content-a posle gasenja overlay menija
function fadeContentIn() {
    let content = document.getElementsByClassName('content')[0];
    content.classList.remove('slide-out-left');
    content.classList.add('slide-in-left-back');
    let bg_logo = document.getElementById('bg_logo');
    bg_logo.classList.remove('slide-out-left');
    bg_logo.classList.add('slide-in-left-back');
    let logo = document.getElementById('logo');
    logo.style.visibility = 'visible';
}
