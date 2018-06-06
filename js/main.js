$(document).ready(function() {
	var vHeight = $(window).height();
	var wWidth = $(window).width();
	var ttlHeight = vHeight * 5;
	var skyHeight = vHeight;
	var waterHeight = ttlHeight - vHeight + 70;
	var yPos = (vHeight - 70) + "px";
	$('#skyBackground').css('height', skyHeight);
	$('#waterBackground').css({
		height: waterHeight,
		top: yPos
	});
	// $('.lightBox').css('top', yPos);
	// var x = 0;
	// var tmp = '';
	// var rayArr = new Array();
	// var ttlWidth = 0;
	// // add random widths to array until total width is equal to screen width before ray rotation
	// while (ttlWidth < wWidth)
	// {
	// 	var width = ((Math.random() * 96)+ 32);
	// 	rayArr[x] = width;
	// 	ttlWidth += width;
	// 	x+=1;
	// }
	// x = 0;
	// //based on the number of items in rayArr create that many rays so that before rotation the random width arrarys can span the entire screen.
	// while (x < (rayArr.length + 4))
	// {
	// 	var dDepth = ((Math.random() * 0.6)+ 0.1);
	// 	tmp += '<div class="ray" data-depth="' + dDepth + '"></div>';
	// 	x+=1;
	// }
	// $(".lightBox").append(tmp);
	// var ray = $('.ray').length;
	// var i = 0;
	// //create rays with predetermined widths and rotate and offset
	// while (i < ray)
	// {
	// 	var transform = "skew(-15deg) translateY(" + ((Math.random() * -500)+ 1) + "px)";
	// 	var opacity = ((Math.random() * 0.3)+ 0.2).toFixed(2);
	// 	$('.ray').eq(i).css({
	// 		opacity: opacity,
	// 		transform: transform,
	// 	});
	// 	$('.ray').eq(i).css('width', rayArr[i]);
	// 	i+=1;
	// }
	//headphones reccomended hack
	$('body,html').css('overflow-y', 'hidden');
	sound.pause();

	//betcon Button push
	$('.betCon').click(function(event) {
		$('.betterWith').animate({opacity: '0'}, function(){
			$('h1').css('letter-spacing', '0.5em');
			$('body,html').css('overflow-y', 'hidden');
			$('h1').css('opacity', '1');
			$('.sOne .fas').css('opacity', '1');
			$('.betterWith').css('display', 'none');
    });
		sound.play();
	});
	$('.home').click(function(event) {
		$('body,html').animate({scrollTop: 0}, 100,function() {
			location.reload();
		});
	});
});
