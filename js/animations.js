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
	alert(w);
	alert(h);
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
	ball0.graphics.beginFill("red").drawCircle(0,0,w*0.016);
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
	ball0.y = h*0.55;
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
	ball1.y = h*0.55;
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
	ball2.y = h*0.55;
	// Dessin cabine
	var cab = new createjs.Shape();
	cab.graphics.setStrokeStyle(3, 'round', 'round');
	cab.graphics.beginStroke('#00');
	cab.graphics.beginFill('#fff').drawRoundRect(0,0,w*0.064,h*0.089,2);
	cab.graphics.endStroke();
	cab.graphics.endFill();
	
	cab.x =  w*0.202;
	cab.y = h*0.38; 
	// Dessin remorque
	var truck = new createjs.Shape();
	truck.graphics.setStrokeStyle(3, 'round', 'round');
	truck.graphics.beginStroke('#00');
	truck.graphics.beginFill('#fff').drawRoundRect(0,0,w*0.196,h*0.111,2);
	truck.graphics.endStroke();
	truck.graphics.endFill();
	
	truck.x = w*0.002;
	truck.y = h*0.357;
	// Ajout au conteneur
	group1.addChild(ball0,ball1,ball2,cab,truck);

// -------- container 2 ------------------------------------------
	/*var group2 = new createjs.Container();
	group2.alpha = 0;

	var tapis = new createjs.Shape();
	tapis.graphics.beginFill("#000").drawRoundRect(0,h-50,w, 10, 2);
	tapis.graphics.endFill();
	// Dessin gypes
	var gypes = new createjs.Bitmap("img/gypes.png");
	gypes.x = 0;
	gypes.y = 209;
	gypes.scaleX = 0.3;
	gypes.scaleY = 0.3;
	
	var gypes2  = new createjs.Bitmap("img/gypes.png");
	gypes2.x = 50;
	gypes2.y = 209;
	gypes2.scaleX = 0.3;
	gypes2.scaleY = 0.3;
	
	var gypes3  = new createjs.Bitmap("img/gypes.png");
	gypes3.x = 100;
	gypes3.y = 209;
	gypes3.scaleX = 0.3;
	gypes3.scaleY = 0.3;
	
	var gypes4  = new createjs.Bitmap("img/gypes.png");
	gypes4.x = 150;
	gypes4.y = 209;
	gypes4.scaleX = 0.3;
	gypes4.scaleY = 0.3;
	
	var gypes5  = new createjs.Bitmap("img/gypes.png");
	gypes5.x = 200;
	gypes5.y = 209;
	gypes5.scaleX = 0.3;
	gypes5.scaleY = 0.3;

	group2.addChild(tapis, gypes,gypes2,gypes3,gypes4 ,gypes5);*/

// -------- container 8 ------------------------------------------
	/*var group8 = new createjs.Container();
	group8.alpha = 0;

	var bandeB = new createjs.Shape();
	bandeB.graphics.beginFill("#ccc").drawRoundRect(1,h*0.68,w/8, h*0.03, 2);
	bandeB.graphics.endFill();

	var bandeH = new createjs.Shape();
	bandeH.graphics.beginFill("#ccc000").drawRoundRect(1,h*0.48,w/8, h*0.03, 2);
	bandeH.graphics.endFill();
	
	var gypesL = new createjs.Shape();
	gypesL.graphics.beginFill("#727272").drawRoundRect(1,h*0.51,w/8, h/5.9, 2);
	gypesL.graphics.endFill();

	var ball0 = new createjs.Shape();
	ball0.graphics.setStrokeStyle(5, 'round', 'round');
	ball0.graphics.beginStroke(('#000000'));
	ball0.graphics.beginFill("#ccc").drawCircle(0,0,20);
	ball0.graphics.endStroke();
	ball0.graphics.endFill();
	ball0.graphics.setStrokeStyle(1, 'round', 'round');
	ball0.graphics.beginStroke(('#000000'));
	ball0.graphics.moveTo(20,0);
	ball0.graphics.lineTo(-20,0);
	ball0.graphics.moveTo(0,20);
	ball0.graphics.lineTo(0,-20);
	ball0.graphics.endStroke();			
	ball0.x = w+300;
	ball0.y = 250;
	// Dessin de Roue truck 1	
	var ball1 = new createjs.Shape();
	ball1.graphics.setStrokeStyle(5, 'round', 'round');
	ball1.graphics.beginStroke(('#000000'));
	ball1.graphics.beginFill("#ccc").drawCircle(0,0,20);
	ball1.graphics.endStroke();
	ball1.graphics.endFill();
	ball1.graphics.setStrokeStyle(1, 'round', 'round');
	ball1.graphics.beginStroke(('#000000'));
	ball1.graphics.moveTo(20,0);
	ball1.graphics.lineTo(-20,0);
	ball1.graphics.moveTo(0,20);
	ball1.graphics.lineTo(0,-20);
	ball1.graphics.endStroke();			
	ball1.x = w+25;
	ball1.y = 250;
	// Dessin de Roue truck 2
	var ball2 = new createjs.Shape();
	ball2.graphics.setStrokeStyle(5, 'round', 'round');
	ball2.graphics.beginStroke(('#000000'));
	ball2.graphics.beginFill("#ccc").drawCircle(0,0,20);
	ball2.graphics.endStroke();
	ball2.graphics.endFill();			
	ball2.graphics.setStrokeStyle(1, 'round', 'round');
	ball2.graphics.beginStroke(('#000000'));
	ball2.graphics.moveTo(20,0);
	ball2.graphics.lineTo(-20,0);
	ball2.graphics.moveTo(0,20);
	ball2.graphics.lineTo(0,-20);
	ball2.graphics.endStroke();			
	ball2.x = w+150;
	ball2.y = 250;
	// Dessin cabine
	var cab = new createjs.Shape();
	cab.graphics.setStrokeStyle(3, 'round', 'round');
	cab.graphics.beginStroke('#00');
	cab.graphics.beginFill('#fff').drawRoundRect(0,0,w*0.064,w*0.064,2);
	cab.graphics.endStroke();
	cab.graphics.endFill();			
	cab.x = w+260;
	cab.y = 145;
	// Dessin remorque
	var truck = new createjs.Shape();
	truck.graphics.setStrokeStyle(3, 'round', 'round');
	truck.graphics.beginStroke('#00');
	truck.graphics.beginFill('#fff').drawRoundRect(0,0,250,100,2);
	truck.graphics.endStroke();
	truck.graphics.endFill();			
	truck.x = w+0;
	truck.y = 125;

	group8.addChild(bandeB, bandeH, gypesL,ball0,ball1,ball2,cab,truck);*/

// ---------------------------------------------------------------
// ---------------------------------------------------------------
    stage.addChild(veil, group1/*, group2,*/ /*group8*/);
	TweenMax.ticker.addEventListener("tick", stage.update, stage);
	stage.update();
//--------------------------------------------------------------------
//--------------------------------------------------------------------

	canvasTl.to(veil, 0.1, {alpha:0.98})
	.to(group1, 1, {alpha:1, delay:1})
	/*.to(ball0, 2, {rotation:360, x:w/1.7+w/3}, "label1")
	.to(ball1, 2, {rotation:360, x:w/1.7+w/6/6}, "label1")
	.to(ball2, 2, {rotation:360, x:w/1.7+w/6}, "label1")
	.to(cab, 2, {x:w/1.14}, "label1")
	.to(truck, 2, {x:w/1.7}, "label1")
	/*.to(group1, 0.5, {alpha:0})
	.to(group2, 1, {alpha:1})
	.to(gypes, 3.1, {x:w*0.75}, "label2")
	.to(gypes2, 3.1, {x:w*0.80}, "label2")
	.to(gypes3, 3.1, {x:w*0.85}, "label2")
	.to(gypes4, 3.1, {x:w*0.90}, "label2")
	.to(gypes5, 3.1, {x:w*0.95}, "label2")
	.to(group2, 0.5, {alpha:0})
	.to(group8, 1, {alpha:1})
	.to(ball0, 2, {x:300,rotation:-360},"label3")
	.to(ball1, 2, {x:300,rotation:-360},"label3")
	.to(ball2, 2, {x:300,rotation:-360},"label3")
	.to(cab, 2, {x:w*0.29},"label3")
	.to(truck, 2, {x:w*0},"label3")
	.to(bandeB, 3, {x:w/1.7},"label4")
	.to(bandeH, 3, {x:w/1.7},"label4")
	.to(gypesL, 3, {x:w/1.7},"label4")
	.to(ball0, 3, {x:w/1.7+w/3, rotation:360},"label4")
	.to(ball1, 3, {x:w/1.7+w/3, rotation:360},"label4")
	.to(ball2, 3, {x:w/1.7+w/3, rotation:360},"label4")
	.to(cab, 3, {x:w/1.14},"label4")
	.to(truck, 3, {x:w/1.7},"label4")*/
	.eventCallback("onComplete", function(){
		setTimeout(function(){
			stage.removeAllChildren();
			init.loadAnim();
		},2500)
	});
}
];