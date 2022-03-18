// var slideIndex = 1;
// showSlides(slideIndex);

// var infos = document.getElementsByClassName("basic_info");
// var images = document.getElementsByClassName("desc_pictures");
// infos[slideIndex - 1].classList.add("slide-basic_info-in-initial");
// images[slideIndex - 1].classList.add("slide-desc-in-initial");

// var background_images = ["bergerm_background.jpg", "levelup_background1.jpg", "Bake_background1.png", "getlow_background1.jpg",
//     "7DRing_background1.jpg", "gitar_background1.jpg", "friction_background1.jpg", "tropical_background1.png", "elekspade_background1.png", "JALABRAT_background1.jpg",
//     "Djekson_background1.jpg", "2bonakun_background1.png", "2bonabontoni_background1.png", "mreverethinng_background1.jpg", "jasonhardi_background1.png",
//     "micmc_background.jpg", "mackdames_background1.png"]

$(function () {
    /* loading ekran dok se slike ne ucitaju */
    if (!sessionStorage.getItem('references-loaded')) {
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
const TO_LOAD_COUNT = 18;
const SCROLL_SPEED_SECONDS = 1;
const IMAGE_HOVER_SECONDS = 0.25;

// lista svih animacija koje se koriste (potrebna da bi se znalo koje animacije treba ukloniti)
const animationList = ["slide-image-in-initial", "slide-desc-in-initial", "slide-image-in-scroll", "slide-desc-in-scroll", "show-header", "slide-image-out-overlay",
"slide-image-in-overlay", "slide-desc-out-overlay", "slide-desc-in-overlay", "slide-image-out-scroll", "slide-desc-out-scroll", "slide-image-in-scroll", "slide-desc-in-scroll",
"slide-gesture-out-scroll", "slide-gesture-in-scroll"]

function loadImages() {
    $('<img/>').attr('src', '../content/REFERENCES/2bonabontoni.png').on('load', function() {
        $(this).remove();
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/REFERENCES/2bonakun.png').on('load', function() {
        $(this).remove();
        loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/7DRing.JPG').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/Bake.png').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/DJArchitect.png').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/Djekson.JPG').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/elekspade.PNG').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/friction.JPG').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/getlow.JPG').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/gitar.JPG').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/JALA BRAT.JPG').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/jasonhardi.PNG').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/levelup.JPG').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/mackdames.png').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/mic mc.JPG').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/mreverethinng.JPG').on('load', function() {
            $(this).remove();
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/REFERENCES/tropical.PNG').on('load', function() {
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
    
            sessionStorage.setItem('references-loaded', true);
            showContentInitial();
            displayed = true;
        }
    }
    
    function addEventListeners() {
        let menu = document.getElementsByClassName('menu')[0];
        menu.addEventListener("click", menuClicked, false);
        let images = $('.image');
    
        for (let i = 0; i < images.length; i++) {
            images.eq(i).on('mouseenter', function() {
                imageEntered(i);
            });
            images.eq(i).on('mouseleave', function() {
                imageLeft(i);
            });
        }
    }
    
    function showContentInitial() {
        let header = $('.header');
        header[0].classList.add("show-header");
    
        let image = $('.image').eq(0);
        image[0].classList.add("slide-image-in-scroll");

        let name = $('.image_name').eq(0);
        name[0].classList.add("slide-image-in-scroll");
    
        let desc = $('.desc').eq(0);
        desc[0].classList.add("slide-desc-in-scroll");
    }
    
    function imageEntered(index) {
        let hover = $('.hover').eq(index);
        let add = $('.hover .add').eq(index);
        let g_calendar = $('.hover .g_calendar').eq(index);
    
        hover.css("background", "rgba(0, 0, 0, 0.37)");
        hover.css("transition", "background 0.5s");
    
        add.css("opacity", "1");
        add.css("transition", "opacity 0.5s");
    
        g_calendar.css("opacity", "1");
        g_calendar.css("transform", "scale(1)");
        g_calendar.css("transition", "transform 0.5s, opacity 0.5s");
        
    }
    
    function imageLeft(index) {
        let hover = $('.hover').eq(index);
        let add = $('.hover .add').eq(index);
        let g_calendar = $('.hover .g_calendar').eq(index);
    
        hover.css("background", "rgba(0, 0, 0, 0)");
        hover.css("transition", "background " + IMAGE_HOVER_SECONDS + "s");
    
        add.css("opacity", "0");
        add.css("transition", "opacity " + IMAGE_HOVER_SECONDS + "s");
    
        g_calendar.css("opacity", "0");
        g_calendar.css("transform", "scale(1.6)");
        g_calendar.css("transition", "transform " + IMAGE_HOVER_SECONDS + "s, opacity " + IMAGE_HOVER_SECONDS + "s");
    }
    
    // pritisnuto dugme za overlay meni
    function menuClicked() {
        let active_section = $('.active:eq(0)');
        if (active_section[0].classList.contains('fp-completely')) {
            let menu = document.getElementsByClassName('menu')[0];
            if(!menu.classList.contains('open')) {
                showOverlay();
            } else {
                hideOverlay();
            }
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
            let menu = document.getElementsByClassName('menu')[0];
            menu.classList.add('open');
            menu.removeEventListener("click", menuClicked);
            setTimeout(function(){ menu.addEventListener("click", menuClicked); }, 1500);
            let menu_mid = $('.menu_mid').eq(0);
            menu_mid[0].classList.add('transitionable');
            setTimeout(function() { menu_mid[0].classList.remove('transitionable'); }, 250);
    
            /* hide content */
            let logo = $("#logo");
            logo.css("visibility", "hidden");
    
            menu.style.visibility = 'visible';
    
            let image = $('.image').eq(i);
            removeAnimations(image[0]);
            image[0].classList.add("slide-image-out-overlay");
    
            let name = $('.image_name').eq(i);
            removeAnimations(name[0]);
            name[0].classList.add("slide-image-out-overlay");

            let desc = $('.desc').eq(i);
            removeAnimations(desc[0]);
            desc[0].classList.add("slide-desc-out-overlay");
            
            let scroll_gesture = $('.scroll_gesture').eq(i);
            removeAnimations(scroll_gesture[0]);
            scroll_gesture[0].classList.add("slide-gesture-out-overlay");    
    
            /* show overlay */
            setTimeout(function() {
                let overlay = document.getElementById('overlay');
                overlay.style.visibility = 'visible';
                overlay.style.zIndex = '2';
            
                let overlay_menu_links = document.getElementsByClassName('menu_items')[0].getElementsByTagName('a');
            
                for (let i = 0; i < overlay_menu_links.length; i++) {
                    delay = (i / 7 + 0.5) + 's';
                    overlay_menu_links[i].style.animation = "slide-in-overlay-items 0.25s ease-out " + delay + " both";
                }
            }, 125);
        
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
        let menu = document.getElementsByClassName('menu')[0];
        menu.classList.remove('open');
        menu.removeEventListener( "click", menuClicked);
        setTimeout(function(){ menu.addEventListener('click', menuClicked); }, 500);
        let menu_mid = $('.menu_mid').eq(0);
        menu_mid[0].classList.add('transitionable');
        setTimeout(function() { menu_mid[0].classList.remove('transitionable'); }, 250);
    
        /* hide overlay */
        let overlay = document.getElementById('overlay');
        overlay.style.visibility = 'hidden';
        overlay.style.zIndex = '-2';
        /* document.getElementsByClassName('menu_items')[0].classList.remove('slide-in-right-delay'); */
    
        let overlay_menu_links = document.getElementsByClassName('menu_items')[0].getElementsByTagName('a');
    
        for (let i = 0; i < overlay_menu_links.length; i++) {
            overlay_menu_links[i].style.animation = "";
        }
    
        fullpage_api.setAllowScrolling(true, 'down');
        fullpage_api.setAllowScrolling(true, 'up');
    
        /* show content */
        let logo = $("#logo");
        logo.css("visibility", "visible");
    
        let image = $('.image').eq(i);
        removeAnimations(image[0]);
        image[0].classList.add("slide-image-in-overlay");
    
        let name = $('.image_name').eq(i);
        removeAnimations(name[0]);
        name[0].classList.add("slide-image-out-overlay");

        let desc = $('.desc').eq(i);
        removeAnimations(desc[0]);
        desc[0].classList.add("slide-desc-in-overlay");
        
        let scroll_gesture = $('.scroll_gesture').eq(i);
        removeAnimations(scroll_gesture[0]);
        scroll_gesture[0].classList.add("slide-gesture-in-overlay"); 
    }
    
    // fade-out content-a pri prikazivanju overlay menija
    function hideContent() {
        let logo = $("#logo");
        logo.css("visibility", "hidden");
    
        let menu = document.getElementsByClassName('menu')[0];
        menu.style.visibility = 'visible';
    
        /* let section = $(".active");
        section.css("visibility", "hidden"); */
        let image = $('.image').eq(i);
        removeAnimations(nav[0]);
        image[0].classList.add("slide-image-out-overlay");
    
        let name = $('.image_name').eq(i);
        removeAnimations(name[0]);
        name[0].classList.add("slide-image-out-overlay");

        let desc = $('.desc').eq(i);
        removeAnimations(main[0]);
        desc[0].classList.add("slide-desc-out-overlay");
        
        let scroll_gesture = $('.scroll_gesture').eq(i);
        removeAnimations(scroll_gesture[0]);
        scroll_gesture[0].classList.add("slide-gesture-out-overlay");    
    }
    
    // prikazivanje overlay menija
    function showOverlayMenu() {
        setTimeout(function() {
            let overlay = document.getElementById('overlay');
            overlay.style.visibility = 'visible';
            overlay.style.zIndex = '2';
        
            let overlay_menu_links = document.getElementsByClassName('menu_items')[0].getElementsByTagName('a');
        
            for (let i = 0; i < overlay_menu_links.length; i++) {
                delay = (i / 7 + 0.5) + 's';
                overlay_menu_links[i].style.animation = "slide-in-overlay-items 0.25s ease-out " + delay + " both";
            }
        }, 125);
    
        fullpage_api.setAllowScrolling(false, 'down');
        fullpage_api.setAllowScrolling(false, 'up');
    }
    
    // sakrivanje overlay menija
    function hideOverlayMenu() {
        let overlay = document.getElementById('overlay');
        overlay.style.visibility = 'hidden';
        overlay.style.zIndex = '-2';
        /* document.getElementsByClassName('menu_items')[0].classList.remove('slide-in-right-delay'); */
    
        let overlay_menu_links = document.getElementsByClassName('menu_items')[0].getElementsByTagName('a');
    
        for (let i = 0; i < overlay_menu_links.length; i++) {
            overlay_menu_links[i].style.animation = "";
        }
    
        fullpage_api.setAllowScrolling(true, 'down');
        fullpage_api.setAllowScrolling(true, 'up');
    }
    
    // fade-in content-a posle gasenja overlay menija
    function showContent() {
        let logo = $("#logo");
        logo.css("visibility", "visible");
    
        /* let section = $(".active");
        section.css("visibility", "visible"); */
    
        let image = $('.image').eq(i);
        removeAnimations(nav[0]);
        image[0].classList.add("slide-image-in-overlay");
    
        let name = $('.image_name').eq(i);
        removeAnimations(name[0]);
        name[0].classList.add("slide-image-out-overlay");

        let desc = $('.desc').eq(i);
        removeAnimations(main[0]);
        desc[0].classList.add("slide-desc-in-overlay");
        
        let scroll_gesture = $('.scroll_gesture').eq(i);
        removeAnimations(scroll_gesture[0]);
        scroll_gesture[0].classList.add("slide-gesture-in-overlay"); 
    }
    
    // skidanje svih animacija sa elementa radi ponovnog startovanja
    function removeAnimations(element) {
        for (let i = 0; i < animationList.length; i++) {
            if (element.classList.contains(animationList[i])) element.classList.remove(animationList[i]);
        }
    }
    
    /* inicijalizacija fullpage-a */
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        fixedElements: '.header, #overlay, .footer', /* #discover */
        scrollingSpeed: SCROLL_SPEED_SECONDS * 1000,
        loopBottom: true,
        scrollBar: false,
        licenseKey: '6821F0C7-7DE34D29-B2F61DB6-BD3A10D9',
        onLeave: function(origin, destination, direction) {
            /* animate left section */
            let image = $('.image');
            removeAnimations(image.eq(origin.index)[0]);
            image.eq(origin.index)[0].classList.add("slide-image-out-scroll");
    
            let name = $('.image_name');
            removeAnimations(name.eq(origin.index)[0]);
            name.eq(origin.index)[0].classList.add("slide-image-out-scroll");

            let desc = $('.desc');
            removeAnimations(desc.eq(origin.index)[0]);
            desc.eq(origin.index)[0].classList.add("slide-desc-out-scroll");
    
            let scroll_gesture = $('.scroll_gesture');
            removeAnimations(scroll_gesture.eq(origin.index)[0]);
            scroll_gesture.eq(origin.index)[0].classList.add("slide-gesture-out-scroll");
    
            /* animate entered section */
            removeAnimations(scroll_gesture.eq(destination.index)[0]);
            scroll_gesture.eq(destination.index)[0].classList.add("slide-gesture-in-scroll");
            
            removeAnimations(desc.eq(destination.index)[0]);
            desc.eq(destination.index)[0].classList.add("slide-desc-in-scroll");
    
            removeAnimations(image.eq(destination.index)[0]);
            image.eq(destination.index)[0].classList.add("slide-image-in-scroll");

            removeAnimations(name.eq(destination.index)[0]);
            name.eq(destination.index)[0].classList.add("slide-image-in-scroll");
        },
        afterRender: function() {}
    });
    //methods
    fullpage_api.setAllowScrolling(true);