$(function(){
  //自動スクロール
  $('.slider').slick({
    autoplay: true,//自動でスクロール
    autoplaySpeed: 0,//自動再生のスライド切り替えまでの時間をミリ秒で設定
    speed: 5000,//スライド/フェードアニメーションの速度を設定
    cssEase: "linear",//波のないアニメーションを指定
    slidesToShow: 4, //表示するスライドの数
    slidesToScroll: 1, //スクロールで切り替わるスライドの数
  });

  //下部ドットマーク選択により画像左へ移動
  $('.slider2').slick({
    arrows: true,
    infinite: true, //スライドのループ有効化
    dots: true, //ドットのナビゲーションを表示
    slidesToShow: 5, //表示するスライドの数
    slidesToScroll: 1, //スクロールで切り替わるスライドの数
    responsive: [{
      breakpoint: 768, //ブレークポイントが768px
      settings: {
        slidesToShow: 5, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
      }
    }, {
      breakpoint: 480, //ブレークポイントが480px
      settings: {
        slidesToShow: 5, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
      }
    }]
  });
});
