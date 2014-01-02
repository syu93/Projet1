/*window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }


    //C'est ici que l'on placera tout le code servant à nos dessins.


	context.beginPath();//On démarre un nouveau tracé
	context.moveTo(0, 300);//On se déplace au coin inférieur gauche
	context.lineTo(150, 0);
	context.lineTo(300, 300);
	context.lineTo(0, 300);
	context.stroke();//On trace seulement les lignes.
	context.closePath();



	context.beginPath(); //On démarre un nouveau tracé.
	context.arc(100, 100, 50, 0, Math.PI*2); //On trace la courbe délimitant notre forme
	context.stroke(); //On utilise la méthode fill(); si l'on veut une forme pleine
	context.closePath();


var mon_image = new Image();
mon_image.src = "img/mon_image.png";
context.drawImage(mon_image, 0, 0);

//On n'oublie pas de récupérer l'objet canvas et son context.

context.font = "18px Helvetica";//On passe à l'attribut "font" de l'objet context une simple chaîne de caractères composé de la taille de la police, puis de son nom.
context.fillText("Hello World", 100,10);//strokeText(); fonctionne aussi, vous vous en doutez.
}*/

window.onload = function()
{
    //On n'oublie pas de récupérer le canvas et son context.
	var canvas = document.getElementById('mon_canvas');
			if(!canvas)
			{
				alert("Impossible de récupérer le canvas");
				return;
			}

		var context = canvas.getContext('2d');
			if(!context)
			{
				alert("Impossible de récupérer le context du canvas");
				return;
			}
	
    canvas.width = 300;
    canvas.height = 300;

/*    var myInterval = setInterval(animate, 1000/60); //Notre boucle de rafraîchissement.

    //On défini quelques variables
    var tailleMini = 10;
    var tailleMax = canvas.width;//Tant que notre canvas reste carré, l'agrandissement peut-être égal à un des côtés.
    var tailleActuelle = tailleMini+1;//On initialise la taille actuelle au minimum de ce à quoi elle peut correspondre, puis on y additionne 1 afin de ne pas boucler indéfiniment sur les phases d'agrandissement, rétrécissement.
    var xPos = 0;
    var yPos = 0;
    var vitesse = 1;//La valeur 1 signifie que l'on augmentera la taille du carré, tandis que -1 correspondra à une réduction.

    function animate()
    {
	context.clearRect(0, 0, canvas.width, canvas.height);//Cette fonction permet de réinitialiser notre canvas. Plus rien n'y est affiché.
		
        //On commence par calculer la position à laquelle on doit placer le carré, pour qu'il reste bien au centre du canvas.
        xPos = (canvas.width/2)-(tailleActuelle/2);
        yPos = xPos;//Notre canvas étant un carré, pas besoin de recalculer le milieu de l'ordonnée : c'est le même que l'abscisse.
        
        //On a tout ce qu'il nous faut pour tracer notre carré :
        context.fillRect(xPos, yPos, tailleActuelle, tailleActuelle);

        //On fait les tests pour savoir si l'on va devoir agrandir ou rétrécir notre carré.
        if(tailleActuelle >= tailleMax || tailleActuelle <= tailleMini)
        {
            vitesse *= -1;
        }

        //On applique la vitesse calculée à la taille actuelle pour la modifier.
        tailleActuelle += vitesse;
    }*/
	
	context.beginPath(); //On démarre un nouveau tracé.
	context.arc(150, 150, 50, 0, Math.PI*2); //On trace la courbe délimitant notre forme
	context.fill(); //On utilise la méthode fill(); si l'on veut une forme pleine
	context.closePath();
}