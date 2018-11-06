$(function (){
	var windowHeight = $(window).height() - 74;
	$('.codeContainer').css("height" , windowHeight+"px");
	
	$(window).resize(function() {
		$('.codeContainer').css("height" , windowHeight+"px");
	});
	
	$('.toggle').click(function(){
		$(this).toggleClass('seclected');
		
		var activeDiv = $(this).html();
		
		$('#' + activeDiv).toggle();
		
		var showingDivs = $('.codeContainer').filter(function(){
			return($(this).css('dispaly')!="none");
		}).length;
		
		var width = 100/showingDivs;
		$('.codeContainer').width(width+"%");
		
	});
	
	$('#run').click(function(){
		
		$('iframe').contents().find('html').html("<style>"+$('#cssCode').val()+"</style>"+$("#htmlCode").val());
		
		document.getElementById('resultFrame').contentWindow.eval($('#jsCode').val());
		
	});
	
	var Prism = require('prismjs');

// The code snippet you want to highlight, as a string
	var code = "var data = 1;";

	// Returns a highlighted HTML string
	var html = Prism.highlight(code, Prism.languages.javascript);
	
});