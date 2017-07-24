$(function(){
	var navHeight = $("nav").height();
	var wHeight = $(window).height();
	var mleft = $(".main .left").height();
	var mright = $(".main .right").height();
	var height = wHeight - navHeight;
	if(mleft <= wHeight){
		$(".main .left").height(height);
		$(".main .right").height(height);
	}else{
		$(".main .left").height(mleft);
		$(".main .right").height(mleft);
	}
	
	$(".main .left .headline").next().hide();
	$(".main .left .headline:eq(1)").next().show();
	
	
	
	$(".main .left .headline").click(function(){
		$(".main .left .headline").removeClass("active");
		$(this).addClass("active");
		
		$(".main .left ul li a").removeClass("active");
		
		
		if($(this).next().is(":hidden")){
			$(this).find(".jiantou").addClass("active");
			$(this).next().slideDown();
		}else{
			$(this).find(".jiantou").removeClass("active");
			$(this).next().slideUp();
		}
		
		
		
//		else{
//			$(this).next().slideUp();
//			$(this).find(".jiantou").addClass("active");
//		}
	});
	
	
	
	$(".search .cd").click(function(){
		var left = parseInt($(".main .left").css("marginLeft"));
		if(left < 0){
			$(".main .left").addClass("active");
		}else{
			$(".main .left").removeClass("active");
		}
	});
	
	
	$(".faster li a").click(function(){
		$(".faster li a").removeClass("active");
		$(this).addClass("active");
	});
	
	
	$(".left li a").click(function(){
		var href = $(this).attr("href");
		$(".right iframe").attr("src",href);
	});
	
	$("nav .right .tuichu div").hide();
	$("nav .right .tuichu").click(function(){
		$("nav .right .tuichu").find("div").slideToggle();
	});

});
