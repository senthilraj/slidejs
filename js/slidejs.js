(function ( $ ){

	$.fn.slidejs = function(options) {
		var defaults = {
			speed : 5000,
			slide_speed : 600
		};
		
		var settings = $.extend( {}, defaults, options );
		
		return this.each( function() {
			var ele = $( this );
			var img_wid = ele.find("img").width();
			var img_len = ele.find("img").length;
			console.log(img_wid);
			console.log(img_len);
			var parent_wid = img_wid * img_len;
			ele.find("ul").css({"width":parent_wid+"px", "position":"relative", "left":"0px"});
			var count=1;
			setInterval(function(){
				//alert();
				if(count<img_len)
				{
				ele.find("ul").animate( { left: "-"+count*img_wid+"px"}, settings.slide_speed);
				
				count++;
				}
				else{
					count = 0;
				}
			
			}, settings.speed);
		});
	
	};
}( jQuery )); 
