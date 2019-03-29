function popup() {
    $('.popupClose, .overlay').on('click', function (event) {
        $('body').css('overflow', 'auto');
        $('.popup, .overlay, .popup__container, .nav-container').removeClass('visible');
    });

    // $(".popup__container >").click(function() {
    //     $('.popup').removeClass("visible");
    // });

    $(".form-reset").click(function() {
        $(this).closest('form').find('input').val('');
    });

    

    $(".popup, .popup__container").click(function(e) {
        if (e.target == this) {
            $('body').css('overflow', 'auto');
            $('.popup, .overlay, .header-menu, .humburger-overlay, .period').removeClass('visible');
        }
    });

    // if ($(".popup").hasClass('visible')) {
    //     $(".popup__container").addClass('visible');
    // } else {
    //     $(".popup__container").removeClass('visible');
    // }        

    $(".callPopup").on('click', function (event) {
        event.preventDefault();
        $('.popup, .overlay, .popup__container, .nav-container').removeClass('visible');
        var popup = $(this).attr('data-popupBlock');
        // if ($('.' + popup).hasClass('popup--notfixed')) {
        //     $('.' + popup).scroll(function () {
        //         $('.' + popup).css('top', $(window).scrollTop()+ "px");
        //     });
        // };
        $('body').css('overflow', 'hidden');
        $('.overlay').addClass('visible');
        $('.' + popup).addClass('visible');

    });
    $(".callPopupOnPopup").on('click', function (event) {
        event.preventDefault();
        var popup = $(this).attr('data-popupBlock');
        // if ($('.' + popup).hasClass('popup--notfixed')) {
        //     $('.' + popup).scroll(function () {
        //         $('.' + popup).css('top', $(window).scrollTop()+ "px");
        //     });
        // };
        $(this).closest(".popup").css("opacity", "0");
        $('body').css('overflow', 'hidden');
        $('.overlay').addClass('visible');
        $('.' + popup).addClass('visible');

    });

    $(".free").click(function() {
        var it = $(this);
        var img = it.attr("data-img");
        var floor = it.attr("data-floor");
        var apartment = it.attr("data-apartment");
        var ploshad = it.attr("data-ploshad");
        var rooms = it.attr("data-rooms");
        var price = it.attr("data-price");
        var otdelka = it.attr("data-otdelka");
        var north = it.attr("data-north");

        $(".hard-floor").text('');
        $(".hard-apartment").text('');
        $(".hard-ploshad").text('');
        $(".hard-rooms").text('');
        $(".hard-price").text('');
        $(".hard-otdelka").text('');
        $(".hard-north").attr("data-rotate", "");
        $(".hard-img").attr("src", '');
        $(".hard-img").closest('a').attr("href", '');
        
        $(".hard-floor").text(floor);
        $(".hard-apartment").text(apartment);
        $(".hard-ploshad").text(ploshad);
        $(".hard-rooms").text(rooms);
        $(".hard-price").text(price);
        $(".hard-otdelka").text(otdelka);
        $(".hard-north").attr("data-rotate", north);
        $(".hard-img").attr("src", img);
        $(".hard-img").closest('a').attr("href", img);
    });

    $(".callPopup-img").click(function() {
        var img = $(this).attr("href");
        var popupBlock = $(this).attr("data-popupBlock");
        $("." + popupBlock).find("img").attr("href", img);
    });

}