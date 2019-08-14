$(function() {
    var h = $(window).height();
    // $('.main-contents').css('display','none');
    $('#loader-bg ,#loader').height(h).css('display','block');
    // $('header').css('display','none');
});

window.addEventListener('load', function (){
    console.log("loading"); 
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    // $('.main-contents').css('display', '');
    $('.main-contents').fadeIn(1000);
    $('header').fadeIn(100);
})

$(function(){
    setTimeout('stopload()',5000);
  });
   
  function stopload(){
    $('.main-contents').css('display','block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
  }


$(function(){
	var glovalNav = $('.container');　//　グローバルナビゲーションのセレクタ
	var navHeight = glovalNav.outerHeight(true); //　ナビゲーションのheight(marginやpadding,box-shadowも含む)
    var navOffset = glovalNav.offset().top; //　ブラウザの一番上からナビゲーションまでの位置
    var nav = $('header');
    var navTop = nav.height();
    var home = $('#home-a');
    var about = $('#about-a');
    var skills = $('#skills-a');
    var works = $('#works-a');
    var contact = $('#contact-a');
 
	// スクロールした時
	$(window).scroll(function () {
		// スクロールがナビゲーション位置に来たら
		if ($(this).scrollTop() > navOffset) {
			// ナビゲーションをfixedさせる
			glovalNav.css({
				'position':'fixed',
				'top':0,
				'width':'100%',
			});
			// ここは重要な部分で、fixedするとその分高さがなくなるので、margin-topを高さ分つけてあげます。
			$('.main__wrapper').css('margin-top',navHeight);
		} else {
			// ifのtrueでない場合、つまり、ナビゲーション位置に来ていない時はrelativeで元に戻す。staticでも可
			glovalNav.css('position','relative');
			$('.main__wrapper').css('margin-top','auto');
        }
        if($(this).scrollTop()>= navTop) {
            $('.container').css({
                'background':'rgb(102,102,102)',
                'opacity':0.5,
            })
        }else{
            $('.container').css({
                'background':'',
                'opacity':'',
            });
        }
        if($(this).scrollTop()>=0 && $(this).scrollTop()< navTop){
            if(!home.parents('button').hasClass("btn-2")){
                $('.container button').not(home).removeClass('btn-2');
                $('.container span').not(home).removeClass('span-3');
                home.parents('span').addClass('span-3');
                home.parents('button').addClass('btn-2');
            }
        }
        if($(this).scrollTop()>= navTop){
            if(!about.parents('button').hasClass("btn-2")){
                $('.container button').not(about).removeClass('btn-2');
                $('.container span').not(about).removeClass('span-3');
                about.parents('span').addClass('span-3');
                about.parents('button').addClass('btn-2');
            }
        }
        if($(this).scrollTop()>= navTop+$('.about').height()){
            if(!skills.parents('button').hasClass("btn-2")){
                $('.container button').not(skills).removeClass('btn-2');
                $('.container span').not(skills).removeClass('span-3');
                skills.parents('span').addClass('span-3');
                skills.parents('button').addClass('btn-2');
            }
            $('.charts li').addClass('bar-animation');
        }
        if($(this).scrollTop()>= navTop+$('.about').height()+$('.skills').height()){
            if(!works.parents('button').hasClass("btn-2")){
                $('.container button').not(works).removeClass('btn-2');
                $('.container span').not(works).removeClass('span-3');
                works.parents('span').addClass('span-3');
                works.parents('button').addClass('btn-2');
            }
        }
        if($(this).scrollTop()>= navTop+$('.about').height()+$('.skills').height()+$('.works').height()){
            if(!contact.parents('button').hasClass("btn-2")){
                $('.container button').not(contact).removeClass('btn-2');
                $('.container span').not(contact).removeClass('span-3');
                contact.parents('span').addClass('span-3');
                contact.parents('button').addClass('btn-2');
            }
        }
        
	});
});

$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').click(function() {
       // スクロールの速度
       var speed = 1000; // ミリ秒
       // アンカーの値取得
       var href= $(this).attr("href");
       // 移動先を取得
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先を数値で取得
       var position = target.offset().top;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
 });


