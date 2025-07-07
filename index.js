


$(document).ready(function(){

        //gnb-sub 1280이상
        function desktopGnbHover() {
          if ($(window).width() > 1280) {
            $('.gnb > li').on('mouseenter', function() {
              $(this).children('.gnb-sub').stop(true, true).fadeIn(150);
            });

            $('.gnb > li').on('mouseleave', function() {
              $(this).children('.gnb-sub').stop(true, true).fadeOut(150);
            });
          } else {
            // 모바일에서는 이벤트 제거
            $('.gnb > li').off('mouseenter mouseleave');
          }
        }

        // 처음 로딩 시 실행
        desktopGnbHover();

        // 리사이즈할 때마다 반응
        $(window).on('resize', function() {
          desktopGnbHover();
          resetGnbForDesktop(); // 기존 코드도 같이 유지
        });


        //gnb 나타나기(모바일) ---
        $('.gnb-toggle').click(function(){
          $('.gnb').toggleClass('active');
          $('.gnb-toggle').hide();
          $('.gnb-toggle-close').show();
        });
          
        $('.gnb-toggle-close').click(function(){
          $('.gnb').removeClass('active');
          $('.gnb-toggle-close').hide();
          $('.gnb-toggle').show();
        });
      
        

        //gnb 아코디언 메뉴(모바일)

        $('.gnb>li>a').click(function(e){
          if ($(window).width() <= 1279) {
        e.preventDefault();  

        if($(this).hasClass("active")){ 
            $('.gnb>li>a').siblings("ul").stop().slideUp(500); 
            $('.gnb>li>a').removeClass("active");
            $(this).removeClass("active"); 
            $(this).siblings("ul").stop().slideUp(500); 

        }else{ 
            $('.gnb>li>a').siblings("ul").stop().slideUp(500);
            $('.gnb>li>a').removeClass("active");
            $(this).addClass("active"); 
            $(this).siblings("ul").stop().slideDown(500);  
        }           
        }});

        function resetGnbForDesktop() { //리셋하기
          if ($(window).width() > 1280) {
            $('.gnb-sub').removeAttr('style');
            $('.gnb>li>a').removeClass('active');
          }
        }

        $(window).on('resize', resetGnbForDesktop);
});





import { register } from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.mjs';
register();



//탑버튼 스크롤하면 나타나기
const topBtn = document.querySelector('.top-btn');

        window.addEventListener('scroll', () => {
        if (window.scrollY > 250) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
        });

//마우스 스크롤했을때 헤더에 배경색상넣기
      window.addEventListener('scroll', function () { 
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
      header.classList.add('scrolled');
      } else {
      header.classList.remove('scrolled');
      }
      });



    // gnb부분



    //스와이퍼 living//
    const swiper = new Swiper('.living-Swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 70,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });



    //color mood list 부분 -------------------------------------
    const swipers = document.querySelectorAll('.swiper-color-mood');

    function updateSlidesPerView() {
        const width = window.innerWidth;
        let slidesPerView = 4;
        if (width < 480) slidesPerView = 1;
        else if (width < 768) slidesPerView = 2;
        else if (width < 1160) slidesPerView = 3;

        swipers.forEach(swiper => {
            swiper.setAttribute('slides-per-view', slidesPerView);
            swiper.setAttribute('space-between', '30');
            swiper.setAttribute('pagination', 'true');
            swiper.setAttribute('pagination-type', 'progressbar');
        });
    }

    updateSlidesPerView();

    window.addEventListener('resize', () => {
        updateSlidesPerView();
    });


  

    
    //brand intro : pantone 텍스트 효과 
    document.querySelectorAll(".split").forEach(text => {
        let theText = text.innerText;
        let newText = "";

        for(let i=0; i<text.innerText.length; i++){
            newText += "<span aria-hidden='true'>";
            if (text.innerText[i] == " "){
                newText += " "
            } else {
                newText += text.innerText[i];
            }
            newText += "</span>";
        }
        text.innerHTML = newText;
        text.setAttribute("aria-label", theText);
    });
    gsap.from(".split span",{
      yPercent: 100,
      autoAlpha: 0,
      duration: 2,
      ease: "circ.out",
      stagger: 0.1,

      scrollTrigger: {
        trigger: ".split",
        start: "-=100 center",
        end: "+=100",
        markers: false,
        scrub: 1, 
    }
    });

    //brand intro : 전체 나타나기 효과
    const ani2 = gsap.timeline();
    ani2.from(".brand-title", {x: -150, autoAlpha:0}) //왼쪽 -200px, opacity 0 시작 > 점점 나타나게
        .from(".brand-desc", {x: 100, autoAlpha:0}) 

    ScrollTrigger.create({
        animation: ani2,
        trigger: ".brand-intro", //brand-intro가 화면에 들어오면 애니메이션 작동
        start: "-=700 top", //시작점 기준보다 700px위에
        end: "+=400",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        markers: false,
    });

    //living in color & color mood : 전체 나타나기 효과
    function createScrollAnimation(sectionSelector, contentSelector) {
      const show1 = gsap.timeline();
      show1.from(`${sectionSelector} .section-title`, { y: 150, autoAlpha: 0 })
        .from(`${sectionSelector} ${contentSelector}`, { y: 150, autoAlpha: 0 });

      ScrollTrigger.create({
        animation: show1,
        trigger: sectionSelector,
        start: "top 80%",
        end: "+=400",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        markers: false,
      });
    }

    createScrollAnimation(".living-in-color", ".contents-living");
    createScrollAnimation(".color-mood", ".wrap-mood-cont");


    //our picks & review : 전체 나타나기 효과
    function createScrollAnimation2(sectionSelector2, contentSelector2) {
      const show2 = gsap.timeline();
      show2.from(`${sectionSelector2} .top-title`, { y: 150, autoAlpha: 0 })
        .from(`${sectionSelector2} ${contentSelector2}`, { y: 150, autoAlpha: 0 });

      ScrollTrigger.create({
        animation: show2,
        trigger: sectionSelector2,
        start: "top 80%",
        end: "+=400",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        markers: false,
      });
    }

    createScrollAnimation2(".our-picks", ".item-list");
    createScrollAnimation2(".review", ".review-cont");
  
