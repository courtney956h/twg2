(function($) {


    // .more_info를 클릭시 .info 메뉴 보이기
    $('.more_info').on('click', function() {
        $('.info_nav').stop().slideToggle(300)
        // $('.close_btn').show()
        return false
    })

    // .close_btn을 클릭시 .info 메뉴 사라지기
    $('.close_btn').on('click', function() {
        $('.info_nav').stop().slideDown(300)
        $('.info_nav').hide()
        return false
    })







})(jQuery)