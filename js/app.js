$(document).foundation();
$("#selectForm_tabs").owlCarousel({
    rtl: true,
    loop: true,
    center: true,
    margin: 20,
    nav: false,
    dots: false,
    items: 4,
});
$('.categories_list').owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            margin: 10
        },
        350: {
            items: 3,
            margin: 10
        },
        500: {
            items: 4
        },
        800: {
            items: 5
        },
        1000: {
            items: 6
        }
    }
});
$('.news_slider').owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        350: {
            items: 1
        },
        500: {
            items: 2
        },
        800: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});
$('.customer_reviews_slider').owlCarousel({
    rtl: true,
    items: 1,
    loop: true,
    nav: true,
    dots: false
});

// Fazelab Script Section
// custom select
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
// ==================================


/**
 * Ripple effect mechanism
 */
$('body').on('click', '.ripple-effect', function (e) {
    // Ignore default behavior
    e.preventDefault();

    // Cache the selector
    var the_dom = $(this);

    // Get the limit for ripple effect
    var limit = the_dom.attr('data-ripple-limit');

    // Get custom color for ripple effect
    var color = the_dom.attr('data-ripple-color');
    if (typeof color == 'undefined') {
        var color = 'rgba( 255, 255, 255, 0.1 )';
    }

    // Get ripple radius
    var radius = the_dom.attr('data-ripple-wrap-radius');
    if (typeof radius == 'undefined') {
        var radius = 0;
    }

    // Get the clicked element and the click positions
    if (typeof limit == 'undefined') {
        var the_dom_limit = the_dom;
    } else {
        var the_dom_limit = the_dom.closest(limit);
    }

    var the_dom_offset = the_dom_limit.offset();
    var click_x = e.pageX;
    var click_y = e.pageY;

    // Get the width and the height of clicked element
    var the_dom_width = the_dom_limit.outerWidth();
    var the_dom_height = the_dom_limit.outerHeight();

    // Draw the ripple effect wrap
    var ripple_effect_wrap = $('<span class="ripple-effect-wrap"></span>');
    ripple_effect_wrap.css({
        'width': the_dom_width,
        'height': the_dom_height,
        'position': 'absolute',
        'top': the_dom_offset.top,
        'left': the_dom_offset.left,
        'z-index': 10000,
        'overflow': 'hidden',
        'background-clip': 'padding-box',
        '-webkit-border-radius': radius,
        'border-radius': radius
    });

    // Adding custom class, it is sometimes needed for customization
    var ripple_effect_wrap_class = the_dom.attr('data-ripple-wrap-class');

    if (typeof ripple_effect_wrap_class != 'undefined') {
        ripple_effect_wrap.addClass(ripple_effect_wrap_class);
    }

    // Append the ripple effect wrap
    ripple_effect_wrap.appendTo('body');

    // Determine the position of the click relative to the clicked element
    var click_x_ripple = click_x - the_dom_offset.left;
    var click_y_ripple = click_y - the_dom_offset.top;
    var circular_width = 1000;

    // Draw the ripple effect
    var ripple = $('<span class="ripple"></span>');
    ripple.css({
        'width': circular_width,
        'height': circular_width,
        'background': color,
        'position': 'absolute',
        'top': click_y_ripple - (circular_width / 2),
        'left': click_x_ripple - (circular_width / 2),
        'content': '',
        'background-clip': 'padding-box',
        '-webkit-border-radius': '50%',
        'border-radius': '50%',
        '-webkit-animation-name': 'ripple-animation',
        'animation-name': 'ripple-animation',
        '-webkit-animation-duration': '2s',
        'animation-duration': '2s',
        '-webkit-animation-fill-mode': 'both',
        'animation-fill-mode': 'both'
    });
    $('.ripple-effect-wrap:last').append(ripple);

    // Remove rippling component after half second
    setTimeout(function () {
        ripple_effect_wrap.fadeOut(function () {
            $(this).remove();
        });
    }, 500);

    // Get the href
    // Check target state and set default
    var href = the_dom.attr('href');
    var target = the_dom.attr('target');
    if (!target) {
        target = '_self';
    }
    // Safari appears to ignore all the effect if the clicked link is not prevented using preventDefault()
    // To overcome this, preventDefault any clicked link
    // If this isn't hash, redirect to the given link
    if (typeof href != 'undefined' && href.substring(0, 1) != '#') {
        setTimeout(function () {
            window.open(href, target);
        }, 200);
    }

    // Ugly manual hack to fix input issue
    if (the_dom.is('input') || the_dom.is('button')) {
        setTimeout(function () {
            the_dom.removeClass('ripple-effect');
            the_dom.trigger('click');
            the_dom.addClass('ripple-effect');
        }, 200);
    }

});
//   ====== end ripple effect


$('.owl-prev').addClass('mdi mdi-chevron-right').text('');
$('.owl-next').addClass('mdi mdi-chevron-left').text('');