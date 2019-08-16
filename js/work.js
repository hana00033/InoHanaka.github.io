$(function(){
   
    // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する
    $('.modal_open').click(function(){
   
    //   // 黒い背景をbody内に追加
    //   $('body').append('<div class="modal_bg"></div>');
    //   $('.modal_bg').fadeIn();
   
      // data-targetの内容をIDにしてmodalに代入
      var modal = '#' + $(this).attr('data-target');
   
      // モーダルをウィンドウの中央に配置する
      function modalResize(){
          var w = $(window).width();
          var h = $(window).height();
   
          var x = (w - $(modal).outerWidth(true)) / 2;
          var y = (h - $(modal).outerHeight(true)) / 2;
   
        //   $(modal).css({'left': x + 'px','top': y + 'px'});
        $(modal).css({'left':'0px','top':'0px'});
      }
   
      // modalResizeを実行
      modalResize();
   
      // modalをフェードインで表示
      $(modal).fadeIn();
      $(modal).css({
        "transform": "scale(1)"
    });

   
      // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.modal_bg, .modal_close, .modal_close2').off().click(function(){
        $(".modal_box").fadeOut();
        $(".modal_box").css({
          "transform": "scale(0)"
        });
      });
   
      // ウィンドウがリサイズされたらモーダルの位置を再計算する
      $(window).on('resize', function(){
          modalResize();
      });
   
      // .modal_switchを押すとモーダルを切り替える
      $('.modal_switch').click(function(){
        console.log("switch")
        // 押された.modal_switchの親要素の.modal_boxをフェードアウトさせる
        $(this).parents('.modal_box').fadeOut();
   
        // 押された.modal_switchのdata-targetの内容をIDにしてmodalに代入
        var modal = '#' + $(this).attr('data-target');
   
        // モーダルをウィンドウの中央に配置する
        function modalResize(){
            var w = $(window).width();
            var h = $(window).height();
   
            var x = (w - $(modal).outerWidth(true)) / 2;
            var y = (h - $(modal).outerHeight(true)) / 2;
   
            // $(modal).css({'left': x + 'px','top': y + 'px'});
            $(modal).css({'left': '0px','top': '0px'});
        }
   
        // modalResizeを実行
        modalResize();
   
        $(modal).show();
        $(modal).css({
            "transform": "scale(1)"
        });
   
        // ウィンドウがリサイズされたらモーダルの位置を再計算する
        $(window).on('resize', function(){
            modalResize();
        });
      });
    });
  });

  