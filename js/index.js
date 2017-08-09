$(function(){
    index_gd();
	index_gd_home(".sec02_con .imgWrap img", ".sec02_con .imgWrap",370, 524)
})

function index_gd_home(SetImgEle, SetimgWrap,SetImgWidth, SetImgHeight) {
	var $window = $(SetimgWrap);
	var $windowWidth = function() {
		return $window.width();
	};
	var $windowHeight = function() {
		return $window.height();
	};
	$window.fssResize(function() {
		var width = $windowWidth();
		var height = $windowHeight();

		$(SetimgWrap).each(function() {
			$this = $(this);
			$this.height(height).width(width);
			$this.triggerHandler("configuration", {
				height: height,
				width: width,
				items: {
					width: width
				}
			});
			$this.triggerHandler("updateSizes");
		});

	});

	$(SetImgEle).each(function() {
		$(this).fullscreenstage({
			'width': SetImgWidth,
			'height': SetImgHeight
		});
	});

	$(window).fssResize();

}

function index_gd() {
	var $window = $(window);

	var $windowWidth = function() {
		return $window.width();
	};
	var $windowHeight = function() {
		return $window.height()-100;
	};
		   
	$window.fssResize(function() {
		var width = $windowWidth();
		var height = $windowHeight();

		$('#home .silder_img').each(function() {
			$this = $(this);
			$this.height(height).width(width);
			$this.triggerHandler("configuration", {
				height: height,
				width: width,
				items: {
					width: width
				}
			});
			$this.triggerHandler("updateSizes");
		});
        $('#home .silder').each(function() {
			$this = $(this);
			$this.height(height).width(width);
			$this.triggerHandler("configuration", {
				height: height,
				width: width,
				items: {
					width: width
				}
			});
			$this.triggerHandler("updateSizes");
		});

	});

	$('#home .silder_img img').each(function() {
		$(this).fullscreenstage({
			'width': 1920,
			'height': 980
		});
	});

	$(window).fssResize();
	$('#home .silder').carouFredSel({
		'responsive': true,
		items: {
			visible: 1
		},
		'scroll': {
			'duration': 1000,
			'items': 1,
			'fx':'crossfade',
			 onBefore:function(data){
				//  console.log(data)
				// var _old=data.items.old;
				// var _visible=data.items.visible;
                //  console.log(_old)
				//  console.log(_visible)
            },
            onAfter:function(data){
				// var _old=data.items.old;
				// var _visible=data.items.visible;
                //  _old.find(".p1").css({"margin-left":"-800px"});
				//   _old.find(".p2").css({"margin-left":"-800px"});
				//  _visible.find(".p1effe01").animate({"margin-left":"0px"},function(){
				// 	 _visible.find(".p1effe02").animate({"margin-left":"0px"},function(){
				// 		_visible.find(".p1effe03").animate({"margin-left":"0px"});
					 
				// 	});
					 
					  
				//  });
				  
            },
		},
		// 'auto': {'duration': 800},
        'auto': false,
		'pagination': '.banner-pagination'
	});
	// $(".section_silder .fss-wrapper").eq(0).find(".p1").css({"margin-left":"0px"});
	// $(".section_silder .fss-wrapper").eq(0).find(".p2").css({"margin-left":"0px"});
	
	

	$(window).fssResize();
   
		   

};