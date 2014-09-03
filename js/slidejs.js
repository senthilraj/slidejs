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
                                ele.find("ul").css({"width":parent_wid+"px", "position":"relative", "left":"0px"});
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
                            }
                        else if(settings.effect == "swing")
                        {
                            
                            ele.find("ul").css({"position":"relative", "width": img_wid+"px", "perspective" : img_wid+"px",});
                            ele.find("ul img").hide();
                            var count = 0;
                            var count_inc = 0;
                            ele.find("ul img").eq(count).show();
                            setInterval(function(){
                                    //alert();
                                    count_inc = count+1;
                                if(count<img_len-1)
                                {
                                ele.find("ul img").hide();
                                ele.find("ul img").removeClass();
                                ele.find("ul img").eq(count).show();
                                ele.find("ul img").eq(count).addClass("swing");
                                ele.find("ul img").eq(count).addClass("normal");
                                setTimeout(function(){
                                    console.log(count);
                                    ele.find("ul img").eq(count_inc).addClass("normal2");
                                    ele.find("ul img").eq(count_inc).show();
                                    ele.find("ul img").eq(count).hide();
                                    ele.find("ul img").eq(count_inc).addClass("swing2");
                                    count++;
                                },300);
                                
                                }
                                    else{
                                        console.log(count_inc);
                                        count = 0;
                                        ele.find("ul img").eq(count).addClass("normal2");
                                        ele.find("ul img").eq(count).show();
                                        ele.find("ul img").eq(count_inc-1).hide();
                                        ele.find("ul img").eq(count).addClass("swing2");
                                                
                                                
                                        }
                                /*setTimeout(function(){
                                    ele.find("ul img").eq(0).removeClass();
                                     ele.find("ul img").eq(1).removeClass("normal2");
                                   //alerT();
                                   // ele.find("ul img").eq(1).addClass("swing");
                                    // ele.find("ul img").eq(1).addClass("normal");
                                    setTimeout(function(){
                                        ele.find("ul img").eq(1).hide();
                                        ele.find("ul img").eq(0).addClass("swing");
                                        ele.find("ul img").eq(0).show();
                                        ele.find("ul img").eq(0).addClass("normal");
                                     },400);
                                },3500);*/

                                }, settings.speed);
                        }
		});
	
	};
}( jQuery ));