slidejs
=======

SlideJs - Image Slider jQuery Plugin


How to use
==========

- 1)Include jquery plugin and SlideJs plugin
- 2)call slidejs() function with parent of slider ID or class name

```html
<script src="js/jquery.js"></script>
<script src="js/slidejs"></script>
<script>
  $(document).ready(function(){
    $("#slide").slidejs();
  });
</script>
```

- 3)put html code in body tag like below:
```html
<div id="slide">
					<ul>
						<li><img src="images/1.jpg"></li>
						<li><img src="images/2.jpg"></li>
						<li><img src="images/3.jpg"></li>
						<li><img src="images/4.jpg"></li>
					</ul>
</div>
```        

- 4)also put css fiel
```html
<link rel="stylesheet" type="text/css" href="css/slidejs.css">
```
###Options 

- if you want to set speed slider, then call method like below:
```html
$("#slide").slidejs({speed : 7000, slide_speed : 900});
```

## Demo

###[Click to see Demo](http://senthilraj.github.io/slidejs/)


## Download

### Download [ScrollNaviJs zip archive](https://github.com/senthilraj/slidejs/archive/master.zip)


About me
========
 I am senthil and I am 22 years old designer and developer specialised in jquery. I am doing rich websites and creating mobile apps using in phonegap, jquery  moblie, any doubts or help feel free to contact me Mail: senthil2rajan@gmail.com

Website: www.senthiluideveloper.co.nr/

Add your Website
================

if you are using our plugin, we will add in here as plugin users with website link,
so kindly send me your website link to this MailId : senthil2rajan@gmail.com 

Thanks
