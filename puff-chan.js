//Puff-chan
jQuery(document).ready(function($){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return
    }
    var isShow = false, lock = false;
    var $btn = $('.back-to-top');
    $(document).scroll(function () {
      if (lock) return
      if ($(this).scrollTop() >= 700) {
        if (!isShow) $btn.addClass('load')
        isShow = true
      } else {
        if (isShow) {
          $btn.removeClass('load')
          isShow = false
        }
      }
    })
    $btn.click(function () {
      lock = true
      $btn.addClass('ani-leave')
      $("html, body").animate({ scrollTop: 0 }, 8000);
      setTimeout(function () {
        $btn.removeClass('ani-leave').addClass('leaved')
      }, 390)
      setTimeout(function () {
        $btn.addClass('ending')
      }, 0)
      setTimeout(function () {
        $btn.removeClass('load')
      }, 1000);
      setTimeout(function () {
        lock = false
        isShow = false
        $btn.removeClass('leaved ending')
      }, 1200);
    })
  });
