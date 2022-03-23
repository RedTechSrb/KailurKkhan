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
const TO_LOAD_COUNT = 3;
const SCROLL_SPEED_SECONDS = 1;

// lista svih animacija koje se koriste (potrebna da bi se znalo koje animacije treba ukloniti)
const animationList = [
    'slide-nav-in-scroll', 'slide-main-in-scroll', 'slide-contact-in-scroll', 'slide-gesture-in-scroll', 'slide-gesture-out-scroll',
    'slide-contact-out-scroll', 'slide-main-out-scroll', 'slide-nav-out-scroll', 'slide-nav-out-overlay', 'slide-main-out-overlay', 
    'slide-contact-out-overlay', 'slide-gesture-out-overlay', 'slide-nav-in-overlay', 'slide-main-in-overlay', 'slide-contact-in-overlay', 
    'slide-gesture-in-overlay', 'slide-in-top-scroll', 'slide-out-top-scroll'
];

function isMobile() {
    let agent = navigator.userAgent||navigator.vendor||window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(agent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agent.substr(0,4));
}

function loadImages() {

    if(isMobile()){
        $('<img/>').attr('src', '../content/backgrounds/index/AS SEEN ON (HOME).png').on('load', function() {
            $(this).remove();
            /* $('.yachting .bg').css('background-image', 'url(../content/backgrounds/index/yachting_bg.jpg)'); */
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/backgrounds/index/HOME(MOBILE).jpg').on('load', function() {
            $(this).remove();
            /* $('.travel .bg').css('background-image', 'url(../content/backgrounds/index/travel_bg.jpg)'); */
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/backgrounds/index/REFERENCES (MOBILE).png').on('load', function() {
            $(this).remove();
            /* $('.entertainment .bg').css('background-image', 'url(../content/backgrounds/index/entertainment_bg.jpg)'); */
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });

    }
    else{
        $('<img/>').attr('src', '../content/backgrounds/index/HOME(DESKTOP).jpg').on('load', function() {
            $(this).remove();
            /* $('.yachting .bg').css('background-image', 'url(../content/backgrounds/index/yachting_bg.jpg)'); */
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/backgrounds/index/As Seen On(DESKTOP).png').on('load', function() {
            $(this).remove();
            /* $('.travel .bg').css('background-image', 'url(../content/backgrounds/index/travel_bg.jpg)'); */
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
        $('<img/>').attr('src', '../content/backgrounds/index/REFERENCES (DESKTOP).png').on('load', function() {
            $(this).remove();
            /* $('.entertainment .bg').css('background-image', 'url(../content/backgrounds/index/entertainment_bg.jpg)'); */
            loadedCount++;
            if (loadedCount == TO_LOAD_COUNT) can_display = true;
        });
    
    }
    
   

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

        sessionStorage.setItem('index-loaded', true);
        showContentInitial();
        displayed = true;
    }
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

function showContentInitial() {
    let header = $('.header');
        header[0].classList.add("show-header");
        
        let nav = $('.yachting .page_number');
        nav[0].classList.add("slide-nav-in-scroll");

        let main = $('.yachting .main');
        main[0].classList.add("slide-main-in-scroll");

        let contact = $('.yachting .contact');
        contact[0].classList.add("slide-contact-in-scroll");

    
        let scroll_gesture = $('.scroll_gesture');
        scroll_gesture[0].classList.add("slide-in-top-scroll");

        /* let scroll_gesture = $('.yachting .scroll_gesture');
        scroll_gesture.css("transform", "translateY(0)");
        scroll_gesture.css("opacity", "1");
        scroll_gesture.css("transition", "transform 0.5s ease-out 0.3s, opacity 0.5s ease-out 0.3s"); */
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

        let logo = $('#logo');
        logo.css('visibility', 'hidden');

        // show overlay
        let overlay = $('#overlay');
        overlay.css('transform', 'translateX(0)');


        let main = $('.main').eq(i);
        removeAnimations(main[0]);
        main[0].classList.add("slide-main-out-overlay");

        let contact = $('.contact').eq(i);
        removeAnimations(contact[0]);
        contact[0].classList.add("slide-contact-out-overlay");
        
        // let scroll_gesture = $('.scroll_gesture').eq(i);
        // removeAnimations(scroll_gesture[0]);
        // scroll_gesture[0].classList.add("slide-out-top-scroll");

        $('.header').css('visibility', 'hidden');
        menu.css('visibility', 'visible');
        $('.footer').css('visibility', 'hidden');
        $('.reserved').css('visibility', 'hidden');

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

    // animate menu
    let menu = $('.menu').eq(0);
    menu[0].classList.remove('open');

    let lines = $('.menu div');
    for (let i = 0; i < lines.length; i++) {
        lines.eq(i).css('transition-delay', i * 0.125 + 's');
        lines.eq(i).css('transform', 'translate(0, 0)');
    }

    let arrow = $('.menu img');
    arrow.eq(0).css('transform', 'translate(0, -50px)');
    
    let logo = $('#logo');
    logo.css('visibility', 'visible');

    /* hide overlay */
    let overlay = $('#overlay');
    overlay.css('z-index', '-1');

    let overlay_menu_links = $('#overlay .menu_items a');
    for (let i = 0; i < overlay_menu_links.length; i++) {
        overlay_menu_links.eq(i)[0].style.animation = "";
    }

    /* show content */
    $('.header').css('visibility', 'visible');
    $('.footer').css('visibility', 'visible');
    $('.reserved').css('visibility', 'visible');

    let nav = $('.page_number').eq(i);
    removeAnimations(nav[0]);
    nav[0].classList.add("slide-nav-in-overlay");

    let main = $('.main').eq(i);
    removeAnimations(main[0]);
    main[0].classList.add("slide-main-in-overlay");

    let contact = $('.contact').eq(i);
    removeAnimations(contact[0]);
    contact[0].classList.add("slide-contact-in-overlay");

    // let scroll_gesture = $('.scroll_gesture').eq(i);
    // removeAnimations(scroll_gesture[0]);
    // scroll_gesture[0].classList.add("slide-in-top-scroll");

    /* allow scrolling */
    fullpage_api.setAllowScrolling(true, 'down');
    fullpage_api.setAllowScrolling(true, 'up');
}

/* inicijalizacija fullpage-a */
new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    fixedElements: '.header, #overlay, .footer, .reserved',
    scrollingSpeed: SCROLL_SPEED_SECONDS * 1000,
    loopBottom: true,
    scrollBar: false,
    licenseKey: '6821F0C7-7DE34D29-B2F61DB6-BD3A10D9',
    onLeave: function(origin, destination, direction) { /* animacije pri napustanju jedne i ulaska u drugu stranicu */
        /* animate left section */
        let menus = $('.page_number');
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
        scroll_gestures.eq(origin.index)[0].classList.add("slide-out-top-scroll");

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
        scroll_gestures.eq(destination.index)[0].classList.add("slide-in-top-scroll");

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