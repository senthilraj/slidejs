(function ( $ ){

	$.fn.slidejs = function(options) {
		var defaults = {
			speed : 5000,
			slide_speed : 600,
                        effect : "normal"
		};
		
		var settings = $.extend( {}, defaults, options );
		
		return this.each( function() {
			var ele = $( this );
			var img_wid = ele.find("img").width();
			var img_len = ele.find("img").length;
			console.log(img_wid);
			console.log(img_len);
			var parent_wid = img_wid * img_len;
			var count=1;
                        if(settings.effect == "normal")
                            {
                                var img_hei = ele.find("img").height();
                                ele.css({"height":img_hei+"px"});
                                ele.css({"width":img_wid+"px"})
                                ele.find("ul").css({"width":parent_wid+"px", "position":"relative", "left":"0px"});
                                setInterval(function(){
                                        if(count<img_len)
                                        {
                                        ele.find("ul").animate( { left: "-"+count*img_wid+"px"}, settings.slide_speed);

                                        count++;
                                        }
                                        else{
                                                count = 0;
                                        }

                                }, settings.speed);
                            }
                        else if(settings.effect == "swing")
                        {
                            ele.find("ul img").hide();
                            var count = 0;
                            var count_inc = 0;
                            ele.find("ul img").eq(count).show();
                            setInterval(function(){
                                count_inc = count+1;
                                if(count<img_len-1 && count == 0)
                                {
                                   ele.find("ul img").eq(count).show();
                                    setTimeout(function(){
                                        ele.find("ul img").eq(count).addClass("swing");
                                        ele.find("ul img").eq(count).addClass("normal");
                                    },100);
                                    setTimeout(function(){
                                        ele.find("ul img").eq(count_inc).addClass("normal2");
                                        ele.find("ul img").eq(count_inc).show();
                                        ele.find("ul img").eq(count).hide();
                                        ele.find("ul img").eq(count_inc).addClass("swing2");
                                        count++;
                                    },400); 
                                }    
                                else if(count<img_len-1 && count != 0)
                                {
                                ele.find("ul img").hide();
                                ele.find("ul img").eq(0).removeClass();
                                ele.find("ul img").eq(count).show();
                                setTimeout(function(){
                                    ele.find("ul img").eq(count).addClass("swing3");
                                    ele.find("ul img").eq(count).addClass("normal");
                                },100);
                                setTimeout(function(){
                                    ele.find("ul img").eq(count_inc).addClass("normal2");
                                    ele.find("ul img").eq(count_inc).show();
                                    ele.find("ul img").eq(count).hide();
                                    ele.find("ul img").eq(count_inc).addClass("swing2");
                                    count++;
                                },400);
                                }
                                else{
                                        ele.find("ul img").eq(count).removeClass();
                                        ele.find("ul img").eq(count).addClass("swing3");
                                        ele.find("ul img").eq(count).addClass("normal");
                                        var old_count = count;
                                        count = 0;
                                        setTimeout(function(){
                                        ele.find("ul img").eq(count).addClass("normal4");
                                        ele.find("ul img").eq(count).show();
                                        ele.find("ul img").eq(old_count).hide();
                                        ele.find("ul img").eq(count).addClass("swing4");
                                        },300);
                                        setTimeout(function(){
                                            ele.find("ul img").removeClass();       
                                        },3000);        
                                    }
                                }, settings.speed);
                        }
		});
	
	};
}( jQuery ));