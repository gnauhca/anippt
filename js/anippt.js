var winWidth = $(window).width() * 2;
var winHeight = $(window).height() * 2;

var transformData = {
	'data-x': 0,
	'data-y': 0,
	'data-z': 0,
	'data-rotate-x': 0,
	'data-rotate-y': 0,
	'data-scale': 1,
};

var offset = $.extend(true, {}, transformData);

function sign() {
	return (Math.random() > 0.5 ? 1 : -1);
}
$('.step').each(function() {
	offset['data-x'] = sign() * winWidth;
	offset['data-y'] = sign() * winHeight;
	offset['data-rotate-x'] = sign() * parseInt(Math.random()*2) * 90;
	offset['data-rotate-y'] = sign() * parseInt(Math.random()*2) * 90;
	offset['data-rotate-z'] = sign() * parseInt(Math.random()*2) * 90;

	for (key in transformData) {
		transformData[key] += offset[key];
		$(this).attr(key, transformData[key]);
	}
});
impress().init();