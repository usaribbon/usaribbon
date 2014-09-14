//googleあなりくす
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-27389151-1']);
  _gaq.push(['_setDomainName', 'usaribbon.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


$(function(){

	//get scroll
	$(window).scroll(function () {
		var ScrTop = $(document).scrollTop();
		if(ScrTop > 100){
			$('#momowasa').animate({bottom:'-25px'},'fast');
		}else{
			$('#momowasa').animate({bottom:'-300px'},'fast');
		}

	});

	$('a[href^=#]').click(function(){
		var speed 	= 500;
		var href 	= $(this).attr("href");
		var target 	= $(href == "#" || href == "" ? 'html' : href);
		var position =	target.offset().top;
		$($.browser.safari ? 'body' : 'html').animate({scrollTop:position},speed,'swing');
		return false;
	});

});
