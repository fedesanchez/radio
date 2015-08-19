function start(){ 
	
	
};

function showSplash(){
	setTimeout(function () {
		$('.main4').stop().animate({marginTop:-2000},800,'easeInOutExpo', function(){ $(this).css({visibility:'hidden'}); });
		
		$('.mic1').stop().animate({marginLeft:0},800,'easeInOutExpo');
		$('.mic2').stop().animate({marginRight:0},800,'easeInOutExpo');
		$('.phones1').stop().animate({marginTop:0},800,'easeInOutExpo');
		$('header').stop().animate({marginTop:0},800,'easeInOutExpo');
		$('.logo .txt2').stop().animate({marginTop:0},800,'easeInOutExpo');


	}, 500);
	
};
function hideSplash(){ 
	
	$('.main4').css({visibility:'visible'}).stop().animate({marginTop:0},800,'easeOutExpo');
	
	$('.mic1').stop().animate({marginLeft:-250},800,'easeInOutExpo');
	$('.mic2').stop().animate({marginRight:-265},800,'easeInOutExpo');
	$('.phones1').stop().animate({marginTop:-160},800,'easeInOutExpo');
	$('header').stop().animate({marginTop:-140},800,'easeInOutExpo');
	$('.logo .txt2').stop().animate({marginTop:-25},800,'easeInOutExpo');

   
};
function hideSplashQ(){	
	
	$('.main4').css({visibility:'visible', marginTop:0});
	
	$('.mic1').css({marginLeft:-250});
	$('.mic2').css({marginRight:-265});
	$('.phones1').css({marginTop:-160});
	$('header').css({marginTop:-140});
	$('.logo .txt2').css({marginTop:-25});

	
};

///////////////////

$(document).ready(function() {
	
	var user_agent2 = navigator.userAgent.toLowerCase();
	var mobile2 = false;
	if ((/up.browser|up.link|mmp|symbian|smartphone|midp|wap|vodafone|o2|pocket|kindle|mobile|pda|psp|treo|blackberry|opera mini|android|iphone|ipod|ipad/.test(user_agent2))) {	mobile2 = true;}
	
	if (!mobile2) {
		// jRumble	
	  	$('.grad').jrumble({
	  		x: 50,
	  		y: 5,
	  		rotation: 0,
	  		speed: 15,
	  		opacity: true
	  	});
	  	$('.grad').trigger('startRumble');
	  	/////////////////
	  	$('.grad2').jrumble({
	  		x: 30,
	  		y: 0,
	  		rotation: 0,
	  		speed: 100,
	  		opacity: false
	  	});
	  	$('.grad2').trigger('startRumble');
	};
	
	
	
	/////// enter
	$(".enter span").css({opacity:0});
	$(".enter_bg .plane").css({opacity:0});
	$(".enter").hover(function() {
		$(this).find("span").stop().animate({opacity:1 }, 800, 'easeOutExpo');
		$(this).parent().find(".plane").stop().animate({opacity:1 }, 800, 'easeOutExpo');
	},function(){
	    $(this).find("span").stop().animate({opacity:0 }, 800, 'easeOutExpo' );
		$(this).parent().find(".plane").stop().animate({opacity:0 }, 800, 'easeOutExpo');
	});
	
	
	
	/////// music_control
	$(".music_control .txt1").css({opacity:0.5});
	$(".music_control").hover(function() {
		$(this).find(".txt1").stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).find(".txt1").stop().animate({opacity:0.5 }, 400, 'easeOutExpo' );		   
	});
	
	/////// music_control
	$(".privacy .txt1").css({opacity:0.5});
	$(".privacy").hover(function() {
		$(this).find(".txt1").stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).find(".txt1").stop().animate({opacity:0.5 }, 400, 'easeOutExpo' );		   
	});
	
	/////// icons
	$(".icons li").find("a").css({opacity:0.5});
	$(".icons li a").hover(function() {
		$(this).stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).stop().animate({opacity:0.5 }, 400, 'easeOutExpo' );		   
	});	
	
	////// submenu
	/*
	$('ul#menu').superfish({
      delay:       600,
      animation:   {height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });	
	*/
	/////// sound controll	
	$(".submenu a").hover(function() {
		$(this).stop().animate({color:"#ffffff", backgroundColor:"#922553"}, 400, 'easeOutExpo');
	},function(){
	    $(this).stop().animate({color:"#ffffff", backgroundColor:"#5f1535"}, 400, 'easeOutExpo' );
	});
	
	/////// close
	$(".close span").css({opacity:0});
	$(".close_bg .plane").css({opacity:0});
	$(".close").hover(function() {
		$(this).find("span").stop().animate({opacity:1 }, 800, 'easeOutExpo');
		$(this).parent().find(".plane").stop().animate({opacity:1 }, 800, 'easeOutExpo');
	},function(){
	    $(this).find("span").stop().animate({opacity:0 }, 800, 'easeOutExpo' );
		$(this).parent().find(".plane").stop().animate({opacity:0 }, 800, 'easeOutExpo');
	});
	
	///////// photo1
	$('.gal1').hover(function(){
		$(this).find("img").stop().animate({borderColor:"#ffffff"},400);
		$(this).find(".txt").stop().animate({color:"#ffffff"},400);
	}, function(){
		$(this).find("img").stop().animate({borderColor:"#b9b9b9"},400);
		$(this).find(".txt").stop().animate({color:"#929292"},400);
	});
	
	///////// video1
	$('.vid1').hover(function(){
		$(this).find("img").stop().animate({borderColor:"#ffffff"},400);
		$(this).find(".txt").stop().animate({color:"#ffffff"},400);
	}, function(){
		$(this).find("img").stop().animate({borderColor:"#b9b9b9"},400);
		$(this).find(".txt").stop().animate({color:"#929292"},400);
	});
	


	
	
	
	
	
	
	
	// for lightbox
	/*
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
	*/
	
		
 });  ////////




$(window).load(function() {
						
	
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: false,
		verticalGutter: 14,
		verticalDragMinHeight: 49,
		verticalDragMaxHeight: 49
	});	
	
	
	
	//content switch	
	$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({visibility:'hidden',left:-950});
		   $('.main4').css({visibility:'hidden', marginTop:-2000});
		   //$('.close').css({display:'none',opacity:0});
        },
        actFu:function(_){
			if(_.curr){
				_.curr.css({visibility:'visible', left:-950}).stop().animate({left:0},800, 'easeInOutExpo');	                
			}   
			if(_.prev){
				_.prev.stop().animate({left:950},800, 'easeInOutExpo', function(){ _.prev.css({visibility:'hidden'}); });
			}
            		
			//console.log(_.pren, _.n);			
            if ( (_.n == 0) && (_.pren != -1) ){
                showSplash();
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();  
            }
			if ( (_.pren == undefined) && (_.n >= 1) ){
                _.pren = -1;
                hideSplashQ();
            }
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_SPLASH',
        hoverIn:function(li){ 
			//$('> a .over',li).stop(true).animate({top:0},400, 'easeOutExpo');
			$('> a .over',li).stop().animate({scale:1},400, 'easeOutCubic');
			$('.txt1',li).stop().animate({top:45},400, 'easeOutExpo');
			$('.txt2',li).stop().animate({top:0},400, 'easeOutExpo');
        },
        hoverOut:function(li){	
		    if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('.txt1',li).stop().animate({top:0},400, 'easeOutExpo');
     			$('.txt2',li).stop().animate({top:-45},400, 'easeOutExpo'); 
				$('> a .over',li).stop().animate({scale:0},400, 'easeOutCubic');
			};
        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	

	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});
		//start();
	}, 100);	
	
	
});