$(document).ready(function(){
	// https://owlcarousel2.github.io/OwlCarousel2/
	$(".first-slider").owlCarousel({
		loop:true,
		dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			575:{
				items:1,
				nav:false
			},
			767:{
				items:1,
				nav:false
			},
			991:{
				items:1,
				nav:true
			}
		}
	});
	$('.inner-all').owlCarousel({
		loop: true,
		margin:10,
		items:4,
		dots: true,
		nav: true,
		autoplay: true,
		responsiveClass:true,
		responsive:{
			320:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:4,
				nav:false,
				loop:true
			}
		}
	})
	$('.about-slayd-block').owlCarousel({
		loop: true,
		margin:10,
		items:4,
		dots: true,
		nav: true,
		autoplay: true,
		responsiveClass:true,
		responsive:{
			320:{
				items:1,
				nav:false,
				dots: true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:4,
				nav:false,
				loop:true,
				dots: true
			}
		}
	})
	// http://fancyapps.com/fancybox/3/
	$(".img-wrapper a,.video a").fancybox({
		hideScrollbar: false,
		loop: true,
		thumbs:{
			autoStart: true,
		}
	});
	// img-click-play
	var Audio = $("#Audio")[0];
	$(".inner-gallery .img-wrapper")
		.mouseenter(function() {
			Audio.play();
		});
	// pride-slayd chang color link
	$('.info a').click(function(){
		$(".info a").removeClass("infoActiv");
		$(this).addClass("infoActiv");
	});
	$("#all").click(function(){
		$('.winer, .sport,.activ').css('display','block');
	});
	$("#winer").click(function(){
		$(".winer").css('display','block');
		$(".sport").css('display','none');
		$(".activ").css('display','none');
		$('.click-load').css("display", "block");
		setInterval(function () {
			$('.click-load').css("display", "none");
		},1000);
	});
	$("#sport").click(function(){
		$(".winer").css('display','none');
		$(".sport").css('display','block');
		$(".activ").css('display','none');
		$('.click-load').css("display", "block");
		setInterval(function () {
			$('.click-load').css("display", "none");
		},1000);
	});
	$("#activ").click(function(){
		$(".winer").css('display','none');
		$(".sport").css('display','none');
		$(".activ").css('display','block');
		$('.click-load').css("display", "block");
		setInterval(function () {
			$('.click-load').css("display", "none");
		},2000);
	});
});
// scrolltop show bottom-right
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
	var myBtn = document.getElementById("myBtn");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
		myBtn.style.visibility = "visible";
		myBtn.style.opacity = 0.6;
	}else {
		myBtn.style.visibility = "hidden";
		myBtn.style.opacity = 0;
	}
}
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
