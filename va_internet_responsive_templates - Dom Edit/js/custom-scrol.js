$(document).ready(function() {

// Height and footer settings
var header_height = 263; // px
var footer_height = 341; // px

// Store so jquery only has to find it once
var shareFloat = $("#shareFloat");

// Set initial position
$("#shareFloat").css("top", header_height + "px");

// Attach to window's scroll event
$(window).scroll(function() {
    st = $(this).scrollTop();
    dh = $(document).height();
    wh = $(window).height();
    bh = $("#shareFloat").height();
    h = dh - wh;
    fh = footer_height - dh + st + wh;

    // Is the header still in view?
    if (st < header_height) {
        $("#shareFloat").css({"top": header_height - st + "px", "bottom": "auto"});

    // Is the footer in view?
    } else if (wh - fh < bh) {
        $("#shareFloat").css({"top": "auto", "bottom": fh - 80 + "px"});

    // Are neither the footer or header in view?
    } else {
        $("#shareFloat").css({"top": 0, "bottom": "auto"});
    }

});

})
