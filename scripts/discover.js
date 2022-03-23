
$(function () {
    // show loading screen while content loads
    if (!sessionStorage.getItem('discover-loaded')) {
        $('.loading').eq(0).css("visibility", "visible");
        loadImages();
        setTimeout(function() {
            if (can_display) displaySite();
        }, 3000);
        setTimeout(displaySite, 5000);
    }
    else {
        loadImages();
        setTimeout(displaySite, 200);
    }

    addEventListeners();
});

// document.addEventListener("DOMContentLoaded", function() {
//     if (!sessionStorage.getItem('upcoming_events-loaded')) {
//         $('.loading').eq(0).css("visibility", "visible");
//         loadImages();
//         setTimeout(function() {
//             if (can_display) showContentLoad();
//         }, 1500);
//         setTimeout(showContentLoad, 5000);
//     }
//     else {
//         loadImages();
//         showContentLoad();
//     }
//     addEventListeners();
    
// });

var loadedCount = 0; // number of resources currently loaded
var displayed = false; // content already displayed
var can_display = false; // can display content
const TO_LOAD_COUNT = 10; // number of resources to load
const SCROLL_SPEED_SECONDS = 1; // fullpage scroll speed
const TRANSITION_DURATION_SECONDS = 0.125;

// lista svih animacija koje se koriste (potrebna da bi se znalo sta sve treba purge-ovati)
const animationList = [
'slide-basic_info-in-initial', 'scale-line-in-vert', 'slide-desc-in-initial', 'slide-basic_info-out-overlay', 'slide-desc-out-overlay', 'slide-line-out-overlay', 'slide-basic_info-in-overlay', 'slide-line-in-overlay', 'slide-desc-in-overlay'];

function loadImages() {
    $('<img/>').attr('src', '../content/backgrounds/index/KIKI2324.jpg').on('load', function() {
        $(this).remove();
        loadedCount++;
        if (loadedCount == 1) can_display = true;
    });
}

function addEventListeners() {
    let menu = $('.menu').eq(0);
    menu.on('click', menuClicked);

    menu.on('mouseenter', function() {
        if (!menu[0].classList.contains('open')) {
            let lines = $('.menu div');
            for (let i = 0; i < lines.length; i++) {
                lines.eq(i).css('transition-delay', i * 0.125 + 's');
                lines.eq(i).css('transform', 'translateX(-70px)');
            }
        }
    });
    menu.on('mouseleave', function() {
        if (!menu[0].classList.contains('open')) {
            let lines = $('.menu div');
            for (let i = 0; i < lines.length; i++) {
                lines.eq(i).css('transition-delay', i * 0.125 + 's');
                lines.eq(i).css('transform', 'translateX(0)');
            }
        }
    });
}

function displaySite() {
    if (!displayed) {
        let overlay = $('#overlay');
        overlay.css("justify-content", "flex-start");
        overlay.css("transform", "translateX(-100vw)");
        setTimeout(function() { overlay.css("transition", "transform 0.125s"); }, 125);
        
        let loading = $('.loading').eq(0);
        loading.css("position", "absolute");
        loading.css("visibility", "hidden");

        $('.header').css('visibility', 'visible');

        sessionStorage.setItem('discover-loaded', true);
        showContentLoad();
        displayed = true;
    }
}

// fade-in content-a pri load-ovanju stranice
function showContentLoad() {
    document.getElementsByClassName('desc_logo')[0].classList.add('slide-basic_info-in-initial');
    // document.getElementsByClassName('line')[0].classList.add('scale-line-in-vert');
    document.getElementsByClassName('desc')[0].classList.add('slide-desc-in-initial');

    let shadow = document.getElementsByClassName('shadow')[0];
    shadow.style.transition = 'background 0.5s 0.5s';
    shadow.style.background = 'rgba(0, 0, 0, 0.77)';
}

// pritisnuto dugme za overlay meni
function menuClicked() {
    let menu = document.getElementsByClassName('menu')[0];
    if(!menu.classList.contains('open')) {
        menu.classList.add('open');
        menu.removeEventListener("click", menuClicked);
        setTimeout(function(){ menu.addEventListener("click", menuClicked); }, 1500);
        showOverlay();
    } else {
        menu.classList.remove('open');
        menu.removeEventListener( "click", menuClicked);
        setTimeout(function(){ menu.addEventListener('click', menuClicked); }, 500);
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
    let basic_info = document.getElementsByClassName('desc_logo')[0];
    removeAnimations(basic_info);
    basic_info.classList.add('slide-basic_info-out-overlay');

    let desc = document.getElementsByClassName('desc')[0];
    removeAnimations(desc);
    desc.classList.add('slide-line-out-overlay');

    // let line = document.getElementsByClassName('line')[0];
    // removeAnimations(line);
    // line.classList.add('slide-desc-out-overlay');

    // document.getElementsByClassName('next')[0].style.visibility = 'hidden';
    document.getElementsByClassName('header')[0].style.visibility = 'hidden';
    document.getElementsByClassName('menu')[0].style.visibility = 'visible';
}

// prikazivanje overlay menija
function showOverlayMenu() {
    let overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
    overlay.style.zIndex = '2';

    let overlay_menu_links =$('#overlay .menu_items a');
        
    overlay_menu_links.push($('#nftMobile')[0]);

    for (let i = 0; i < overlay_menu_links.length; i++) {
        delay = (i / 8 + 0.5) + 's';
        overlay_menu_links[i].style.animation = "slide-in-overlay-items 0.25s ease-out " + delay + " both";
    }
}

// sakrivanje overlay menija
function hideOverlayMenu() {
    let overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
    overlay.style.zIndex = '-2';

    let overlay_menu_links =$('#overlay .menu_items a');
        
    overlay_menu_links.push($('#nftMobile')[0]);

    for (let i = 0; i < overlay_menu_links.length; i++) {
        overlay_menu_links[i].style.animation = "";
    }
}

// fade-in content-a posle gasenja overlay menija
function showContent() {
    let basic_info = document.getElementsByClassName('desc_logo')[0];
    removeAnimations(basic_info);
    basic_info.classList.add('slide-basic_info-in-overlay');
    let desc = document.getElementsByClassName('desc')[0];
    removeAnimations(desc);
    desc.classList.add('slide-line-in-overlay');
    // let line = document.getElementsByClassName('line')[0];
    // removeAnimations(line);
    // line.classList.add('slide-desc-in-overlay');
    // document.getElementsByClassName('next')[0].style.visibility = 'visible';
    document.getElementsByClassName('header')[0].style.visibility = 'visible';
}

// skidanje svih animacija sa elementa radi ponovnog startovanja
function removeAnimations(element) {
    for (let i = 0; i < animationList.length; i++) {
        element.classList.remove(animationList[i]);
    }
}
