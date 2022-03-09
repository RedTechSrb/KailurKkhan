$(function () {
    /* loading ekran dok se slike ne ucitaju */
    if (!sessionStorage.getItem('index-loaded')) {
        $('.loading').eq(0).css("visibility", "visible");
        loadImages();
        setTimeout(function() {
            if (can_display) displaySite();
        }, 1500);
        setTimeout(displaySite, 5000);
    }
    else {
        loadImages();
        displaySite();
    }
    addEventListeners();
});

var loadedCount = 0;
var displayed = false;
var can_display = false;
const TO_LOAD_COUNT = 11;
const SCROLL_SPEED_SECONDS = 1;

// lista svih animacija koje se koriste (potrebna da bi se znalo koje animacije treba ukloniti)
const animationList = [
    'slide-nav-in-scroll', 'slide-main-in-scroll', 'slide-contact-in-scroll', 'slide-gesture-in-scroll', 'slide-gesture-out-scroll',
    'slide-contact-out-scroll', 'slide-main-out-scroll', 'slide-nav-out-scroll', 'slide-nav-out-overlay', 'slide-main-out-overlay', 
    'slide-contact-out-overlay', 'slide-gesture-out-overlay', 'slide-nav-in-overlay', 'slide-main-in-overlay', 'slide-contact-in-overlay', 
    'slide-gesture-in-overlay'
];

function loadImages() {
    $('<img/>').attr('src', '../content/backgrounds/index/yachting_bg.jpg').on('load', function() {
        $(this).remove();
        /* $('.yachting .bg').css('background-image', 'url(../content/backgrounds/index/yachting_bg.jpg)'); */
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/backgrounds/index/travel_bg.jpg').on('load', function() {
        $(this).remove();
        /* $('.travel .bg').css('background-image', 'url(../content/backgrounds/index/travel_bg.jpg)'); */
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/backgrounds/index/entertainment_bg.jpg').on('load', function() {
        $(this).remove();
        /* $('.entertainment .bg').css('background-image', 'url(../content/backgrounds/index/entertainment_bg.jpg)'); */
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/backgrounds/index/sports_bg.jpg').on('load', function() {
        $(this).remove();
        /* $('.sports .bg').css('background-image', 'url(../content/backgrounds/index/sports_bg.jpg)'); */
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/backgrounds/index/transport_bg.jpg').on('load', function() {
        $(this).remove();
        /* $('.transport .bg').css('background-image', 'url(../content/backgrounds/index/transport_bg.jpg)'); */
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/backgrounds/index/celebrations_bg.jpg').on('load', function() {
        $(this).remove();
        /* $('.celebrations .bg').css('background-image', 'url(../content/backgrounds/index/celebrations_bg.jpg)'); */
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/backgrounds/index/luxury_items_bg.jpg').on('load', function() {
        $(this).remove();
        /* $('.luxury_items .bg').css('background-image', 'url(../content/backgrounds/index/luxury_items_bg.jpg)'); */
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/backgrounds/index/wellness_bg.jpg').on('load', function() {
        $(this).remove();
        /* $('.wellness .bg').css('background-image', 'url(../content/backgrounds/index/wellness_bg.jpg)'); */
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/backgrounds/index/events_bg.jpg').on('load', function() {
        $(this).remove();
        /* $('.events .bg').css('background-image', 'url(../content/backgrounds/index/events_bg.jpg)'); */
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/backgrounds/index/networking_bg.jpg').on('load', function() {
        $(this).remove();
        /* $('.networking .bg').css('background-image', 'url(../content/backgrounds/index/networking_bg.jpg)'); */
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/images/7D_logo.png').on('load', function() {
        $(this).remove();
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
}

function displaySite() {
    if (!displayed) {
        let overlay = $('#overlay');
        overlay.css("z-index", "-2");
        overlay.css("visibility", "hidden");
        
        let loading = $('.loading').eq(0);
        loading.css("position", "absolute");
        loading.css("visibility", "hidden");

        let menu_items = $('.menu_items').eq(0);
        menu_items.css("position", "static");
        menu_items.css("visibility", "visible");

        sessionStorage.setItem('index-loaded', true);
        showContentInitial();
        displayed = true;
    }
}

function addEventListeners() {
    let menu = $('.menu').eq(0);
    menu.on('click', menuClicked);

    let nav_links = $('.nav_item span');
    for (let i = 0; i < nav_links.length; i++) {
        nav_links.eq(i).on('click', navLinkClicked);
    }
}

function showContentInitial() {
    let header = $('.header');
        header[0].classList.add("show-header");
        
        let nav = $('.yachting nav');
        nav[0].classList.add("slide-nav-in-scroll");


        /* let select_indicators = $('.yachting .select_indicator');
        select_indicators.css("transform", "translateY(0)");
        select_indicators.css("opacity", "1");
        select_indicators.css("transition", "transform 0.8s ease-out, opacity 0.8s ease-out"); */
        
        /* let select_indicators = $('.yachting .select_indicators .select_indicator');
        for (let i = 0; i < select_indicators.length; i++) {
            select_indicators.eq(i).css("transform", "translateY(0)");
            select_indicators.eq(i).css("opacity", "1");
            select_indicators.eq(i).css("transition", "transform 0.5s ease-out " + i * 0.033 + "s, opacity 0.5s ease-out " + i * 0.033 + "s");
        } */

        /* let nav_items = $('.yachting .nav_items .nav_item');
        for (let i = 0; i < nav_items.length; i++) {
            nav_items.eq(i).css("transform", "translateY(0)");
            nav_items.eq(i).css("opacity", "1");
            nav_items.eq(i).css("transition", "transform 0.5s ease-out " + i * 0.033 + "s, opacity 0.5s ease-out " + i * 0.033 + "s");
        }
        setTimeout(function() { nav_items.css("transition", "none"); }, 800); */

        let main = $('.yachting .main');
        main[0].classList.add("slide-main-in-scroll");

        /* let heading = $('.yachting .heading');
        let text = $('.yachting .text');
        let discover = $('.yachting .main_btn');

        heading.css("transform", "translateY(0)");
        heading.css("opacity", "1");
        heading.css("transition", "transform 0.5s ease-out, opacity 0.5s ease-out");

        text.css("transform", "translateY(0)");
        text.css("opacity", "1");
        text.css("transition", "transform 0.5s ease-out 0.15s, opacity 0.5s ease-out 0.15s");

        discover.css("transform", "translateY(0)");
        discover.css("opacity", "1");
        discover.css("transition", "transform 0.5s ease-out 0.3s, opacity 0.5s ease-out 0.3s"); */


        let contact = $('.yachting .contact');
        contact[0].classList.add("slide-contact-in-scroll");

        /* let contacts = $('.yachting .contact a');
        for (let i = 0; i < contacts.length; i++) {
            console.log(i);
            contacts.eq(i).css("transform", "translateY(0)");
            contacts.eq(i).css("opacity", "1");
            contacts.eq(i).css("transition", "transform 0.7s ease-out " + 0.1 * i + "s, opacity 0.7s ease-out " + 0.1 * i + "s");
        } */

        let scroll_gesture = $('.yachting .scroll_gesture');
        scroll_gesture[0].classList.add("slide-gesture-in-scroll");

        /* let scroll_gesture = $('.yachting .scroll_gesture');
        scroll_gesture.css("transform", "translateY(0)");
        scroll_gesture.css("opacity", "1");
        scroll_gesture.css("transition", "transform 0.5s ease-out 0.3s, opacity 0.5s ease-out 0.3s"); */
}

function navLinkClicked() {
    let classList = this.classList;
    if (classList.contains('nav_yachting')) {
        fullpage_api.moveTo(1);
    }
    else if (classList.contains('nav_travel')) {
        fullpage_api.moveTo(2);
    }
    else if (classList.contains('nav_entertainment')) {
        fullpage_api.moveTo(3);
    }
    else if (classList.contains('nav_sport')) {
        fullpage_api.moveTo(4);
    }
    else if (classList.contains('nav_transport')) {
        fullpage_api.moveTo(5);
    }
    else if (classList.contains('nav_celebrations')) {
        fullpage_api.moveTo(6);
    }
    else if (classList.contains('nav_luxury_items')) {
        fullpage_api.moveTo(7);
    }
    else if (classList.contains('nav_wellness')) {
        fullpage_api.moveTo(8);
    }
    else if (classList.contains('nav_events')) {
        fullpage_api.moveTo(9);
    }
    else if (classList.contains('nav_networking')) {
        fullpage_api.moveTo(10);
    }
}

// skidanje svih animacija sa elementa radi ponovnog startovanja
function removeAnimations(element) {
    for (let i = 0; i < animationList.length; i++) {
        if (element.classList.contains(animationList[i])) element.classList.remove(animationList[i]);
    }
}

function menuClicked() {
    let menu = document.getElementsByClassName('menu')[0];
    if(!menu.classList.contains('open')) {
        showOverlay();
    } else {
        hideOverlay();
    }
}

function showOverlay() {
    let active_section = $('.active:eq(0)');
    let sections = $('.section');
    if (active_section[0].classList.contains('fp-completely')) {
        let i = 0;
        for (i; i < sections.length; i++) {
            if (sections.eq(i)[0].classList.contains("active")) break;
        }

        /* animate menu */
        let menu = $('.menu').eq(0);
        menu[0].classList.add('open');
        menu.off("click", menuClicked);
        setTimeout(function(){ menu.on("click", menuClicked); }, 1500);
        let menu_mid = $('.menu_mid').eq(0);
        menu_mid[0].classList.add('transitionable');
        setTimeout(function() { menu_mid[0].classList.remove('transitionable'); }, 250);

        /* hide content */
        let nav = $('nav').eq(i);
        removeAnimations(nav[0]);
        nav[0].classList.add("slide-nav-out-overlay");

        let main = $('.main').eq(i);
        removeAnimations(main[0]);
        main[0].classList.add("slide-main-out-overlay");

        let contact = $('.contact').eq(i);
        removeAnimations(contact[0]);
        contact[0].classList.add("slide-contact-out-overlay");
        
        let scroll_gesture = $('.scroll_gesture').eq(i);
        removeAnimations(scroll_gesture[0]);
        scroll_gesture[0].classList.add("slide-gesture-out-overlay");

        $('.header').css('visibility', 'hidden');
        menu.css('visibility', 'visible');

        /* show overlay */
        setTimeout(function() {
            let overlay = $('#overlay');
            overlay.css('z-index', '1');
            overlay.css('visibility', 'visible');
    
            let overlay_menu_links = $('#overlay .menu_items a');
            overlay_menu_links.css('transform', 'translateX(0)');
            overlay_menu_links.css('opacity', '1');
            for (let i = 0; i < overlay_menu_links.length; i++) {
                delay = (i / 7 + 0.5) + 's';
                overlay_menu_links[i].style.animation = "slide-in-overlay-items 0.25s ease-out " + delay + " both";
            }
        }, 125);

        /* disallow scrolling */
        fullpage_api.setAllowScrolling(false, 'down');
        fullpage_api.setAllowScrolling(false, 'up');
    } 
}

function hideOverlay() {
    let sections = $('.section');
    var i = 0;
    for (i; i < sections.length; i++) {
        if (sections.eq(i)[0].classList.contains("active")) break;
    }

    /* animate menu */
    let menu = $('.menu').eq(0);
    menu[0].classList.remove('open');
    menu.css('visibility', 'visible');
    menu.off( "click", menuClicked);
    setTimeout(function(){ menu.on('click', menuClicked); }, 500);
    let menu_mid = $('.menu_mid').eq(0);
    menu_mid[0].classList.add('transitionable');
    setTimeout(function() { menu_mid[0].classList.remove('transitionable'); }, 250);

    /* hide overlay */
    let overlay = $('#overlay');
    overlay.css('z-index', '-1');

    let overlay_menu_links = $('#overlay .menu_items a');
    for (let i = 0; i < overlay_menu_links.length; i++) {
        overlay_menu_links.eq(i)[0].style.animation = "";
    }

    /* show content */
    $('.header').css('visibility', 'visible');

    let nav = $('nav').eq(i);
    removeAnimations(nav[0]);
    nav[0].classList.add("slide-nav-in-overlay");

    let main = $('.main').eq(i);
    removeAnimations(main[0]);
    main[0].classList.add("slide-main-in-overlay");

    let contact = $('.contact').eq(i);
    removeAnimations(contact[0]);
    contact[0].classList.add("slide-contact-in-overlay");

    let scroll_gesture = $('.scroll_gesture').eq(i);
    removeAnimations(scroll_gesture[0]);
    scroll_gesture[0].classList.add("slide-gesture-in-overlay");

    /* allow scrolling */
    fullpage_api.setAllowScrolling(true, 'down');
    fullpage_api.setAllowScrolling(true, 'up');
}

/* inicijalizacija fullpage-a */
new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    fixedElements: '.header, #overlay',
    scrollingSpeed: SCROLL_SPEED_SECONDS * 1000,
    loopBottom: true,
    scrollBar: false,
    licenseKey: '6821F0C7-7DE34D29-B2F61DB6-BD3A10D9',
    onLeave: function(origin, destination, direction) { /* animacije pri napustanju jedne i ulaska u drugu stranicu */
        /* animate left section */
        let menus = $('nav');
        removeAnimations(menus.eq(origin.index)[0]);
        menus.eq(origin.index)[0].classList.add("slide-nav-out-scroll");

        let mains = $('.main');
        removeAnimations(mains.eq(origin.index)[0]);
        mains.eq(origin.index)[0].classList.add("slide-main-out-scroll");

        let contacts = $('.contact');
        removeAnimations(contacts.eq(origin.index)[0]);
        contacts.eq(origin.index)[0].classList.add("slide-contact-out-scroll");

        let scroll_gestures = $('.scroll_gesture');
        removeAnimations(scroll_gestures.eq(origin.index)[0]);
        scroll_gestures.eq(origin.index)[0].classList.add("slide-gesture-out-scroll");

        /* parallax */
        let bgs = $('.bg');
        bgs.eq(origin.index).css("transform", "scale(1.2)");
        bgs.eq(origin.index).css("transform-origin", "top center");
        bgs.eq(origin.index).css("transition", "transform " + SCROLL_SPEED_SECONDS + 's ease-in');

        /* animate entered section */
        bgs.eq(destination.index).css("transform", "scale(1)");
        bgs.eq(destination.index).css("transform-origin", "top center");
        bgs.eq(destination.index).css("transition", "transform " + SCROLL_SPEED_SECONDS + 's ease-out');

        removeAnimations(scroll_gestures.eq(destination.index)[0]);
        scroll_gestures.eq(destination.index)[0].classList.add("slide-gesture-in-scroll");

        removeAnimations(contacts.eq(destination.index)[0]);
        contacts.eq(destination.index)[0].classList.add("slide-contact-in-scroll");
        
        removeAnimations(mains.eq(destination.index)[0]);
        mains.eq(destination.index)[0].classList.add("slide-main-in-scroll");

        removeAnimations(menus.eq(destination.index)[0]);
        menus.eq(destination.index)[0].classList.add("slide-nav-in-scroll");
    },
    afterRender: function() {}
});
//methods
fullpage_api.setAllowScrolling(true);