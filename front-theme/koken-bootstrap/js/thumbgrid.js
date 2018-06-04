$(function() {

	var cols	= $('.elem'),
		output	= [],
		condensedItems = $('.item');

	$('.item').each(function(v,k) {

		var col		= v % cols.length,
			html	= output[col] || [];

		html[html.length]	= k;
		output[col]			= html;

		$(k).remove();

	});

	if (!$('.column.condensed').length) {
		$('#grid').append($('<div class="column condensed" style="display:none;" />').append(condensedItems));
	}

	cols.each( function(v,k) {

		if (!output[v]) return;

		var str = '';

		$.each(output[v], function(j,w) {
			str += w.outerHTML;
		});

		k.innerHTML = str;

	});

	//$(window).on('k-resize', function() {
	//	if (!window.matchMedia || window.matchMedia('(min-width: 767px)').matches) {
	//		$('.column').show();
	//		$('.column.condensed').hide();
	//	} else {
	//		if (!$('.column.condensed').length) {
	//			$('.column').parent().append(condensed);
	//		} else {
	//			$('.column.condensed').show();
	//		}
	//		$('.column:not(".condensed")').hide();
	//	}
	//});

});