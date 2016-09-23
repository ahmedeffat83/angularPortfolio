
function pieChart() {
	$('.pieChart').each(function(){
		var pieColor = $(this).attr("data-color");
		var backColor = 'rgba(0, 0, 0, 0.025)';
		var foreColor = '#10acd8';
		
		if (pieColor == "red") {
			foreColor = '#ec1662';
		} else if (pieColor == "green") {
			foreColor = '#43debc';
		} else if (pieColor == "orange") {
			foreColor = '#e7a425';
		} else {
			foreColor = '#03a9f4';
		}
		
		$(this).easyPieChart({
			animate: 1200,
			scaleColor: false,
			lineCap: 'round',
			lineWidth: 10,
			trackColor: backColor,
			barColor: foreColor,
			size: '160'
		});
	});
}
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
function portfolioCarousel() {
	$('.portfolioCarousel').slick({
		slide : "li"/*,
		infinite : false*/
		/*fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		arrows: false*/
	});
	
}
  
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
/*function roleMeter() {
	$(".overview-roleMeter").each(function(){
		var insideContent = $(this).children("div");
		var newWidthValue = $(insideContent).attr("rel");
		//console.log(newWidthValue);
		$(insideContent).animate({"width" : newWidthValue + "%"}, 2500,"easeOutExpo");
	});
}*/
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
/*function stickyElement() { //////// not implemented yet
	$(".sticky").each(function(){
		if (!!$(this).offset()) { // make sure ".sticky" element exists
			var stickyElement = $(this);
			var stickyTop = $(stickyElement).offset().top; // returns number
			var stickyNextElement = $(stickyElement).next();
			var allowedTopSpace = $(".headerWrapper").outerHeight(true) + 50;
			function setStickyPosition() {
				var stickyWidth = $(stickyElement).width();
				var stickyHeight = $(stickyElement).outerHeight(true);
				var stickyParentHeight = $(stickyElement).parent().height();
				var windowTop = $(window).scrollTop() + allowedTopSpace; // returns number 
				var xx = $(window).scrollTop() + stickyHeight;
				if (xx <= stickyParentHeight) {
					if (stickyTop < windowTop){
						$(stickyElement).css({ width: stickyWidth, position: "fixed", top: allowedTopSpace, bottom: "auto"});
						$(stickyNextElement).css({ "margin-left": stickyWidth});
					} else {
						$(stickyElement).css({ width: "25%", position: "inherit", top: "auto", bottom: "auto" });
						$(stickyNextElement).css({ "margin-left": 0});
					}
				} else {
					$(stickyElement).css({ width: stickyWidth, position: "absolute", top: "auto", bottom: 0});
					$(stickyNextElement).css({ "margin-left": stickyWidth});	
				}
			}
			setStickyPosition();
			$(window).scroll(function(){ // scroll event
		  		setStickyPosition();
			});
		}		
	});
}*/
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
function home_heightSetter() {
	// General variables
	var window_height = $(window).height();
	var header_height = $(".headerWrapper").outerHeight(true);
	// MainBodyContent variables
	var mainBodyContent_height = $(".mainBodyContent").outerHeight();
	var mainBodyContent_topMargin = (window_height - header_height - mainBodyContent_height) / 2;
	var standardValue = window_height - header_height;
	var breakingValue = mainBodyContent_height + 200;
	
	// Like there's no any header :)
	$(".sectionWrapper").css("padding-top", header_height);
	// Center the two arrows to the main container without calculating the header's hwight
	$("a.projectsArrow").each(function(){
		$(this).css("top", (window_height - $(this).height() + header_height) / 2 );
	});
	// Fit he container's height to the browser and make centering its content vertically
	if (standardValue > breakingValue) {
		$(".mainBodyContent").css({"margin-top": mainBodyContent_topMargin, "margin-bottom": mainBodyContent_topMargin});
		//$(".mainBodyWrapper").height(window_height);
		//console.log(breakingValue);
	} else {
		$(".mainBodyWrapper").height("auto");
		$(".mainBodyContent").css({"margin-top": 100, "margin-bottom": 100});
	}
	
}
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
jQuery(window).load(function(){
	//roleMeter();
	home_heightSetter();
	pieChart();
	portfolioCarousel();
	//stickyElement();
});
/************************************************************/
/************************************************************/
jQuery(window).on("resize", function(){
	home_heightSetter();
	//stickyElement();
});