import $ from 'jquery';
// Enable hamburger dropdown menu on click
$('.hamburger').on("click", function(){
    $('.links').toggleClass('show')
})

// If window changes from mobile to desktop view
function windowChange (){
    if ($(window).width() >= 649) {
        $('.links').removeClass('show')
    }
}

$(window).resize(windowChange)
