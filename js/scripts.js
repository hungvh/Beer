include("js/jquery.color.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include("js/jquery.fancybox-1.3.4.pack.js");
include("js/uScroll.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/bgStretch.js");
include("js/sImg.js");
include("js/forms.js");
include("js/jquery.transform2d.js");
include("js/jquery-ui-1.9.2.custom.min.js");

function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = true, content, defColor;

function addAllListeners() {
    $('#splash>ul>li>a').hover(
        function(){
            if (!MSIE) {
            	$(this).stop().animate({'transform':'scale(0.8)'},600,'easeOutExpo')
                    .find('img').stop().animate({'transform':'scale(1.6)'},600,'easeOutElastic')
            } else {
                $(this).stop().animate({'marginTop':'-15px','paddingBottom':'15px'},600,'easeOutExpo')
            }
        },
        function(){
            if (!MSIE) {
                $(this).stop().animate({'transform':'scale(1)'},500,'easeOutCubic')
                    .find('img').stop().animate({'transform':'scale(1)'},500,'easeOutCubic')  
            } else {
                $(this).stop().animate({'marginTop':'0px','paddingBottom':'0'},600,'easeOutCubic')
            }
        }
    );
    $('.list1>li>p>a').hover(
        function(){
        	$('strong',this).stop(true).animate({'width':'100%'},300,'easeOutCubic') 
        	$('strong>span',this).stop(true).animate({'width':'50%','left':'50%'},300,'easeOutCubic') 
        },
        function(){
            $('strong',this).stop(true).animate({'width':'0'},600,'easeOutCubic');  
            $('strong>span',this).stop(true).animate({'width':'0','left':'130%'},600,'easeOutCubic');  
        }
    ); 
	$('.list4>li>figure>a')
    .find('strong').css('top','200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block',opacity:'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},350,'easeInOutExpo');
            } else { 
                $(this).children('.sitem_over').stop().show().end()
                .find('strong').stop().show().css({'top':'0'});
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},1000,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},1000,'easeOutQuad');  
            } else {
                $(this).children('.sitem_over').stop().hide().end()
                .find('strong').stop().hide();
            }            
        }
    );
    var val1 = $('.readMore').css('color')
    $('.readMore').hover(
        function(){
        	$(this).stop().animate({'color':'#fff'},300,'easeOutExpo')
                .find('>span').stop().animate({'width':'0'},300,'easeOutExpo')
        },
        function(){
            $(this).stop().animate({'color':val1},600,'easeOutCubic')
                .find('>span').stop().animate({'width':'100%'},600,'easeOutCubic')
        }
    ); 
    $('.readMore2').hover(
        function(){
        	$('span',this).stop().animate({'width':'0'},300,'easeOutExpo')
        },
        function(){
            $('span',this).stop().animate({'width':'100%'},600,'easeOutCubic')
        }
    );
}

function showSplash(){
    $("h1").stop().animate({'marginTop':'75px'},500,'easeInOutCubic')
    $("#splash").stop().animate({'top':'0'},500,'easeInOutCubic')
        .find('>ul>li').each(function (ind){
            $(this).stop(true).delay(ind*150+50).animate({'marginTop':'0'},500,'easeOutExpo')
        })
    $('.pagin').stop().animate({'top':'-34px'},500,'easeInOutCubic')
    $('footer').stop().animate({'bottom':'0'},500,'easeInOutExpo')
        .find('>div:first-child+div').stop().animate({'height':'0'},600,'easeInOutExpo').end()
        .find('>div:first-child+div+div').stop().animate({'paddingTop':'0'},600,'easeInOutExpo')
    content.find('>ul').stop().animate({'height':'0','top':'820px'},600,'easeInOutExpo')
}

function hideSplash(){
    $("h1").stop().animate({'marginTop':'25px'},500,'easeInOutCubic')
    $("#splash").stop().animate({'top':'1000px'},500,'easeInOutCubic')
        .find('>ul>li').each(function (ind){
            $(this).stop(true).delay(ind*150).animate({'marginTop':'500px'},500,'easeOutExpo')
        })
    $('.pagin').stop().animate({'top':'6px'},500,'easeInOutCubic')
    $('footer').stop().animate({'bottom':'487px'},600,'easeInOutExpo')
        .find('>div:first-child+div').stop().animate({'height':'450px'},600,'easeInOutExpo').end()
        .find('>div:first-child+div+div').stop().animate({'paddingTop':'38px'},600,'easeInOutExpo')
    content.find('>ul').stop().animate({'height':'450px','top':'380px'},600,'easeInOutExpo')
}

function hideSplashQ(){
    $("h1").stop().animate({'marginTop':'25px'},0)
    $("#splash").stop().animate({'top':'1000px'},0)
        .find('>ul>li').each(function (ind){
            $(this).stop(true).delay(ind*50).animate({'marginTop':'500px'},0)
        })
    $('.pagin').stop().animate({'top':'6px'},0)
    $('footer').stop().animate({'bottom':'487px'},0)
        .find('>div:first-child+div').stop().animate({'height':'450px'},0).end()
        .find('>div:first-child+div+div').stop().animate({'paddingTop':'38px'},0)
    content.find('>ul').stop().animate({'height':'450px'},0)
}

$(document).ready(ON_READY);
$(window).load(ON_LOAD);

function ON_READY() {
    /*SUPERFISH MENU*/ 
    $('.menu #menu').superfish({
	   delay: 800,
	   animation: {
	       height: 'show'
	   },
       speed: 'slow',
       autoArrows: false,
       dropShadows: false
    });
}

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').fadeOut();
    
    var selectedDays = ['5-12-2012','15-12-2012','17-12-2012','20-12-2012','30-12-2012','1-1-2013','10-1-2013','20-1-2013','30-1-2013'];
    
    $( "#datepicker" ).datepicker({
        dayNamesMin: ['S','M','T','W','T','F','S'],
        beforeShowDay: function (date){
            var dmy = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
            if ($.inArray(dmy, selectedDays) != -1) {
                return [true, "markedDay",''];
            } else {
                return [false,"",''];
            }
        }
    });
    
	$('.list4>li>figure>a').attr('rel','appendix')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    $('.list4>li>figure>a').fancybox({
        'transitionIn': 'elastic',
    	'transitionOut': 'elastic',
    	'speedIn': 500,
    	'speedOut': 300,
        'centerOnScroll': true,
        'overlayColor': '#000'
    });
   
    $('.scroll')
	.uScroll({			
		mousewheel:true,
        step: 30,
        lay:'outside'
	});
    $('.scroll2')
	.uScroll({			
		mousewheel:true,
        step: 306,
        lay:'outside'
	});
    
    //content switch
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'visibility':'hidden'});	
            hideSplashQ();	
        },
        actFu:function(_){            
            if(_.curr){
                if (_.n == 0){
                    showSplash();
                } else {
                    hideSplash();
                }
                
                _.curr
                    .css({'top':'-1000px','visibility':'visible'}).stop(true).show().animate({'top':'0'},{duration:900,easing:'easeInOutCubic'});
            }   
            var prev = _.prev;
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'top':'1000px'},{duration:600,easing:'easeInOutExpo',complete:function(){
                            if (_.prev){
                                prev.css({'visibility':'hidden'});
                            }
                        }
		              });
            }            
  		}
    });
    defColor = $('#menu>li').not('.active').find('>a>span').css('color'); 
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_home',
        hoverIn:function(li){
            $('>a>span', li).stop().animate({'color': '#5f5f5f'},300,'easeOutExpo');
            $('>a>strong',li).stop().animate({'height':'100%','top':'0'},300,'easeOutExpo');
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                $('>a>span', li).stop().animate({'color': defColor},600,'easeOutCubic');
                $('>a>strong',li).stop().animate({'height':'0','top':'100%'},600,'easeOutCubic');
            }
        }
    })
    .navs(function(n,_){
   	    $('#content').tabs(n);
        if (_.prevHash == '#!/page_mail') { 
            $('#form1 a').each(function (ind, el){
                if ($(this).attr('data-type') == 'reset') { $(this).trigger('click') }   
            })
        }
   	});
        
    setTimeout(function(){
        $('#bgStretch').bgStretch({
    	   align:'leftTop',
           navs:$('.pagin').navs({autoPlay: 10000})
        })
        .sImg({
            sleep: 1000,
            spinner:$('<div class="spinner spinner_bg"></div>').css({opacity:.5}).stop().hide(3000)
        });
    },0);
    
    setTimeout(function(){
        $('body').css({'overflow':'visible'});
    },300); 
    
    addAllListeners();
}