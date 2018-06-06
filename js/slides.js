$(document).ready(function() {
  var i = 0;
  var vHeight = $(window).height();
  var scrollMarkers = new Array();
  var counter = 1;
  var calledBack = false;
  var hitOnce = false;
  var runMe = false;
  //creation of markers for scrolling to
  i = 0;
	while (i < 5)
	{
		scrollMarkers[i] = vHeight * i;
		i += 1;
	}
	var pos = 1;
  // auto scroll to slides on button push
  $('.goTo2').click(function(event) {
    $('body,html').css('overflow-y', 'initial');
    //animate scroll to next marker.
    $('body,html').animate({scrollTop: scrollMarkers[pos]}, 1500,function() {
      pos = 2;
      //overflow hidden to stop user scroll
      $('body,html').css('overflow-y', 'hidden');
      textHit1.play();
      $('.sTwo .s-1').css('display', 'block');
      $('.sTwo .s-1').animate({opacity: 1}, 2000, function(){
        //jquery delay used to allow user to read
        $('.sTwo .s-1').delay(2000).animate({opacity: 0}, 2000, function(){
          $('.sTwo .s-1').css('display', 'none');
          $('.sTwo .s-2').css('display', 'block');
          // stupid set interval runs callback twice so i have to wrap everything near it in a if statement to check a boolean
          if (hitOnce === false)
          {
            textHit2.play();
            hitOnce = true;
          }
          $('.sTwo .s-2').animate({opacity: 1}, 2000, function(){
            if (calledBack === false)
            {
              calledBack = true;
              var interval = setInterval(function() {
                counter--;
                // countdown here
                $('.countdownTimer .time').text(counter);
                if (counter === 0) {
                  clearInterval(interval);
                  $('.sTwo .s-2').animate({opacity: 0}, 2000, function() {
                    $('.sTwo .s-2').css('display', 'none');
                    $('.sTwo .s-3').css('display', 'block');
                    textHit3.play();
                    $('.sTwo .s-3').animate({opacity: 1}, 2000, function() {
                      $('.sTwo .s-3').delay(3000).animate({opacity: 0}, 2000, function() {
                        $('.sTwo .s-3').css('display', 'none');
                        $('.sTwo .s-4').css('display', 'block');
                        textHit4.play();
                        $('.sTwo .s-4').animate({opacity: 1}, 2000, function() {
                          $('.sTwo .fa-arrow-down').delay(8000).animate({opacity: 1}, 2000);
                        });
                      });
                    });
                  });
                }
              }, 1000);
            }
          });
        });
      });
    });
  });
  $('.goTo3').click(function(event) {
    $('body,html').css('overflow-y', 'initial');
    //animate scroll to next marker.
    $('body,html').animate({scrollTop: scrollMarkers[pos]}, 1500,function() {
      pos = 3;
      //overflow hidden to stop user scroll
      $('body,html').css('overflow-y', 'hidden');
      textHit5.play();
      $('.sThree .s-1').css('display', 'block');
      $('.sThree .s-1').animate({opacity: 1}, 2000, function(){
        $('.sThree .s-1').delay(3000).animate({opacity: 0}, 2000, function(){
          $('.sThree .s-1').css('display', 'none');
          $('.sThree .s-2').css('display', 'block');
          textHit1.play();
          $('.sThree .s-2').animate({opacity: 1}, 2000, function(){
            $('.sThree .fa-arrow-down').delay(1000).animate({opacity: 1}, 2000);
          });
        });
      });
    });
  });
  i = 1;
  $('.goTo4').click(function(event) {
    $('body,html').css('overflow-y', 'initial');
    //animate scroll to next marker.
    $('body,html').animate({scrollTop: scrollMarkers[pos]}, 1500,function() {
      pos = 4;
      //overflow hidden to stop user scroll
      $('body,html').css('overflow-y', 'hidden');
      textHit2.play();
      $('.sFour .s-1').css('display', 'block');
      $('.sFour .s-1').animate({opacity: 1}, 2000, function(){
        var mapDot = '.map #dot-' + i;
        var del = 0;
        while (i < 19)
        {
          mapDot = '.map #dot-' + i;
          $(mapDot).delay(del).animate({opacity: 1}, 500);
          i++;
          del += 300;
        }
        i = 1;
        del = 0;
        $('.sFour .s-1').delay(5400).animate({opacity: 0}, 2000, function(){
          $('.sFour .s-1').css('display', 'none');
          $('.sFour .s-2').css('display', 'block');
          textHit3.play();
          $('.sFour .s-2').animate({opacity: 1}, 2000, function(){
            while (i < 11)
            {
              mapPoint = '.map #point-' + i;
              $(mapPoint).delay(del).animate({opacity: 1}, 500);
              i++;
              del += 300;
            }
            $('.sFour .fa-arrow-down').delay(1000).animate({opacity: 1}, 2000);
          });
        });
      });
    });
  });
  $('.goTo5').click(function(event) {
    $('body,html').css('overflow-y', 'initial');
    //animate scroll to next marker.
    $('body,html').animate({scrollTop: scrollMarkers[pos]}, 1500,function() {
      pos = 5;
      //overflow hidden to stop user scroll
      $('body,html').css('overflow-y', 'hidden');
      textHit5.play()
      $('.sFive .s-1').css('display', 'block');
      $('.sFive .s-1').animate({opacity: 1}, 2000, function(){

      });
    });
  });
});
