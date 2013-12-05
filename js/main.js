$(document).ready(function() {
  
  $('a[href="#"]').click(function(e) {
    e.preventDefault();
  })
  
  var liveNext = function() {
    if( $('#livePrev').hasClass('disabled') ) {
      $('#livePrev').click(livePrev).removeClass('disabled');
    }
    $('.live li').each(function(i) {
      $(this).animate({'top': parseInt($(this).css('top')) - 100 + 'px'}, 'fast', 'ease', function() {
        var off = $('.live li').last().offset(),
            bot = $('.live ul').offset();
        if( off.top + off.height <= bot.top + bot.height ) $('#liveNext').off('click', liveNext).addClass('disabled');
      })
    })
  }
  
  $('#liveNext').click(liveNext)
  
  var livePrev = function() {
    if( $('#liveNext').hasClass('disabled') ) {
      $('#liveNext').click(liveNext).removeClass('disabled');
    }
    $('.live li').each(function(i) {
      $(this).animate({'top': parseInt($(this).css('top')) + 100 + 'px'}, 'fast', 'ease', function() {
        var off = $('.live li').first().offset(),
            bot = $('.live ul').offset();
        if( off.top >= bot.top ) $('#livePrev').off('click', livePrev).addClass('disabled');
      })
    })
  }
  
})