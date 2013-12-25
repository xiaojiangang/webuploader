jQuery(function() {
    var body = document.body;

    if ( body.offsetHeight < body.scrollHeight ) {
        $('#footer').addClass('footer-fixed-bottom');
    }

    body = null;
});