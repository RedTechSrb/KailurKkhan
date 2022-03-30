$(function () {
    /* loading ekran dok se slike ne ucitaju */
    if (!sessionStorage.getItem('upcoming_events-loaded')) {
        $('.loading').eq(0).css("visibility", "visible");
        loadImages();
        if(isMobile()){
            $('.load_bar').eq(0).css("width", "75%");
        }
        else{
            $('.load_bar').eq(0).css("width", "100%");
        }
        setTimeout(function() {
            if (can_display) displaySite();
        }, 1500);
        setTimeout(displaySite, 3000);
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
const TO_LOAD_COUNT = 2;
const SCROLL_SPEED_SECONDS = 1;
const IMAGE_HOVER_SECONDS = 0.25;

// lista svih animacija koje se koriste (potrebna da bi se znalo koje animacije treba ukloniti)
const animationList = ["slide-image-in-initial", "slide-desc-in-initial", "slide-image-in-scroll", "slide-desc-in-scroll", "show-header", "slide-image-out-overlay",
"slide-image-in-overlay", "slide-desc-out-overlay", "slide-desc-in-overlay", "slide-image-out-scroll", "slide-desc-out-scroll", "slide-image-in-scroll", "slide-desc-in-scroll",
"slide-gesture-out-scroll", "slide-gesture-in-scroll", 'slide-in-top-scroll', 'slide-out-top-scroll']

function loadImages() {
    $('<img/>').attr('src', '../content/images/2Bona (As Seen On).png').on('load', function() {
        $(this).remove();
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
    $('<img/>').attr('src', '../content/images/MICMC(As Seen On).png').on('load', function() {
        $(this).remove();
        loadedCount++;
        if (loadedCount == TO_LOAD_COUNT) can_display = true;
    });
}

function isMobile() {
    let agent = navigator.userAgent||navigator.vendor||window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(agent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agent.substr(0,4));
}

function displaySite() {
    if (!displayed) {
        let overlay = $('#overlay');
        overlay.css("z-index", "-2");
        overlay.css("visibility", "hidden");
        
        let loading = $('.loading').eq(0);
        loading.css("position", "absolute");
        loading.css("visibility", "hidden");

        let menu_items = $('.menudiv').eq(0);
        menu_items.css("position", "static");
        menu_items.css("visibility", "visible");

        $('.load_bar').eq(0).css("width", "100%");

        sessionStorage.setItem('upcoming_events-loaded', true);
        showContentInitial();
        displayed = true;
    }
}

function addEventListeners() {
    let menu = $('.menu').eq(0);
    menu.on('click', menuClicked);

    // menu animation
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

    let desc = $('.desc').eq(0);
    desc[0].classList.add("slide-desc-in-scroll");

    let scroll_gesture = $('.scroll_gesture');
    scroll_gesture[0].classList.add("slide-in-top-scroll");
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

        // animate menu
        let menu = $('.menu').eq(0);
        menu[0].classList.add('open');

        let lines = $('.menu div');
        for (let i = 0; i < lines.length; i++) {
            lines.eq(i).css('transition-delay', '0s');
            lines.eq(i).css('transform', 'translate(0, 50px)');
        }

        let arrow = $('.menu img');
        arrow.eq(0).css('transform', 'translate(0, 0)');

        /* hide content */
        let logo = $("#logo");
        logo.css("visibility", "hidden");

        menu.css("visibility", 'visible') ;

        let image = $('.image').eq(i);
        removeAnimations(image[0]);
        image[0].classList.add("slide-image-out-overlay");

        let desc = $('.desc').eq(i);
        removeAnimations(desc[0]);
        desc[0].classList.add("slide-desc-out-overlay");
        
        // let scroll_gesture = $('.scroll_gesture').eq(i);
        // removeAnimations(scroll_gesture[0]);
        // scroll_gesture[0].classList.add("slide-gesture-out-overlay");    

        let overlay = $('#overlay');
        overlay.css('z-index', '1');
        overlay.css('visibility', 'visible');

        let overlay_menu_links = $('#overlay .menu_items a');
        overlay_menu_links.css('transform', 'translateX(0)');
        overlay_menu_links.css('opacity', '1');
        for (let i = 0; i < overlay_menu_links.length; i++) {
            delay = (i / 7 + 0.5) + 's';
            overlay_menu_links[i].style.animation = "slide-in-overlay-items 0.25s ease-out";
        }
    
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

    let lines = $('.menu div');
    for (let i = 0; i < lines.length; i++) {
        lines.eq(i).css('transition-delay', i * 0.125 + 's');
        lines.eq(i).css('transform', 'translate(0, 0)');
    }

    let arrow = $('.menu img');
    arrow.eq(0).css('transform', 'translate(0, -50px)');

    /* hide overlay */
    let overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
    overlay.style.zIndex = '-2';
    /* document.getElementsByClassName('menu_items')[0].classList.remove('slide-in-right-delay'); */

    let overlay_menu_links = $('#overlay .menu_items a');
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

    let desc = $('.desc').eq(i);
    removeAnimations(desc[0]);
    desc[0].classList.add("slide-desc-in-overlay");
    
    // let scroll_gesture = $('.scroll_gesture').eq(i);
    // removeAnimations(scroll_gesture[0]);
    // scroll_gesture[0].classList.add("slide-gesture-in-overlay"); 
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

    let desc = $('.desc').eq(i);
    removeAnimations(main[0]);
    desc[0].classList.add("slide-desc-out-overlay");
    
    // let scroll_gesture = $('.scroll_gesture').eq(i);
    // removeAnimations(scroll_gesture[0]);
    // scroll_gesture[0].classList.add("slide-gesture-out-overlay");    
}

// prikazivanje overlay menija
function showOverlayMenu() {
    setTimeout(function() {
        let overlay = document.getElementById('overlay');
        overlay.style.visibility = 'visible';
        overlay.style.zIndex = '2';
    
        let overlay_menu_links =$('#overlay .menu_items a');
        
        overlay_menu_links.push($('#nftMobile')[0]);
        for (let i = 0; i < overlay_menu_links.length; i++) {
            delay = (i / 8 + 0.5) + 's';
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

    let overlay_menu_links = $('#overlay .menu_items a');
    
    overlay_menu_links.push($('#nftMobile')[0]);
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

        let desc = $('.desc');
        removeAnimations(desc.eq(origin.index)[0]);
        desc.eq(origin.index)[0].classList.add("slide-desc-out-scroll");

        let scroll_gestures = $('.scroll_gesture');
        removeAnimations(scroll_gestures.eq(origin.index)[0]);
        scroll_gestures.eq(origin.index)[0].classList.add("slide-out-top-scroll");
        
        removeAnimations(scroll_gestures.eq(destination.index)[0]);
        scroll_gestures.eq(destination.index)[0].classList.add("slide-in-top-scroll");
        
        removeAnimations(desc.eq(destination.index)[0]);
        desc.eq(destination.index)[0].classList.add("slide-desc-in-scroll");

        removeAnimations(image.eq(destination.index)[0]);
        image.eq(destination.index)[0].classList.add("slide-image-in-scroll");


    },
    afterRender: function() {}
});
//methods
fullpage_api.setAllowScrolling(true);