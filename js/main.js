$(document).ready(function() {
  
  $('a[href="#"]').click(function(e) {
    e.preventDefault();
  })
  
  var liveNext = function() {
    if( $('#livePrev').hasClass('disabled') ) {
      $('#livePrev').click(livePrev).removeClass('disabled');
    }
    $('#liveNext').off('click', liveNext);
    
    $('.live li').each(function(i) {
      $(this).animate({'top': parseInt($(this).css('top')) - 100 + 'px'}, 'fast', 'ease', function() {
        var off = $('.live li').last().offset(),
            bot = $('.live ul').offset();
        if( off.top + off.height <= bot.top + bot.height ) $('#liveNext').off('click', liveNext).addClass('disabled');
        else $('#liveNext').click(liveNext);
      })
    })
  }
  
  $('#liveNext').click(liveNext)
  
  var livePrev = function() {
    if( $('#liveNext').hasClass('disabled') ) {
      $('#liveNext').click(liveNext).removeClass('disabled');
    }
    $('#livePrev').off('click', livePrev);
    
    $('.live li').each(function(i) {
      $(this).animate({'top': parseInt($(this).css('top')) + 100 + 'px'}, 'fast', 'ease', function() {
        var off = $('.live li').first().offset(),
            bot = $('.live ul').offset();
        if( off.top >= bot.top ) $('#livePrev').off('click', livePrev).addClass('disabled');
        else $('#livePrev').click(livePrev);
      })
    })
  }
  
  $('#newComment').click(function() {
    $(this).remove();
    $('.comments form').css('display','block').animate({'opacity':'1', 'max-height':'40rem'}, 'fast');
  })
  
})