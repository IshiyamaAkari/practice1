//logoの表示
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');
  $("#splash_logo").delay(1200).fadeOut('slow');
});

///画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 1024){
      var responsiveImage = [
        { src: 'img/KV1.png'},
        { src: 'img/KV2.png'}
      ];
    } else {
      var responsiveImage = [
        { src: 'img/KV3.jpg'},
        { src: 'img/KV4.png'}
      ];
    }
  $('#slider').vegas({
    transition: 'fade2',
    transitionDuration: 2000,
    delay: 6000,
    animationDuration: 10000,
    animation: 'kenburns',
    slides: responsiveImage,
  });


/*ヘッダースクロール*/
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scroll-nav", window.scrollY > 200);
});

//newsスライドショー//
$(document).ready(function(){
$('.slick-news').slick({
  autoplaySpeed: 5500, 
  speed: 1200, 
  autoplay: true, 
  infinite: true, 
  slidesToShow: 1, 
  slidesToScroll: 1,
  arrows: false, 
  dots: false,  
  pauseOnFocus: false,  
  pauseOnHover:  true,  
  pauseOnDotsHover:   true,
});
    $('.prev-link').on('click', function(){
    $('.slick-news').slick('slickPrev');
  });

  $('.next-link').on('click', function(){
    $('.slick-news').slick('slickNext');
  });
});

//カーソル要素の指定
$(function(){
  var cursor=$("#cursor");
  var viewCursor=$("#view-cursor");
  cursor.css("opacity","1");
  $(document).on("mousemove",function(e){
    var x=e.clientX;
    var y=e.clientY;
    cursor.css({
      "top":y+"px",
      "left":x+"px"
    });
    viewCursor.css({
      "top":y+"px",
      "left":x+"px"
    });
  });
  $(".service-wrap__con__list").on("mouseenter",function(){
    viewCursor.css("opacity","1");
    cursor.css("opacity","0");
  });
  $(".service-wrap__con__list").on("mouseleave",function(){
    viewCursor.css("opacity","0");
    cursor.css("opacity","1");
    cursor.css("background",$cCursor);
  });
});


//worksスライドショー//
$('.slick-works').slick({
  autoplaySpeed: 5500, 
  speed: 1200, 
  autoplay: true, 
  infinite: true, 
  slidesToShow: 1, 
  slidesToScroll: 1,
  arrows: false, 
  dots: true,
  pauseOnFocus: false,  
  pauseOnHover:  true,  
  pauseOnDotsHover:   true,
});

//トップーサービス画像切り替え
const items = document.querySelectorAll(".service-wrap__con__list__item");
const images = document.querySelectorAll(".service-wrap__img img");
items.forEach(function(item, index) {
  item.addEventListener("mouseover", function() {
    const imgIndex = item.dataset.img;
    images.forEach(function(image, index) {
      image.classList.remove("active");
      if (index == imgIndex) {
        image.classList.add("active");
      }
    });
  });
  item.addEventListener("mouseout", function() {
    images.forEach(function(image, index) {
      image.classList.remove("active");
      if (index == 0) {
        image.classList.add("active");
      }
    });
  });
});

//ピックアップ・お知らせのカテゴリー選択
const blogBtn = document.querySelectorAll(".p-sort-btn li");
const blogList = document.querySelectorAll(".pickup-wrap__con li");

blogBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const blogClass = this.className;
    blogBtn.forEach(function(btn) {
      btn.classList.remove("active");
    });
    this.classList.add("active");
    blogList.forEach(function(item) {
      const itemClass = item.className;
      if (itemClass === blogClass || blogClass === "p-sort00") {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

const newsBtn = document.querySelectorAll(".n-sort-btn li");
const newsList = document.querySelectorAll(".info-wrap__con__list li");


newsBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const newsClass = this.className;
    newsBtn.forEach(function(btn) {
      btn.classList.remove("active");
    });
    this.classList.add("active");
    newsList.forEach(function(item) {
      const itemClass = item.className;
      if (itemClass === newsClass || newsClass === "n-sort00") {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
});

/*フェードイン*/
function fadeIn(){ 
  // フェードアップ 
  $('.fadeUpTrigger').each(function(){  // fadeUpTriggerクラスの各要素に対して 
    let scroll = $(window).scrollTop();  // スクロール位置を取得する 
    let triTop = $(this).offset().top - 50;  // 要素の上部より100px下の位置を取得 
    let winHeight = $(window).height();  // ウィンドウの高さを取得 
    if (scroll >= triTop - winHeight){  // 画面内に要素が入ったかを判断 
      $(this).addClass('fadeUp');  // fadeUpクラスを付与 
    } else { 
      $(this).removeClass('fadeUp');  // fadeUpクラスを削除 
    } 
  }); 
  // フェードレフト 
  $('.fadeLeftTrigger').each(function(){ 
    let scroll = $(window).scrollTop(); 
    let triTop = $(this).offset().top -50; 
    let winHeight = $(window).height(); 
    if (scroll >= triTop - winHeight){ 
      $(this).addClass('fadeLeft'); 
    } else { 
      $(this).removeClass('fadeLeft'); 
    } 
  }); 
  // フェードライト 
  $('.fadeRightTrigger').each(function(){ 
    let scroll = $(window).scrollTop(); 
    let triTop = $(this).offset().top -50 ; 
    let winHeight = $(window).height(); 
    if (scroll >= triTop - winHeight){ 
      $(this).addClass('fadeRight'); 
    } else { 
      $(this).removeClass('fadeRight'); 
    } 
  }); 
} 
$(window).scroll(function () {  // スクロールしたら 
  fadeIn();  // 関数を実行 
});

/*ハンバーガーメニュー*/
window.onunload = function () { };
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}
sizecheck();
$(function () {
  if (w > 769) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  $("header-wrap__nav__list__item a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  }
}); 
$('a[href^="#"]').on('click', function() {
  $('.drawer').click(); 
})
