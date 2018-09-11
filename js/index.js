
var direct = 0;
var startTime = 0;
var endTime = 0;
var wordd = 0;
$(function(){
		$(".one div").animate({left:"35%",top:"33%"},3000);
	if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
	  var scrollFunc = function (e) {
        startTime = new Date().getTime();  
        e = e || window.event;
        wordd++;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta > 0 && (startTime - endTime) > 300) { //当滑轮向上滚动时
                direct-=0.5;
                if(direct<0){
                	direct=0
                }if(direct==1){
                		$(".one").fadeOut(2000);
						$("li").css("background-color","white");
						$("#two").css("background-color","gray");
						$(".two").fadeIn(3000);
						
						$(".one div").animate({left:"35%",top:"33%"},3000);
						$(".one").css("display","none");
						$(".three").css("display","none");
						$(".four").css("display","none");
						$('.secDiv .hh').fadeIn(7000);
						$('.secDiv .pp').fadeIn(10000)

			
									
						
                }
                if(direct==2){
                		$(".three").fadeIn(3000);
						$("li").css("background-color","white");
						$("#three").css("background-color","gray");
						
						var t1 = setTimeout('$(".D1").fadeIn(4000)',2000);
						
						var t2 = setTimeout('$(".D2").fadeIn(4000)',4000);
						var t3 = setTimeout('$(".D3").fadeIn(4000)',6000);
						
						var t4 = setTimeout('$(".D4").fadeIn(4000)',8000);
						var t5 = setTimeout('$(".D5").fadeIn(4000)',10000);
						var t6 = setTimeout('$(".D6").fadeIn(4000)',12000);
						var t7 = setTimeout('$(".D7").fadeIn(4000)',14000);
						var t8 = setTimeout('$(".D8").fadeIn(4000)',16000);
						var t9 = setTimeout('$(".D9").fadeIn(4000)',18000);
						
						
						
						
										  $('.skew-title').children('span').hover((function() {
											    var $el, n;
											    $el = $(this);
											    n = $el.index() + 1;
											    $el.addClass('flat');
											    if (n % 2 === 0) {
											      return $el.prev().addClass('flat');
											    } else {
											      if (!$el.hasClass('last')) {
											        return $el.next().addClass('flat');
											      }
											    }
											  }), function() {
											    return $('.flat').removeClass('flat');
											  });
											
						
						$(".one").css("display","none");
						$(".two").css("display","none");
						$(".four").css("display","none");
                }
                if(direct==3){
                		$(".four").fadeIn(3000);
						$("li").css("background-color","white");
						$("#four").css("background-color","gray");
						var t1 = setTimeout('$(".R1").fadeIn(2000)',2000);
						var t2 = setTimeout('$(".R2").fadeIn(2000)',7000);
						var t3 = setTimeout('$(".R3").fadeIn(2000)',12000);
						$(".one").css("display","none");
						$(".two").css("display","none");
						$(".three").css("display","none");
                }
                if(direct==0){
                	direct=0;
                	
						$(".one").fadeIn(3000);
						$(".one div").animate({right:"000px",top:"200px"},2000);
					
					
						$("li").css("background-color","white");
						$("#one").css("background-color","gray");
						
						$(".two").css("display","none");
						$(".three").css("display","none");
						$(".four").css("display","none");
                }
                
            
            }
            if (e.wheelDelta < 0 && (startTime - endTime) > 300) { //当滑轮向下滚动时
            	 
                direct+=1;
                if(direct==1){
                		
                		$(".one").fadeOut(2000);
						$("li").css("background-color","white");
						$("#two").css("background-color","gray");
						$(".two").fadeIn(3000);
						
						$(".one div").animate({left:"35%",top:"33%"},3000);
						$(".one").css("display","none");
						$(".three").css("display","none");
						$(".four").css("display","none");
						$('.secDiv .hh').fadeIn(7000);
						$('.secDiv .pp').fadeIn(10000)
				       	if(wordd==1){
				       		var index=0;
						    var word=document.getElementById("text").innerHTML;
						    function type(){
						        document.getElementById("text").innerText = word.substring(0,index++);
						    }
						    setInterval(type, 100);
				       	}
				       	
				
			
									
						
                }
                if(direct==2){
                		$(".three").fadeIn(3000);
						$("li").css("background-color","white");
						$("#three").css("background-color","gray");
						
						var t1 = setTimeout('$(".D1").fadeIn(4000)',2000);
						
						var t2 = setTimeout('$(".D2").fadeIn(4000)',4000);
						var t3 = setTimeout('$(".D3").fadeIn(4000)',6000);
						
						var t4 = setTimeout('$(".D4").fadeIn(4000)',8000);
						var t5 = setTimeout('$(".D5").fadeIn(4000)',10000);
						var t6 = setTimeout('$(".D6").fadeIn(4000)',12000);
						var t7 = setTimeout('$(".D7").fadeIn(4000)',14000);
						var t8 = setTimeout('$(".D8").fadeIn(4000)',16000);
						var t9 = setTimeout('$(".D9").fadeIn(4000)',18000);
						
						
						
						
										  $('.skew-title').children('span').hover((function() {
											    var $el, n;
											    $el = $(this);
											    n = $el.index() + 1;
											    $el.addClass('flat');
											    if (n % 2 === 0) {
											      return $el.prev().addClass('flat');
											    } else {
											      if (!$el.hasClass('last')) {
											        return $el.next().addClass('flat');
											      }
											    }
											  }), function() {
											    return $('.flat').removeClass('flat');
											  });
											
						
						$(".one").css("display","none");
						$(".two").css("display","none");
						$(".four").css("display","none");
                }
                if(direct==3){
                		$(".four").fadeIn(3000);
						$("li").css("background-color","white");
						$("#four").css("background-color","gray");
						var t1 = setTimeout('$(".R1").fadeIn(2000)',2000);
						var t2 = setTimeout('$(".R2").fadeIn(2000)',7000);
						var t3 = setTimeout('$(".R3").fadeIn(2000)',12000);
						$(".one").css("display","none");
						$(".two").css("display","none");
						$(".three").css("display","none");
                }
                if(direct==4){
                	direct=0;
                	
						$(".one").fadeIn(3000);
						$(".one div").animate({right:"000px",top:"200px"},2000);
					
					
						$("li").css("background-color","white");
						$("#one").css("background-color","gray");
						
						$(".two").css("display","none");
						$(".three").css("display","none");
						$(".four").css("display","none");
                }
                
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                alert("滑轮向上滚动");
            }
            if (e.detail< 0) { //当滑轮向下滚动时
                alert("滑轮向下滚动");
            }
        }
        endTime = new Date().getTime(); 
        ScrollText(direct);
    }
    //给页面绑定滑轮滚动事件
    
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;  
    
    
$(".one").css("display","block");
$("#one").css('background-color','gray')


$("#one").on('click',function(){

	direct=0;	
	$(".one").fadeIn(3000);
	$(".one div").animate({left:"35%",top:"33%"},3000);


	$("li").css("background-color","white");
	$("#one").css("background-color","gray");
	
	$(".two").css("display","none");
	$(".three").css("display","none");
	$(".four").css("display","none");
})

$("#two").on('click',function(){
	direct=1;
	                		$(".one").fadeOut(2000);
						$("li").css("background-color","white");
						$("#two").css("background-color","gray");
						$(".two").fadeIn(3000);
						
						$(".one div").animate({left:"35%",top:"33%"},3000);
						$(".one").css("display","none");
						$(".three").css("display","none");
						$(".four").css("display","none");
						$('.secDiv .hh').fadeIn(7000);
						$('.secDiv .pp').fadeIn(10000)
				       	if(wordd==1){
				       		var index=0;
						    var word=document.getElementById("text").innerHTML;
						    function type(){
						        document.getElementById("text").innerText = word.substring(0,index++);
						    }
						    setInterval(type, 100);
				       	}
/*	$(".two").fadeOut(2000);
	$("li").css("background-color","white");
	$("#two").css("background-color","gray");
	
	
	
	$(".one").css("display","none");
	$(".three").css("display","none");
	$(".four").css("display","none");*/
})

$("#three").on('click',function(){
	direct=2;
	                		$(".three").fadeIn(3000);
						$("li").css("background-color","white");
						$("#three").css("background-color","gray");
						
						var t1 = setTimeout('$(".D1").fadeIn(4000)',2000);
						
						var t2 = setTimeout('$(".D2").fadeIn(4000)',4000);
						var t3 = setTimeout('$(".D3").fadeIn(4000)',6000);
						
						var t4 = setTimeout('$(".D4").fadeIn(4000)',8000);
						var t5 = setTimeout('$(".D5").fadeIn(4000)',10000);
						var t6 = setTimeout('$(".D6").fadeIn(4000)',12000);
						var t7 = setTimeout('$(".D7").fadeIn(4000)',14000);
						var t8 = setTimeout('$(".D8").fadeIn(4000)',16000);
						var t9 = setTimeout('$(".D9").fadeIn(4000)',18000);
						
						
						
						
										  $('.skew-title').children('span').hover((function() {
											    var $el, n;
											    $el = $(this);
											    n = $el.index() + 1;
											    $el.addClass('flat');
											    if (n % 2 === 0) {
											      return $el.prev().addClass('flat');
											    } else {
											      if (!$el.hasClass('last')) {
											        return $el.next().addClass('flat');
											      }
											    }
											  }), function() {
											    return $('.flat').removeClass('flat');
											  });
											
						
						$(".one").css("display","none");
						$(".two").css("display","none");
						$(".four").css("display","none");
	/*$(".three").fadeOut(2000);
	$("li").css("background-color","white");
	$("#three").css("background-color","gray");
	
	$(".one").css("display","none");
	$(".two").css("display","none");
	$(".four").css("display","none");*/
})

$("#four").on('click',function(){
	$(".four").fadeIn(3000);
						$("li").css("background-color","white");
						$("#four").css("background-color","gray");
						var t1 = setTimeout('$(".R1").fadeIn(2000)',2000);
						var t2 = setTimeout('$(".R2").fadeIn(2000)',7000);
						var t3 = setTimeout('$(".R3").fadeIn(2000)',12000);
						$(".one").css("display","none");
						$(".two").css("display","none");
						$(".three").css("display","none");
	direct=3;
	/*$(".four").css("display","block");
	$("li").css("background-color","white");
	$("#four").css("background-color","gray");
	
	$(".one").css("display","none");
	$(".two").css("display","none");
	$(".three").css("display","none");*/
})
















})




