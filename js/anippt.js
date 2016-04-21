var winWidth = $(window).width() * 2;
var winHeight = $(window).height() * 2;
var transformData = {
	'data-x': 0,
	'data-y': 0,
	'data-z': 0,
	'data-rotate-x': 0,
	'data-rotate-y': 0,
	'data-rotate-z': 0,
	//'data-rotate': 0,
	'data-scale': 1,
};

var offset = $.extend(true, {}, transformData);

function sign() {
	return (Math.random() > 0.5 ? 1 : -1);
}
$('.step').each(function() {
	offset['data-x'] = sign() * winWidth;
	offset['data-y'] = sign() * winHeight;
	offset['data-rotate-x'] = sign() * /*parseInt*/(Math.random()*2) * 90;
	offset['data-rotate-y'] = sign() * /*parseInt*/(Math.random()*2) * 90;
	offset['data-rotate-z'] = sign() * /*parseInt*/(Math.random()*2) * 90;
	//offset['data-rotate'] = sign() * /*parseInt*/(Math.random()*2) * 90;

	for (key in transformData) {
		transformData[key] += offset[key];
		$(this).attr(key, transformData[key]);
	}

	// add menu
	if (this.id) {
		$('.menu ul').append('<li><a href="#'+this.id+'">'+this.id+'</a></li>');
	}
});


// menu 
$(document).on('mousemove', function(e) {
	if (e.clientX < 100 && e.clientY < 100) {
		$('body').addClass('menu-show');
	}
});
$('.menu').hover(function() {}, function() {
	$('body').removeClass('menu-show');
});

$('code.html').each(function() {
	var htmlStr = $(this).html();
	htmlStr = htmlStr.replace(/\</g, '&lt;');
	htmlStr = htmlStr.replace(/\>/g, '&gt;');
	$(this).html(htmlStr);
});
impress().init();