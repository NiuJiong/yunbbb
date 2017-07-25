$(function(){
	console.log($(".right").height());
	
	
	$(".choose").click(function(){
		if($(this).is(".active")){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}
	});
	
	
	$(" .content .integral .go a").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});
	
	
	
//	$(" .content .verification").click(function(){
//		$(this).siblings().removeClass("active");
//		$(this).addClass("active");
//		$(".content .verification a").removeClass("active");
//		$(this).find("a").addClass("active");
//	});
	
	
	$(" .message_content .message-main .file a").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});
	
	
	$(" .message_content ul:eq(0) li").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(" .message_content ul:eq(0) li:eq(4)").removeClass("active")
	});
	
	
	$(".message-main .dunr").click(function(){
		$(".message-main .daoru").addClass("active");
		$(".zezaoceng").addClass("active");
	});
	
	$(".message-main .daoru .x").click(function(){
		$(".message-main .daoru").removeClass("active");
		$(".zezaoceng").removeClass("active");
	});
	
	$(".message-main .dunt").click(function(){
		$(".message-main .shoudong").addClass("active");
		$(".zezaoceng").addClass("active");
	});
	$(".message-main .shoudong .x").click(function(){
		$(".message-main .shoudong").removeClass("active");
		$(".zezaoceng").removeClass("active");
	});
	$(".message-main .shoudong .shuru").click(function(){
		$(this).html("");
	});
	
	
	$(".message_content .tianjia").click(function(){
		$(".message_content .muban").addClass("active");
//		$(".zezaoceng").addClass("active");
	});
	$(".message_content .tanchu .tianjia").click(function(){
		$(".message_content .muban").addClass("active");
		$(".zezaoceng").addClass("active");
	});
	$(".message_content .muban .xiaoshi").click(function(){
		$(".message_content .muban").removeClass("active");
		$(".zezaoceng").removeClass("active");
	});
	$(".message_content .muban .cont").click(function(){
		$(this).html("");
	});
	
	$(".qianming .bu button").click(function(){
		$(".qianming .bu button").removeClass("active")
		$(this).addClass("active");
	});
	
	
	
	$(".add .tianjia").click(function(){
		$(".qianming").addClass("active");
		$(".zezaoceng").addClass("active");
	});
	$(".qianming  .x").click(function(){
		$(".qianming").removeClass("active");
		$(".zezaoceng").removeClass("active");
	});
	$(".qianming .shuru").click(function(){
		$(this).html("");
	});
	$(".qianming .shuru1").click(function(){
		$(this).html("");
	});
	
	
	$(".message_content .basic .xiuxiuxiu .xiumjima").click(function(){
		$(".basic .xiuxiuxiu .xiugaimima").addClass("active");
		$(".zezaoceng").addClass("active");
	});
	$(".basic .xiuxiuxiu .xiugaimima .x").click(function(){
		$(".basic .xiuxiuxiu .xiugaimima").removeClass("active");
		$(".zezaoceng").removeClass("active");
	});
	$(".basic .xiuxiuxiu .xiugaimima input").click(function(){
		$(this).html(" ");
	});
	
	
	
	$(".message_content .message-main .signature .tianjia .tjqmm").click(function(){
		if($(".message_content .message-main .signature .qianmingxuanze").hasClass("active")){
					$(".message_content .message-main .signature .qianmingxuanze").removeClass("active");
					
					
		}else{
			$(".message_content .message-main .signature .qianmingxuanze").addClass("active");
			
		}
	});
	
	
	$(".message_content .message-main .signature .qianmingxuanze p").click(function(){
		var text = $(this).text();
//		console.log(text);
		$(".message_content .message-main .signature .tianjia a").text(text);
		$(".message_content .message-main .content .tongbu").text(text);
		$(".message_content .message-main .signature .qianmingxuanze").removeClass("active");
		$(".zezaoceng").removeClass("active");
	});
//	$(".message_content  .tanchu .muban .tjqmm").click(function(){
//		$(".message_content  .tanchu .muban .qianmingxuanze").addClass("active");
//	});
	$(".message_content  .tanchu .muban .addqianming p").click(function(){
		var text = $(this).text();
//		console.log(text);
		$(".message_content  .tanchu .muban .tjqmm").text(text);
		$(".message_content  .tanchu .muban .addqianming").removeClass("active");
	});
	
	
	
//	点击空白消失弹窗
	$(document).mouseup(function(e){
	  var _con = $('.message_content .message-main .signature');   // 设置目标区域
	  if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
	    $(".qianmingxuanze").removeClass("active");
	  }
	});
	
	$(".message_content .message-main .template .mubana .spans span").click(function(){
		$(".template .mubana .spans span").removeClass("active");
		$(this).addClass("active");
	});
	
	
	
	$(".message_content .message-main .template .tianjia").click(function(){
		$(".message_content .message-main .template .mubana").addClass("active");
		$(".zezaoceng").addClass("active");
	});
	$(".message_content .message-main .template .mubana .x").click(function(){
		$(".message_content .message-main .template .mubana").removeClass("active");
		$(".zezaoceng").removeClass("active");
	});
	
	
	
	$(".pagess p:eq(1) span").click(function(){
		$(".pagess p:eq(1) span").removeClass("active");
		$(this).addClass("active");
		$(".pagess p:eq(1) span:eq(2)").removeClass("active");
	});
	$(".zezaoceng").click(function(){
		$(this).removeClass("active");
		$(".message-main .daoru").removeClass("active");
		$(".message-main .shoudong").removeClass("active");
		$(".message_content .muban").removeClass("active");
		$(".qianming .bu button").removeClass("active");
		$(".qianming").removeClass("active");
		$(".basic .xiuxiuxiu .xiugaimima").removeClass("active");
		$(".qianmingxuanze").removeClass("active");
		$(".message_content .message-main .template .mubana").removeClass("active");
	});
	
	
	
	
	
});
