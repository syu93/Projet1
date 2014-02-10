canvasAnim = [
function(){
	var w = $('#animations').width(),
	h = $('#animations').height(),
	canvasTl = new TimelineMax(),
	stage = new createjs.Stage("animations");

// THE VEIL
	veil = new createjs.Shape();
	veil.graphics.beginFill("#fff").drawRect(0, 0, w, h);
	veil.alpha = 0;

// PRESENTATION
// -------- container 1 ------------------------------------------
	var group1 = new createjs.Container();
	group1.scaleX = 1;
	group1.scaleY = 1;

	var placo_txt1 = new createjs.Text("PLACOPLATRE", "100px Iceland", "#2bC96e");
	placo_txt1.shadow =  new createjs.Shadow("#999", 0, 0, 4);
	placo_txt1.x = w / 2;
	placo_txt1.y = h/10;
	placo_txt1.alpha = 0;

	var placo_txt1_bg = new createjs.Shape();
	placo_txt1_bg.graphics.beginFill("#2ecc71").drawRect(0, 0, placo_txt1.getMeasuredLineHeight() + 28, h);
	placo_txt1_bg.alpha = 0;

	var placo_txt11 = new createjs.Text("Leader sur le marché du plâtre et de l’isolation, la société conçoit des solutions innovantes et performantes, à destination des professionnels de la construction, mais aussi des particuliers.", "55px Simonetta", "#95A5A6");
	placo_txt11.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt11.alpha = 0;
	placo_txt11.lineWidth = w - (placo_txt1.getMeasuredHeight()+208);
	placo_txt11.lineHeight = placo_txt11.getMeasuredLineHeight()+15;
	placo_txt11.x = 0;
	placo_txt11.y = (h - placo_txt11.getMeasuredHeight())/3;

	border1 = new createjs.Shape();
	border1.graphics.ss(35).s("#2ecc71").dc(w/2.4, h/2, (Math.sqrt(w*w+h*h))/2);
	border1.alpha = 0;

	group1.addChild(placo_txt11, placo_txt1_bg, placo_txt1, border1);

// -------- container 2 ------------------------------------------
	var group2 = new createjs.Container();
	group2.x = 3*w/2;
	group2.y = 3*h/2;
	group2.scaleX = 0.2;
	group2.scaleY = 0.2;
	group2.alpha = 0;

	var placo_txt2 = new createjs.Text("De 1920 à nos jours ...", "100px Iceland", "#3498db");
	placo_txt2.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt2.regX = placo_txt2.getMeasuredWidth()/2;
	placo_txt2.regY = placo_txt2.getMeasuredHeight()/2;
	placo_txt2.x = w/2;
	placo_txt2.y = h/2.1;

	var placo_txt21 = new createjs.Text("1920", "80px Iceland", "#95A5A6");
	placo_txt21.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt21.regX = placo_txt21.getMeasuredWidth()/2;
	placo_txt21.regY = placo_txt21.getMeasuredHeight()/2;
	placo_txt21.x = w/2;
	placo_txt21.y = h/3;

	var placo_txt211 = new createjs.Text("Exploitation du gypse et création du site par les sociétés Lambert, Poliet&Chausson", "1px Simonetta", "#95A5A6");
	placo_txt211.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt211.x = placo_txt21.x+56;
	placo_txt211.y = placo_txt21.y;
	placo_txt211.maxWidth = 12;
	placo_txt211.lineWidth = 14;
	placo_txt211.lineHeight = 2;
	placo_txt211.alpha = 0;

	var placo_txt22	= new createjs.Text("1946", "80px Iceland", "#95A5A6");
	placo_txt22.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt22.x = w/20;
	placo_txt22.y = h/20;
	placo_txt22.rotation = 35;

	var placo_txt221 = new createjs.Text("Création de la société Placoplatre", "1px Simonetta", "#95A5A6");
	placo_txt221.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt221.x = placo_txt22.x+84;
	placo_txt221.y = placo_txt22.y+123;
	placo_txt221.alpha = 1;

	var placo_txt23	= new createjs.Text("1949", "80px Iceland", "#95A5A6");
	placo_txt23.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt23.x = w/20;
	placo_txt23.y = (19*h/20)-placo_txt23.getMeasuredHeight();

	var placo_txt231 = new createjs.Text("Création de la première plaque de plâtre", "1px Simonetta", "#95A5A6");
	placo_txt231.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt231.x = placo_txt23.x+96;
	placo_txt231.y = placo_txt23.y+46;
	placo_txt231.alpha = 0;

	var placo_txt24	= new createjs.Text("1970", "80px Iceland", "#95A5A6");
	placo_txt24.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt24.x = w/5;
	placo_txt24.y = (3*h/5)-placo_txt24.getMeasuredHeight();
	placo_txt24.rotation = 15;

	var placo_txt241 = new createjs.Text("Mise en place les premiers moules à carreau", "1px Simonetta", "#95A5A6");
	placo_txt241.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt241.x = placo_txt24.x+82;
	placo_txt241.y = placo_txt24.y+59;
	placo_txt241.alpha = 0;

	var placo_txt25	= new createjs.Text("1974", "80px Iceland", "#95A5A6");
	placo_txt25.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt25.x = 4*w/5;
	placo_txt25.y = h-placo_txt25.getMeasuredHeight();

	var placo_txt251 = new createjs.Text("Démarrage de la seconde chaîne de production de plaques de plâtres", "1px Simonetta", "#95A5A6");
	placo_txt251.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt251.x = placo_txt25.x+49;
	placo_txt251.y = placo_txt25.y+49;
	placo_txt211.maxWidth = 14;
	placo_txt251.lineWidth = 16;
	placo_txt251.lineHeight = 2;
	placo_txt251.alpha = 0;

	var placo_txt26	= new createjs.Text("1983", "80px Iceland", "#95A5A6");
	placo_txt26.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt26.x = 19*w/20-placo_txt26.getMeasuredWidth();
	placo_txt26.y = (h-placo_txt26.getMeasuredHeight())/2;
	placo_txt26.rotation = 20;
	placo_txt24.rotation = 15;

	var placo_txt261 = new createjs.Text("Modernisation de la première chaîne de production de plaque de plâtre", "1px Simonetta", "#95A5A6");
	placo_txt261.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt261.x = placo_txt26.x+112;
	placo_txt261.y = placo_txt26.y+78;
	placo_txt261.maxWidth = 14;
	placo_txt261.lineWidth = 16;
	placo_txt261.lineHeight = 2;
	placo_txt261.alpha = 0;

	var placo_txt27	= new createjs.Text("1993", "80px Iceland", "#95A5A6");
	placo_txt27.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt27.x = 19*w/20-placo_txt27.getMeasuredWidth();
	placo_txt27.y = h/20+placo_txt27.getMeasuredHeight();
	placo_txt27.rotation = -25;

	var placo_txt271 = new createjs.Text("Démarrage de l’atelier de recyclage de plaques de plâtre et début de la réhabilitation des carrières", "1px Simonetta", "#95A5A6");
	placo_txt271.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt271.x = placo_txt27.x+26;
	placo_txt271.y = placo_txt27.y+37;
	placo_txt271.maxWidth = 14;
	placo_txt271.lineWidth = 16;
	placo_txt271.lineHeight = 1.5;
	placo_txt271.alpha = 0;

	var placo_txt28	= new createjs.Text("2006-2008", "80px Iceland", "#95A5A6");
	placo_txt28.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt28.x = 8*w/10-placo_txt28.getMeasuredWidth();
	placo_txt28.y = (3*h/4)-placo_txt28.getMeasuredHeight();
	placo_txt28.rotation = -45;

	var placo_txt281 = new createjs.Text("Construction de la nouvelle chaîne de production de plaques de plâtre : V5 ", "1px Simonetta", "#95A5A6");
	placo_txt281.shadow =  new createjs.Shadow("#999", 0, 0, 2);
	placo_txt281.x = placo_txt28.x+264;
	placo_txt281.y = placo_txt28.y-201;
	placo_txt281.maxWidth = 14;
	placo_txt281.lineWidth = 16;
	placo_txt281.lineHeight = 1.5;
	placo_txt281.alpha = 0;

	border2 = new createjs.Shape();
	border2.graphics.ss(35).s("#3498db").dc(w/2.4, h/2, (Math.sqrt(w*w+h*h))/2);
	border2.alpha = 1;

	var group21 = new createjs.Container();
	group21.alpha = 0;
	group21.addChild(placo_txt21,placo_txt211,placo_txt22,placo_txt221,placo_txt23,placo_txt231,placo_txt24,placo_txt241,placo_txt25,placo_txt251,placo_txt26,placo_txt261,placo_txt27,placo_txt271,placo_txt28,placo_txt281);

	group2.addChild(placo_txt2, group21, border2);

// -------- container 3 ------------------------------------------
	var group3 = new createjs.Container();

	//group3.addChild();

// -------- container 4 ------------------------------------------
	var group4 = new createjs.Container();

	//group4.addChild();

// -------- container 5 ------------------------------------------
	var group5 = new createjs.Container();

	//group5.addChild();

// ---------------------------------------------------------------
// ---------------------------------------------------------------
    stage.addChild(veil, group1, group2, group3, group4, group5);
	TweenMax.ticker.addEventListener("tick", stage.update, stage);
	stage.update();
//--------------------------------------------------------------------
//--------------------------------------------------------------------

	canvasTl.to(veil, 0.1, {alpha:0.98})
	.to(placo_txt1, 2, {alpha:1, delay:0.1, ease:Elastic.easeOut, x:90})
	.to(placo_txt1, 0.8, {rotation:-90, y:h-(h - placo_txt1.getBounds().width)/2, x:0})
	.to(placo_txt1_bg, 0.2, {alpha:1, onStart:function(){
		placo_txt1.color = "#F0F0F0";
	}})
	.to(placo_txt11, 1.5, {alpha:1, x:placo_txt1.getMeasuredLineHeight() + 68})
	.to(group1, 1, {delay:10, scaleX:0.2, scaleY:0.2, x:w/2, y:h/2, onStart:function(){
		group2.alpha = 1;
	}})
	.to(border1, 0.2, {alpha:1})
	.to(group1, 2, {x:-w/2, y:-h/2}, "label1")
	.to(group2, 2, {x:w/2.9, y:h/2.5}, "label1")
	.to(group2, 1, {scaleX:1, scaleY:1, x:0, y:0, onStart:function(){
		border2.alpha = 0;
	}})
	.to(placo_txt2, 1, {delay:4, rotation:360, scaleX:0, scaleY:0})
	.to(group21, 0.5, {alpha:1})
	.to(group21, 4, {x:-41.12*placo_txt2.getMeasuredWidth(), y:-135*placo_txt2.getMeasuredHeight(), scaleX:49, scaleY:49, onStart:function(){
		placo_txt21.color = "#3498db";
		placo_txt211.alpha = 1;
	}})
	.to(group21, 2, {x:0, y:0, scaleX:1, scaleY:1, onComplete:function(){
		placo_txt21.color = "#95A5A6";
		placo_txt211.alpha = 0;
	}})
	.to(group21, 4, {x:-8.2*placo_txt2.getMeasuredWidth(), y:-92*placo_txt2.getMeasuredHeight(), scaleX:49, scaleY:49, onStart:function(){
		placo_txt22.color = "#3498db";
		placo_txt221.alpha = 1;
	}})
	.to(group21, 2, {x:0, y:0, scaleX:1, scaleY:1, onComplete:function(){
		placo_txt22.color = "#95A5A6";
		placo_txt221.alpha = 0;
	}})
	.to(group21, 4, {x:-8.9*placo_txt2.getMeasuredWidth(), y:-375*placo_txt2.getMeasuredHeight(), scaleX:49, scaleY:49, onStart:function(){
		placo_txt23.color = "#3498db";
		placo_txt231.alpha = 1;
	}})
	.to(group21, 2, {x:0, y:0, scaleX:1, scaleY:1, onComplete:function(){
		placo_txt23.color = "#95A5A6";
		placo_txt231.alpha = 0;
	}})
	.to(group21, 4, {x:-19.8*placo_txt2.getMeasuredWidth(), y:-239*placo_txt2.getMeasuredHeight(), scaleX:49, scaleY:49, onStart:function(){
		placo_txt24.color = "#3498db";
		placo_txt241.alpha = 1;
	}})
	.to(group21, 2, {x:0, y:0, scaleX:1, scaleY:1, onComplete:function(){
		placo_txt24.color = "#95A5A6";
		placo_txt241.alpha = 0;
	}})
	.to(group21, 4, {x:-64*placo_txt2.getMeasuredWidth(), y:-399*placo_txt2.getMeasuredHeight(), scaleX:49, scaleY:49, onStart:function(){
		placo_txt25.color = "#3498db";
		placo_txt251.alpha = 1;
	}})
	.to(group21, 2, {x:0, y:0, scaleX:1, scaleY:1, onComplete:function(){
		placo_txt25.color = "#95A5A6";
		placo_txt251.alpha = 0;
	}})
	.to(group21, 4, {x:-69.7*placo_txt2.getMeasuredWidth(), y:-230*placo_txt2.getMeasuredHeight(), scaleX:49, scaleY:49, onStart:function(){
		placo_txt26.color = "#3498db";
		placo_txt261.alpha = 1;
	}})
	.to(group21, 2, {x:0, y:0, scaleX:1, scaleY:1, onComplete:function(){
		placo_txt26.color = "#95A5A6";
		placo_txt261.alpha = 0;
	}})
	.to(group21, 4, {x:-65*placo_txt2.getMeasuredWidth(), y:-77*placo_txt2.getMeasuredHeight(), scaleX:49, scaleY:49, onStart:function(){
		placo_txt27.color = "#3498db";
		placo_txt271.alpha = 1;
	}})
	.to(group21, 2, {x:0, y:0, scaleX:1, scaleY:1, onComplete:function(){
		placo_txt27.color = "#95A5A6";
		placo_txt271.alpha = 0;
	}})
	.to(group21, 4, {x:-56*placo_txt2.getMeasuredWidth(), y:-142*placo_txt2.getMeasuredHeight(), scaleX:49, scaleY:49, onStart:function(){
		placo_txt28.color = "#3498db";
		placo_txt281.alpha = 1;
	}})
	.to(group21, 2, {x:0, y:0, scaleX:1, scaleY:1, onComplete:function(){
		placo_txt28.color = "#95A5A6";
		placo_txt281.alpha = 0;
	}})
	.eventCallback("onComplete", function(){
		setTimeout(function(){
			stage.removeAllChildren();
			init.loadAnim();
		},2500)
	});
},
function(){
	var w = $('#animations').width(),
	h = $('#animations').height(),
	canvasTl = new TimelineMax(),
	stage = new createjs.Stage("animations");
	//alert(w);
	//alert(h);
// THE VEIL
	veil = new createjs.Shape();
	veil.graphics.beginFill("#fff").drawRect(0, 0, w, h);
	veil.alpha = 0;

// -------- container 1 ------------------------------------------
	var group1 = new createjs.Container();
	group1.alpha = 0;

	// Roue cab
	var ball0 = new createjs.Shape();
	ball0.graphics.setStrokeStyle(5, 'round', 'round');
	ball0.graphics.beginStroke(('#000000'));
	ball0.graphics.beginFill("#ccc").drawCircle(0,0,w*0.016);
	ball0.graphics.endStroke();
	ball0.graphics.endFill();
	ball0.graphics.setStrokeStyle(1, 'round', 'round');
	ball0.graphics.beginStroke(('#000000'));
	ball0.graphics.moveTo(w*0.016,0);
	ball0.graphics.lineTo(-w*0.016,0);

	ball0.graphics.moveTo(0,w*0.016);
	ball0.graphics.lineTo(0,-w*0.016);

	ball0.graphics.endStroke();
	
	ball0.x = w*0.23;
	ball0.y = h*0.4973;

	// Dessin de Roue truck 1	
	var ball1 = new createjs.Shape();
	ball1.graphics.setStrokeStyle(5, 'round', 'round');
	ball1.graphics.beginStroke(('#000000'));
	ball1.graphics.beginFill("#ccc").drawCircle(0,0,w*0.016);
	ball1.graphics.endStroke();
	ball1.graphics.endFill();
	ball1.graphics.setStrokeStyle(1, 'round', 'round');
	ball1.graphics.beginStroke(('#000000'));
	ball1.graphics.moveTo(w*0.016,0);
	ball1.graphics.lineTo(-w*0.016,0);

	ball1.graphics.moveTo(0,w*0.016);
	ball1.graphics.lineTo(0,-w*0.016);

	ball1.graphics.endStroke();
	
	ball1.x = w*0.0189;
	ball1.y = h*0.4973;
	
	// Dessin de Roue truck 2	
	var ball2 = new createjs.Shape();
	ball2.graphics.setStrokeStyle(5, 'round', 'round');
	ball2.graphics.beginStroke(('#000000'));
	ball2.graphics.beginFill("#ccc").drawCircle(0,0,w*0.016);
	ball2.graphics.endStroke();
	ball2.graphics.endFill();
	
	ball2.graphics.setStrokeStyle(1, 'round', 'round');
	ball2.graphics.beginStroke(('#000000'));
	ball2.graphics.moveTo(w*0.016,0);
	ball2.graphics.lineTo(-w*0.016,0);

	ball2.graphics.moveTo(0,w*0.016);
	ball2.graphics.lineTo(0,-w*0.016);

	ball2.graphics.endStroke();
	
	ball2.x = w*0.1;  
	ball2.y = h*0.4973;
	
	// Dessin cabine
	var cab = new createjs.Shape();
	cabA.graphics.setStrokeStyle(3, 'round', 'round');
	cabA.graphics.beginStroke('#00');
	cabA.graphics.beginFill('#fff').drawRoundRect(0,0,w*0.064,h*0.089,2);
	cab.graphics.endStroke();
	cabA.graphics.endFill();
	
	cabA.x =  w*0.202;
	cabA.y = h*0.38;
	
	// Dessin remorque
	var truckA = new createjs.Shape();
	truckA.graphics.setStrokeStyle(3, 'round', 'round');
	truckA.graphics.beginStroke('#00');
	truckA.graphics.beginFill('#fff').drawRoundRect(0,0,w*0.196,h*0.111,2);
	truckA.graphics.endStroke();
	truckA.graphics.endFill();
	
	truckA.x = w*0.002;
	truckA.y = h*0.357;
	// Ajout au conteneur
	
	group1.addChild(ball0,ball1,ball2,cabA,truckA);

// -------- container 2 ------------------------------------------
	var group2 = new createjs.Container();
	group2.alpha = 0;

	var tapisB = new createjs.Shape();
	tapisB.graphics.beginFill("#000").drawRoundRect(0,h*0.50,w, h*0.01, 2);
	tapisB.graphics.endFill();
	
	// Dessin gypes
	var gypesB = new createjs.Bitmap("img/gypes.png");
	gypesB.x = w*(0*(0.04));
	gypesB.y = h*0.451;
	gypesB.scaleX = w*0.00022;
	gypesB.scaleY = w*0.00022;
	
	var gypes2B  = new createjs.Bitmap("img/gypes.png");
	gypes2B.x = w*(1*(0.04));
	gypes2B.y = h*0.451;
	gypes2B.scaleX = w*0.00022;
	gypes2B.scaleY = w*0.00022;
	
	var gypes3B  = new createjs.Bitmap("img/gypes.png");
	gypes3B.x = w*(2*(0.04));
	gypes3B.y = h*0.451;
	gypes3B.scaleX = w*0.00022;
	gypes3B.scaleY = w*0.00022;
	
	var gypes4B  = new createjs.Bitmap("img/gypes.png");
	gypes4B.x = w*(3*(0.04));
	gypes4BBB.y = h*0.451;
	gypes4BB.scaleX = w*0.00022;
	gypes4B.scaleY = w*0.00022;
	
	var gypes5B  = new createjs.Bitmap("img/gypes.png");
	gypes5B.x = w*(4*(0.04));
	gypes5B.y = h*0.451;
	gypes5B.scaleX = w*0.00022;
	gypes5B.scaleY = w*0.00022;

	group2.addChild(tapisB, gypesB,gypes2B,gypes3B,gypes4B,gypes5B);

// -------- container 3 ------------------------------------------
	var group3 = new createjs.Container();
	group3.alpha = 0;
	
	var tapisC = new createjs.Shape();
	tapisC.graphics.setStrokeStyle(5, 'round', 'round');
	tapisC.graphics.beginStroke(('#000000'));
		tapisC.graphics.beginFill("#FF0000").drawRoundRect(0,h*0.9,w*0.333, h*0.03, 2);
		tapisC.graphics.endFill();
	tapisC.graphics.endStroke();
	
	tapisC.graphics.setStrokeStyle(10, 'round', 'round');
	tapisC.graphics.beginStroke(('#000000'));
		tapisC.graphics.moveTo(w*0.333,h*0.92);
		tapisC.graphics.lineTo(w*0.5,h*0.5);
	tapisC.graphics.endStroke();
	
	var fourC = new createjs.Shape();
	fourC.graphics.setStrokeStyle(5, 'round', 'round');
	fourC.graphics.beginStroke(('#000000'));
	fourC.graphics.beginFill("#727272").drawRoundRect(w*0.5, h*0.66,w*0.124, h*0.33, 2);
	fourC.graphics.endFill();
	fourC.graphics.endStroke();

	var pipeC = new createjs.Shape();
	pipeC.graphics.setStrokeStyle(5, 'round', 'round');
	pipeC.graphics.beginStroke(('#000000'));
	pipeC.graphics.drawRoundRect(w*0.624, h*0.7691, w*0.379, h*0.204, 2);
	pipeC.graphics.endFill();
	pipeC.graphics.endStroke();
	
	// Dessin gypes
	var gypesC = new createjs.Bitmap("img/gypes.png");
	gypesC.x = 0;
	gypesC.y = h*0.75;
	gypesC.scaleX = w*0.0004;
	gypesC.scaleY = h*0.001;
	
	var gypes2C  = new createjs.Bitmap("img/gypes.png");
	gypes2C.x = w*0.050;
	gypes2C.y = h*0.75;
	gypes2C.scaleX = w*0.0004;
	gypes2C.scaleY = h*0.001;
	
	var gypes3C  = new createjs.Bitmap("img/gypes.png");
	gypes3C.x = 2*w*0.050;
	gypes3C.y = h*0.75;
	gypes3C.scaleX = w*0.0004;
	gypes3C.scaleY = h*0.001;
	
	var gypes4C  = new createjs.Bitmap("img/gypes.png");
	gypes4C.x = 3*w*0.050;
	gypes4C.y = h*0.75;
	gypes4C.scaleX = w*0.0004;
	gypes4C.scaleY = h*0.001;
	
	var gypes5C  = new createjs.Bitmap("img/gypes.png");
	gypes5C.x = 4*w*0.050;
	gypes5C.y = h*0.75;
	gypes5C.scaleX = w*0.0004;
	gypes5C.scaleY = h*0.001;		
	
	var gypesLC = new createjs.Shape();
	gypesLC.graphics.beginFill("#727272").drawRoundRect(w*0.503, h*0.776, w*0.1, h*0.19, 2);
	gypesLC.graphics.endFill();
	
	group3.addChild(tapisC, gypesC,gypes2C,gypes3C,gypes4C ,gypes5C, fourC, pipeC, gypesLC);

// -------- container 4 ------------------------------------------

// -------- container 5 ------------------------------------------

// -------- container 6 ------------------------------------------

// -------- container 7 ------------------------------------------

// -------- container 8 ------------------------------------------
	var group8 = new createjs.Container();
	group8.alpha = 0;

	var bandeB = new createjs.Shape();
	bandeB.graphics.beginFill("#ccc").drawRoundRect(w*0.002,h*0.460,w*0.1,h*0.01,2);
	bandeB.graphics.endFill();

	var bandeH = new createjs.Shape();
	bandeH.graphics.beginFill("#ccc000").drawRoundRect(w*0.002,h*0.36,w*0.1,h*0.01,2);
	bandeH.graphics.endFill();
	
	var gypesL = new createjs.Shape();
	gypesL.graphics.beginFill("#727272").drawRoundRect(w*0.002,h*0.37,w*0.1,h*0.091,2);
	gypesL.graphics.endFill();
	
	// Dessin de Roue cab
	var roue1 = new createjs.Shape();
	roue1.graphics.setStrokeStyle(5, 'round', 'round');
	roue1.graphics.beginStroke(('#000000'));
	roue1.graphics.beginFill("#ccc").drawCircle(0,0,w*0.016);
	roue1.graphics.endStroke();
	roue1.graphics.endFill();
	roue1.graphics.setStrokeStyle(1, 'round', 'round');
	roue1.graphics.beginStroke(('#000000'));
	roue1.graphics.moveTo(w*0.016,0);
	roue1.graphics.lineTo(-w*0.016,0);

	roue1.graphics.moveTo(0,w*0.016);
	roue1.graphics.lineTo(0,-w*0.016);

	roue1.graphics.endStroke();
	
	roue1.x = w*0.23+(3*(w*0.23));
	roue1.y = h*0.4973;
	
	// Dessin de Roue truck 1	
	var roue2 = new createjs.Shape();
	roue2.graphics.setStrokeStyle(5, 'round', 'round');
	roue2.graphics.beginStroke(('#000000'));
	roue2.graphics.beginFill("#ccc").drawCircle(0,0,w*0.016);
	roue2.graphics.endStroke();
	roue2.graphics.endFill();
	roue2.graphics.setStrokeStyle(1, 'round', 'round');
	roue2.graphics.beginStroke(('#000000'));
	roue2.graphics.moveTo(w*0.016,0);
	roue2.graphics.lineTo(-w*0.016,0);

	roue2.graphics.moveTo(0,w*0.016);
	roue2.graphics.lineTo(0,-w*0.016);

	roue2.graphics.endStroke();
	
	roue2.x = w*0.0189+(3*(w*0.23));
	roue2.y = h*0.4973;
	// Dessin de Roue truck 2
	var roue3 = new createjs.Shape();
	roue3.graphics.setStrokeStyle(5, 'round', 'round');
	roue3.graphics.beginStroke(('#000000'));
	roue3.graphics.beginFill("#ccc").drawCircle(0,0,w*0.016);
	roue3.graphics.endStroke();
	roue3.graphics.endFill();
	
	roue3.graphics.setStrokeStyle(1, 'round', 'round');
	roue3.graphics.beginStroke(('#000000'));
	roue3.graphics.moveTo(w*0.016,0);
	roue3.graphics.lineTo(-w*0.016,0);

	roue3.graphics.moveTo(0,w*0.016);
	roue3.graphics.lineTo(0,-w*0.016);

	roue3.graphics.endStroke();
	
	roue3.x = w*0.1+(3*(w*0.23));  
	roue3.y = h*0.4973;
	
	// Dessin cabine
	var cab2 = new createjs.Shape();
	cab2.graphics.setStrokeStyle(3, 'round', 'round');
	cab2.graphics.beginStroke('#00');
	cab2.graphics.beginFill('#fff').drawRoundRect(0,0,w*0.064,h*0.089,2);
	cab2.graphics.endStroke();
	cab2.graphics.endFill();
	
	cab2.x =  w*0.202+(3*(w*0.23));
	cab2.y = h*0.38;
	
	// Dessin remorque
	var truck2 = new createjs.Shape();
	truck2.graphics.setStrokeStyle(3, 'round', 'round');
	truck2.graphics.beginStroke('#00');
	truck2.graphics.beginFill('#fff').drawRoundRect(0,0,w*0.196,h*0.111,2);
	truck2.graphics.endStroke();
	truck2.graphics.endFill();
	
	truck2.x = w*0.002+(3*(w*0.23));
	truck2.y = h*0.357;

	group8.addChild(bandeB, bandeH, gypesL,roue1,roue2,roue3,cab2,truck2);

// ---------------------------------------------------------------
// ---------------------------------------------------------------
    stage.addChild(veil, group1, group2, group8);
	TweenMax.ticker.addEventListener("tick", stage.update, stage);
	stage.update();
//--------------------------------------------------------------------
//--------------------------------------------------------------------


//-------Animation 1--------------------------------------------------
	canvasTl.to(veil, 0.1, {alpha:0.98})
	.to(group1, 1, {alpha:1, delay:1})
	.to(ball0, 2, {rotation:360, x:w*0.23+(3*(w*0.23))}, "label1")
	.to(ball1, 2, {rotation:360, x:w*0.0189+(3*(w*0.23))}, "label1")
	.to(ball2, 2, {rotation:360, x:w*0.1+(3*(w*0.23))}, "label1")
	.to(cabA, 2, {x:w*0.202+(3*(w*0.23))}, "label1")
	.to(truckA, 2, {x:w*0.002+(3*(w*0.23))}, "label1")
	.to(group1, 0.5, {alpha:0})
//-------Animation 2--------------------------------------------------
	.to(group2, 1, {alpha:1})
	.to(gypesB, 3.1, {x:w*(0*(0.04))+(3.4*(w*0.23))}, "label2")
	.to(gypes2B, 3.1, {x:w*(1*(0.04))+(3.4*(w*0.23))}, "label2")
	.to(gypes3B, 3.1, {x:w*(2*(0.04))+(3.4*(w*0.23))}, "label2")
	.to(gypes4B, 3.1, {x:w*(3*(0.04))+(3.4*(w*0.23))}, "label2")
	.to(gypes5B, 3.1, {x:w*(4*(0.04))+(3.4*(w*0.23))}, "label2")
	.to(group2, 0.5, {alpha:0})
//-------Animation 3--------------------------------------------------
	.to(group3, 1, {alpha:1})
		.to(group2, 1, {alpha:1})
	.to(gypesB, 1.4, {x:w*0.3}, "label2")
	.to(gypesB, 1.14, {rotation:-39.9,x:w*0.317}, "label2")
	.to(gypesB, 1.4, {x:w*0.482,y:h*0.331}, "label2")
	.to(gypesB, 1.4, {rotation:0.9,x:w*0.521}, "label2")
	.to(gypesB, 1.4, {y:h*0.8}, "label2")
/*******to finish**************/
/*******to finish**************/
/*******to finish**************/
/*******to finish**************/
	.to(gypes2C, 3.1, {x:w*(1*(0.04))+(3.4*(w*0.23))}, "label2")
	.to(gypes3C, 3.1, {x:w*(2*(0.04))+(3.4*(w*0.23))}, "label2")
	.to(gypes4C, 3.1, {x:w*(3*(0.04))+(3.4*(w*0.23))}, "label2")
	.to(gypes5C, 3.1, {x:w*(4*(0.04))+(3.4*(w*0.23))}, "label2")
	.to(group2, 0.5, {alpha:0})
	
var tween = createjs.Tween.get(gypes, {loop:false})
.to({x:w*0.3}, 1400, createjs.Ease.none)
.to({rotation:-39.9,x:w*0.317}, 140, createjs.Ease.none)
.to({x:w*0.482,y:h*0.331}, 1400, createjs.Ease.none)
.to({rotation:0.9,x:w*0.521}, 140,createjs.Ease.none)
.to({y:h*0.8}, 1400, createjs.Ease.none);

var tween = createjs.Tween.get(gypes2, {loop:false})
.to({x:w*0.3}, 1140, createjs.Ease.none)
.to({rotation:-39.9,x:w*0.317}, 140,createjs.Ease.none)
.to({x:w*0.482,y:h*0.331}, 1140, createjs.Ease.none)
.to({rotation:0.9,x:w*0.521}, 140,createjs.Ease.none)
.to({y:h*0.8}, 1400, createjs.Ease.none);

var tween = createjs.Tween.get(gypes3, {loop:false})
.to({x:w*0.3}, 940, createjs.Ease.none)
.to({rotation:-39.9,x:w*0.317}, 140,createjs.Ease.none)
.to({x:w*0.482,y:h*0.331}, 940, createjs.Ease.none)
.to({rotation:0.9,x:w*0.521}, 140,createjs.Ease.none)
.to({y:h*0.8}, 1400, createjs.Ease.none);

var tween = createjs.Tween.get(gypes4, {loop:false})
.to({x:w*0.3}, 740, createjs.Ease.none)
.to({rotation:-39.9,x:w*0.317}, 140,createjs.Ease.none)
.to({x:w*0.482,y:h*0.331}, 740, createjs.Ease.none)
.to({rotation:0.9,x:w*0.521}, 140,createjs.Ease.none)
.to({y:h*0.8}, 1400, createjs.Ease.none);

var tween = createjs.Tween.get(gypes5, {loop:false})
.to({x:w*0.3}, 540, createjs.Ease.none)
.to({rotation:-39.9,x:w*0.317}, 140,createjs.Ease.none)
.to({x:w*0.482,y:h*0.331}, 540, createjs.Ease.none)
.to({rotation:0.9,x:w*0.521}, 140,createjs.Ease.none)
.to({y:h*0.8}, 1400, createjs.Ease.none);
	
//-------Animation 1--------------------------------------------------
//-------Animation 1--------------------------------------------------
//-------Animation 1--------------------------------------------------
//-------Animation 1--------------------------------------------------
//-------Animation 1--------------------------------------------------
//-------Animation 1--------------------------------------------------
//-------Animation 1--------------------------------------------------
	.to(group8, 1, {alpha:1})
	.to(roue1, 2, {x:w*0.23,rotation:-360},"label3")//to upgrade after !!!
	.to(roue2, 2, {x:0.0189,rotation:-360},"label3")
	.to(roue3, 2, {x:w*0.1,rotation:-360},"label3")
	.to(cab2, 2, {x:w*0.202},"label3")
	.to(truck2, 2, {x:w*0.002},"label3")	
	.to(bandeB, 3, {x:w*0.0189+(3*(w*0.23))},"label4")
	.to(bandeH, 3, {x:w*0.0189+(3*(w*0.23))},"label4")
	.to(gypesL, 3, {x:w*0.0189+(3*(w*0.23))},"label4")	
	.to(roue1, 3, {x:w*0.23+(3*(w*0.23)), rotation:360},"label4")
	.to(roue2, 3, {x:w*0.0189+(3*(w*0.23)), rotation:360},"label4")
	.to(roue3, 3, {x:w*0.1+(3*(w*0.23)), rotation:360},"label4")
	.to(cab2, 3, {x:w*0.202+(3*(w*0.23))},"label4")
	.to(truck2, 3, {x:w*0.002+(3*(w*0.23))},"label4")
	
	.eventCallback("onComplete", function(){
		setTimeout(function(){
			stage.removeAllChildren();
			init.loadAnim();
		},2500)
	});
}
];