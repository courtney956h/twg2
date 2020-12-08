(function($) {

    $('#wrap').on('click', '.depth1 .common h4 > a, .nav_left li a', function() {
        var url = this.href;
        $('#container > #content').remove();
        $('#container').load(url + " #content");
        return false
    })


    // findtea.html 부분 - slick으로 따로 호출
    $('#wrap').on('click', '.depth1 .findtea h4 > a', function() {
        var url = this.href;
        $('#container > #content').remove();
        $('#container').load(url + " #content", function() {
            // findtea slick-slide
            $('.findInner').slick({
                autoplay:true,
                dots:false,
                autoplaySpeed:4500,
                slidesToShow:5,
                slidesToScroll:1,
                pauseOnHover:true,
                pauseOnDotsHover:true,
                pauseOnFocus:true,
                draggable:true,
                fade:false,
                arrows:true,
                prevArrow:'<button class="prevArrow marrow"><img src="images/arrow-prev.png" alt=""></button>',
                nextArrow:'<button class="nextArrow marrow"><img src="images/arrow-next.png" alt=""></button>'
            });
        });
        return false
    })

    // nav_left에 속한 li (gifts, news, location.html) 따로 호출
    $('#wrap').on('click', '.nav_left li a', function() {
        var url = this.href;
        $('#container > #content').remove();
        $('#container').load(url + " #content", function(){
            // news.html의 topic
            $('.topic').on('click', function() {
                $('.topic_list').stop().slideToggle(300)
                return false
            });

            // news.html
            $('.newsInner').slick({
                autoplay:true,
                dots:false,
                autoplaySpeed:4500,
                slidesToShow:3,
                slidesToScroll:1,
                pauseOnHover:true,
                pauseOnDotsHover:true,
                pauseOnFocus:true,
                draggable:true,
                fade:false,
                arrows:true,
                prevArrow:'<button class="prevArrow marrow"><img src="images/arrow-prev.png" alt=""></button>',
                nextArrow:'<button class="nextArrow marrow"><img src="images/arrow-next.png" alt=""></button>'
            });
        });
        return false
    })


    init();
    function init() {
        var ww = $(window).width();
        if ( ww > 991 && !$('html').hasClass('on') ) {
            $('html').addClass('pc').removeClass('mobile');
        } else if ( ww < 991 && !$('html').hasClass('mobile') ) {
            $('html').addClass('mobile').removeClass('pc')
        }
    }

    $(window).on('resize', function() {
        init();
    });


    // account
    $('.nav_right .account').on('click', function() {
        $('.account_box').stop().slideToggle(300)
        return false
    })


    // footer의 .more_info 클릭시 .info 메뉴 보이기
    $('.more_info').on('click', function() {
        $('.info_nav').stop().slideToggle(300)
        // $('.close_btn').show()
        return false
    });

    // footer의 .close_btn 클릭시 .info 메뉴 사라지기
    $('body').on('click', '.close_btn', function() {
        $('.info_nav').stop().slideUp(300)
        return false
    });

    // .depth2 li 클릭시 .depth3 나타나기
    $(".depth2 > li").hover(
        function () {
          if ( $("html").hasClass("pc") ) {
            $(this).find(".depth3").stop().slideDown(500);
          }
        },
        function () {
          if ( $("html").hasClass("pc") ) {
            $(this).find(".depth3").stop().slideUp(500);
          }
        }
    );

    // .menu_nav
    $('.menu_btn').on('click', function() {
        $('.menu_nav').toggleClass('on')
    })

    $('.menu_nav .close_btn').on('click', function() {
        $('.menu_nav').removeClass('on')
    });


    // current
    $('.nav_left li a, .menu_bar').on('click', function() {
        $('.nav_left li a.current').removeClass('current')
        $(this).addClass('current')
    });



    // index slick-slide
    $('.slideInner').slick({
        autoplay:true,
        dots:true,
        autoplaySpeed:4500,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        pauseOnFocus:true,
        draggable:true,
        fade:true,
        arrows:true,
        prevArrow:'<button class="prevArrow marrow"><img src="images/arrow-prev.png" alt=""></button>',
        nextArrow:'<button class="nextArrow marrow"><img src="images/arrow-next.png" alt=""></button>'
       });

    

    
})(jQuery)