
$("#foo2").carouFredSel({
	curcular: false,
	infinite: false,
	auto : false,
	scroll : {
		items	: 1
	},
	prev : {	
		button	: "#foo2_prev",
		key		: "left"
	},
	next : { 
		button	: "#foo2_next",
		key		: "right"
	},
	pagination	: {
		items	: 1 ,
		container : "#foo2_pag"
	}
});

var u = [
	'https://player.vimeo.com/video/26176531?title=0&amp;byline=0&amp;portrait=0',
	'https://player.vimeo.com/video/30923487?title=0&amp;byline=0&amp;portrait=0',
	'https://player.vimeo.com/video/30932404?title=0&amp;byline=0&amp;portrait=0',
	'https://player.vimeo.com/video/31157195?title=0&amp;byline=0&amp;portrait=0',
	'https://player.vimeo.com/video/31175965?title=0&amp;byline=0&amp;portrait=0',
	'https://player.vimeo.com/video/31168980?title=0&amp;byline=0&amp;portrait=0'
]

$('#foo2 img').click(function(e) {
	var k = $(this).context.id - 1;
	$('#video-embed iframe').attr( 'src', u[k] );
});
