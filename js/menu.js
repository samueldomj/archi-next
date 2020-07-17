$(function(){

    var header = document.getElementById('navegacion');
    var headroom = new Headroom(header);
    headroom.init();

    //Menu responsive
    //Calcula el ancho de la pagina
    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        btnMenu = $('#btn-responsive'),
        icono = $('#btn-responsive .icon');

        if (ancho < 992) {
            enlaces.hide();
            icono.addClass('fa-bars');
        }

        btnMenu.on('click', function(e){
            enlaces.slideToggle();
            icono.toggleClass('fa-bars');
            icono.toggleClass('fa-times');
        });

        $(window).on('resize', function(){
            if ($(this).width() > 992) {
                enlaces.show();
                icono.addClass('fa-times');
                icono.removeClass('fa-bars');
            } else {
                enlaces.hide();
                icono.addClass('fa-bars');
                icono.removeClass('fa-times');
            }
        });
});
