var init = {
	$images:$('#story section article'),
	$intro:$('#introduction'),
	$story:$('#story'),
	$generic:$('#generic'),
	$footer:$('footer'),
	isKeyUp:true,
	keyLeft:true,
	keyRight:true,
	keySpace:true,
	keyWork:true,
	PageTl:false,
	mainTl:new TimelineMax(),

	pagesAnim:function(sens){
		var that = this,
		imgLg = that.$images.length;

		if(that.PageTl)
			if(that.PageTl.isActive())
				that.PageTl.totalProgress(1);
		that.PageTl = new TimelineMax({autoRemoveChildren:true});
		if(sens){
			that.PageTl.to(that.$images.eq(that.curr), 1, {autoAlpha:0, x:-400,zIndex:0}, "debut")
			.fromTo(that.$images.eq(that.next), 1, {autoAlpha:0, x:400, zIndex:0}, {autoAlpha:1, x:0, zIndex:1}, "debut+=0.5")
			.to(that.$pages.eq(that.curr), 1, {autoAlpha:0, scale:1.8, zIndex:0}, "debut")
			.fromTo(that.$pages.eq(that.next), 0.8, {autoAlpha:0, scale:0.5, zIndex:0}, {autoAlpha:1, scale:1, zIndex:1}, "debut+=0.3")
			.eventCallback("onStart", function(){
				that.prev = (that.prev >= imgLg - 1) ? 0 : that.prev + 1;
				that.curr = (that.curr >= imgLg - 1) ? 0 : that.curr + 1;
				that.next = (that.next >= imgLg - 1) ? 0 : that.next + 1;
				that.letterAnim();
			});
		}else{
			that.PageTl.to(that.$images.eq(that.curr), 1, {autoAlpha:0, x:400,zIndex:0}, "debut")
			.fromTo(that.$images.eq(that.prev), 1, {autoAlpha:0, x:-400, zIndex:0}, {autoAlpha:1, x:0, zIndex:1}, "debut+=0.5")
			.to(that.$pages.eq(that.curr), 1, {autoAlpha:0, scale:0.5, zIndex:0}, "debut")
			.fromTo(that.$pages.eq(that.prev), 0.8, {autoAlpha:0, scale:1.8, zIndex:0}, {autoAlpha:1, scale:1, zIndex:1}, "debut+=0.3")
			.eventCallback("onStart", function(){
				that.prev = (that.prev <= 0) ? that.$images.length - 1 : that.prev - 1;
				that.curr = (that.curr <= 0) ? that.$images.length - 1 : that.curr - 1;
				that.next = (that.next <= 0) ? that.$images.length - 1 : that.next - 1;
				that.letterAnim();
			});
		}
	},

	key2focus:function(key){
		var that = this;

		if(key == 1){
			$('#left-arrow').css('animation-name', 'shake');
			$('#right-arrow').css('animation-name', '');
			$('#space').css('animation-name', '');
		}
		else if(key == 2){
			$('#left-arrow').css('animation-name', '');
			$('#right-arrow').css('animation-name', 'shake');
			$('#space').css('animation-name', '');
		}
		else if(key == 3){
			$('#left-arrow').css('animation-name', '');
			$('#right-arrow').css('animation-name', '');
			$('#space').css('animation-name', 'shakeY');
		}else{
			$('#left-arrow').css('animation-name', '');
			$('#right-arrow').css('animation-name', '');
			$('#space').css('animation-name', '');
		}
	},

	letterAnim:function(){
		var that = this,
		letterTL = new TimelineMax();

		that.$story.find('header h2').html(that.$images.eq(that.curr).find('span').html());
		letterTL.staggerTo(that.$story.find('header h2 span').toArray(), 0.2, {autoAlpha:1, y:0}, 0.025);
	},

	loadAnim:function(show){
		var that = this,
		showTl = new TimelineMax();

		if(show){
			$('#canvas-container').css("background-image","url('" + that.$images.eq(that.curr).find('img').attr("src") + "')");
			showTl.to(that.$story, 0.8, {autoAlpha:0, display:'none', scale:0, onStart:function(){
				that.keyLeft = false;
				that.keyRight = false;
				that.keySpace = false;
				$('.arrow').css('visibility', 'hidden');
				$('#space').css('visibility', 'hidden');
			}})
			.to($('#canvas-container'), 0.5, {autoAlpha:1, display:'block', scale:1})
			.to($('#animations'), 0.5, {autoAlpha:1, display:'block'})
			.eventCallback("onComplete", function(){
				canvasAnim[that.curr]();
			});
		}else{
			showTl.to($('#animations'), 0.4, {autoAlpha:0, display:'none'})
			.to($('#canvas-container'), 0.8, {autoAlpha:0, display:'none', scale:0, onComplete:function(){
				$('#canvas-container').css("background-image","url('none')");
				$('.arrow').css('visibility', 'visible');
				$('#space').css('visibility', 'visible');
			}})
			.to(that.$story, 0.5, {autoAlpha:1, display:'block', scale:1, onComplete:function(){
				setTimeout("" + that.key2focus(2), 1000);
				that.keyLeft = true;
				that.keyRight = true;
				that.keySpace = true;
			}});
		}
	},

	init:function(){
		var that = this;
		that.prev = that.$images.length - 1;
		that.curr = 0;
		that.next = 1;

		// SOUNDS MANAGER
		$.ionSound({
			sounds:[
				"button_tiny"
			],
			path:"sounds/",
			multiPlay:true,
			volume:"0.4"
		});

		// FOOTER SETTING
		that.$footer.append('<ul></ul>');
		that.$images.each(function(index){
			that.$footer.find('ul')
			.append('<li><div class="page">' + (index + 1) + '</div><div class="total-page">.' + that.$images.length + '</div></li>');
			if(index == 0){
				$(this).css({opacity:1, visibility:'visible', zIndex:1});
				that.$footer.find('ul li').eq(index).css({opacity:1, visibility:'visible', zIndex:1});
			}
		});
		that.$pages = that.$footer.find('ul li');

		// TITLE PARSING
		that.$story.find('section>article>span').html(function(index, oldhtml){
			return oldhtml.replace(/(\w)/g,"<span>$&</span>");
		});

		// DOM POSITIONNING
			//introduction
		that.$intro.find('h1:first').css('margin-top',Math.round((that.$intro.innerHeight() - that.$intro.find('h1:first').outerHeight()) / 3) + 'px');
		that.$intro.find('img:first').css('margin-left',Math.round((that.$intro.innerWidth() - that.$intro.find('img:first').width()) / 2) + 'px');
			//story
		$('.arrow').each(function(){
			$(this).css('top',Math.round((that.$story.innerHeight() - $(this).outerHeight()) / 2) + 'px');
		});
		that.$images.each(function(){
			$(this).css({
				left:Math.round((that.$story.innerWidth() - $(this).outerWidth()) / 2) + 'px',
				top:Math.round((that.$story.innerHeight() - $(this).outerHeight(true)) / 2.5) - 50 + 'px'
			});
		});
		$('#space').css('left', Math.round((that.$story.innerWidth() - $('#space').outerWidth()) / 2) + 'px');
		$('#canvas-container').html('<canvas id="animations" width="'+$('#canvas-container').innerWidth()+'" height="'+$('#canvas-container').innerHeight()+'"></canvas>');

		// KEYS EVENTS MANAGEMENT
		$('body').keydown(function(e){
			e.preventDefault();
			if(that.isKeyUp && that.keyWork){
			    that.isKeyUp = false;
				switch(e.which){
					case 39:
						if(that.keyRight){
							$.ionSound.stop("button_tiny");
							$.ionSound.play("button_tiny");
							that.pagesAnim(true);
							that.key2focus(3);
						}
					break;
					case 37:
						if(that.keyLeft){
							$.ionSound.stop("button_tiny");
							$.ionSound.play("button_tiny");
							that.pagesAnim();
							that.key2focus(3);
						}
					break;
					case 32:
						if(that.keySpace){
							$.ionSound.stop("button_tiny");
							$.ionSound.play("button_tiny");
							that.loadAnim(true);
							that.key2focus(0);
						}
					break;
					case 27:
						that.loadAnim();
					break;
					case 17:
						that.mainTl.resume();
					break;
				}
			}
		}).keyup(function(){
			that.isKeyUp = true;
		});
	},

	main:function(){
		var that = this;

		that.init();

		//animations
		that.mainTl.to(that.$intro.find('h1:first'), 1, {letterSpacing:'0px',autoAlpha:1,scale:1, delay:0.9})
		.to(that.$intro.find('h2:first'), 1, {autoAlpha:1, x:0, textAlign:"center"})
		.to(that.$intro.find('img:first'), 1, {autoAlpha:1, y:0})
		.to(that.$intro, 0.4, {autoAlpha:0, display:'none', x:-that.$intro.width(), delay:2})
		.to(that.$story, 1, {autoAlpha:1, display:'block', scale:1, onStart:function(){
			$('.arrow').css('visibility', 'visible');
			$('#space').css('visibility', 'visible');
		},onComplete:function(){
			that.letterAnim();
			that.key2focus(3);
			that.mainTl.pause();
		}}, "-=0.3")
		.to(that.$story, 1, {autoAlpha:0, display:'none', scale:0});
	}
};
init.main();
