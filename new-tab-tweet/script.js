function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function go() {
	$('*').hide();
	await sleep(250);
	$('twitterwidget').css('position', 'absolute');
	$('twitterwidget').css('left', '50%');
	$('twitterwidget').css('top', '50%');
	$('twitterwidget').css('transform', 'translate(-50%, -50%)');
	$('*:not(style)').show();
}

go();
