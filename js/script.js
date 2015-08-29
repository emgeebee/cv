var welcome = 'Thanks for inspecting the source of my resume. This is just a silly little bit of code trying to highlight some of the skills I enjoy using on a daily basis - responsive CSS (media queries), LESS, JQuery etc. As you can see everything is nicely compiled and packaged up into a single file - its all about performance baby!';

var prepareSwitcher = function(){
	$('.detail').css('overflow','hidden');
	$('.switcher').css('display','inline-block');
	$('#switcher-summary').removeAttr('href');
	$('#switcher-summary').on('click', function () {
		hideDetails();
		$('#switcher-summary').removeAttr('href');
	});
	$('#switcher-full').on('click', function () {
		showDetails();
		$('#switcher-full').removeAttr('href');
	});
	$('#aboutme').addClass('summary-block').removeClass('detail-block');
	hideDetails();
};

var prepareSpinner = function(){
	$('.spin-start').show().on('click', function () {
		$('.spinner-off').removeClass('spinner-off').addClass('spinner');
		$('.spin-start').hide();
		$('.spin-off').show();
	});
	$('.spin-off').on('click', function () {
		$('.spinner').removeClass('spinner').addClass('spinner-off');
		$('.spin-off').hide();
		$('.spin-start').show();
	});
}

var showDetails = function(){
	$('#aboutme').addClass('transition').removeClass('summary-block');
	$('.detail').css('display','inline');
	$('.detail').animate({opacity: "show", width: "100%", height: "100%"}, 1000, function() {
	$('.detail').css('display','inline');
		$('#aboutme').addClass('detail-block').removeClass('summary-block transition');
		$('#switcher-summary').attr('href', '#');
	});
};

var hideDetails = function(){
	$('#aboutme').addClass('transition').removeClass('detail-block');
	$('.detail').animate({opacity: "hide", width: "0", height: "0"}, 1000, function() {
		$('#aboutme').addClass('summary-block').removeClass('detail-block transition');
		$('#switcher-full').attr('href', '#');
	});
};

$(document).ready(function() {
	if(console){
		console.log(welcome);
	}
	prepareSwitcher();
	prepareSpinner();
});