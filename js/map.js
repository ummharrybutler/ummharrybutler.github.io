$(document).ready(function() {
  var i = 1;
  while (i < 11)
  {
    var mapPoint = '#point-' + i;
    $(mapPoint).addClass('mapPoint');
    i+=1;
  }
  $('.mapPoint').hover(function() {
    var position = $(this).position();
    var positionL = position.left;
    var positionT = position.top;
    $('.deadInfo').css('display', 'block');
    $('.deadInfo').css('top', positionT);
    $('.deadInfo').css('left', positionL);
    $('.deadInfo').animate({opacity: 1}, 300);
  }, function() {
    $('.deadInfo').animate({opacity: 0}, 300, function(){
      $('.deadInfo').css('display', 'none');
    });
  });
});
