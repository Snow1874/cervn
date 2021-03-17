

// ヘッダースクロール
$(function () {
    var $body = $('body');

    //開閉用ボタンをクリックでクラスの切替え
    $('#humbgr').on('click', function () {
        $body.toggleClass('open');
    });

    //メニュー名以外の部分をクリックで閉じる
    $('.open #humbgr').on('click', function () {
        $body.removeClass('open');
    });

});

//ヘッダーメニューオープン
$(function(){
    $('#gnav_list .list').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $(".sub_category",this).slideUp();
    });
});

//   アコーディオン
$(function(){
    $('.faq__inner__accordion__item__question').click(function(){
      $(this).next('.faq__inner__accordion__item__answer').slideToggle();
      $(this).toggleClass("open");
    });
  });

$(document).on('ready', function() {
    $(".troubles__list.slick").slick({
      infinite: true, // スライドのループを有効にするか
      // autoplay: true,
      dots: true,
      slidesToShow: 1, // 表示するスライド数を設定
      slidesToScroll: 1, // スクロールするスライド数を設定
  
    });
  });

  $(document).on('ready', function() {
    $(".cases__list.slick").slick({
      infinite: true, // スライドのループを有効にするか
      // autoplay: true,
      dots: true,
      slidesToShow: 1, // 表示するスライド数を設定
      slidesToScroll: 1, // スクロールするスライド数を設定
  
    });
  });

  // スムーススクロール
$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top -100;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
