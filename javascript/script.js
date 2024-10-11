$(function (){
    const $window = $(window);
    const $header = $('header');
    const $menu = $('.gnb > li'); 
    const $submenu = $('.submenu');
    const duration = 300; // 0.3초

    // 메뉴에 마우스가 들어왔을 때
    $menu.on('mouseenter', function(){
        $(this).addClass('on');
        $header.addClass('active');
        // .stop(): 현재 진행중인 애니메이션 즉시 중지
        $submenu.stop().slideDown(duration);

    });

    // 메뉴에 마우스가 나갔을 때
    $menu.on('mouseleave', function(){
        $(this).removeClass('on');
        $header.removeClass('active');
        //테스트 주석
        $submenu.stop().slideUp(duration);

    });

    // 마우스 휠을 조작했을 때
    $window.on('wheel', function(e){
        // console.log(e);

        // if(e.orignalEvent.wheelDelta > 0){
        //     // 휠을 올렸을 때
        //     $header.removeClass('hide');
            
        // } else{
        //     // 휠을 내렸을 때
        //     $header.addClass('hide');
    

        // 삼항조건연산자
        // 조건 ? 참일 때 동작 : 거짓일 때 동작
        // e.orignalEvent.wheelDelta > 0 ? $s

    });

    var swiper = new Swiper('.top-slider', {
        
        // 캐러셀
        slidesPerView: 1, // 한 번에 하나의 슬라이드만 보여주기
        spaceBetween: 0, // 슬라이드 간격 0
        direction: 'horizontal', // vertical

        effect: 'slide', // 기본 슬라이드 전환 효과
        speed: 1000, // 슬라이드 전환 속도

        loop: true, // 무한 루프
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // 페이지네이션 클릭 가능
        },
        autoplay: {
            delay: 2000, // 자동 슬라이드 전환 시간
            disableOnInteraction: false, // 사용자가 조작해도 autoplay 유지
        },

    });
    

});


