/*window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de r�cup�rer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de r�cup�rer le context du canvas");
            return;
        }


    //C'est ici que l'on placera tout le code servant � nos dessins.


	context.beginPath();//On d�marre un nouveau trac�
	context.moveTo(0, 300);//On se d�place au coin inf�rieur gauche
	context.lineTo(150, 0);
	context.lineTo(300, 300);
	context.lineTo(0, 300);
	context.stroke();//On trace seulement les lignes.
	context.closePath();



	context.beginPath(); //On d�marre un nouveau trac�.
	context.arc(100, 100, 50, 0, Math.PI*2); //On trace la courbe d�limitant notre forme
	context.stroke(); //On utilise la m�thode fill(); si l'on veut une forme pleine
	context.closePath();


var mon_image = new Image();
mon_image.src = "img/mon_image.png";
context.drawImage(mon_image, 0, 0);

//On n'oublie pas de r�cup�rer l'objet canvas et son context.

context.font = "18px Helvetica";//On passe � l'attribut "font" de l'objet context une simple cha�ne de caract�res compos� de la taille de la police, puis de son nom.
context.fillText("Hello World", 100,10);//strokeText(); fonctionne aussi, vous vous en doutez.
}*/

window.onload = function()
{
    //On n'oublie pas de r�cup�rer le canvas et son context.
	var canvas = document.getElementById('mon_canvas');
			if(!canvas)
			{
				alert("Impossible de r�cup�rer le canvas");
				return;
			}

		var context = canvas.getContext('2d');
			if(!context)
			{
				alert("Impossible de r�cup�rer le context du canvas");
				return;
			}
	
    canvas.width = 300;
    canvas.height = 300;

/*    var myInterval = setInterval(animate, 1000/60); //Notre boucle de rafra�chissement.

    //On d�fini quelques variables
    var tailleMini = 10;
    var tailleMax = canvas.width;//Tant que notre canvas reste carr�, l'agrandissement peut-�tre �gal � un des c�t�s.
    var tailleActuelle = tailleMini+1;//On initialise la taille actuelle au minimum de ce � quoi elle peut correspondre, puis on y additionne 1 afin de ne pas boucler ind�finiment sur les phases d'agrandissement, r�tr�cissement.
    var xPos = 0;
    var yPos = 0;
    var vitesse = 1;//La valeur 1 signifie que l'on augmentera la taille du carr�, tandis que -1 correspondra � une r�duction.

    function animate()
    {
	context.clearRect(0, 0, canvas.width, canvas.height);//Cette fonction permet de r�initialiser notre canvas. Plus rien n'y est affich�.
		
        //On commence par calculer la position � laquelle on doit placer le carr�, pour qu'il reste bien au centre du canvas.
        xPos = (canvas.width/2)-(tailleActuelle/2);
        yPos = xPos;//Notre canvas �tant un carr�, pas besoin de recalculer le milieu de l'ordonn�e : c'est le m�me que l'abscisse.
        
        //On a tout ce qu'il nous faut pour tracer notre carr� :
        context.fillRect(xPos, yPos, tailleActuelle, tailleActuelle);

        //On fait les tests pour savoir si l'on va devoir agrandir ou r�tr�cir notre carr�.
        if(tailleActuelle >= tailleMax || tailleActuelle <= tailleMini)
        {
            vitesse *= -1;
        }

        //On applique la vitesse calcul�e � la taille actuelle pour la modifier.
        tailleActuelle += vitesse;
    }*/
	
	context.beginPath(); //On d�marre un nouveau trac�.
	context.arc(150, 150, 50, 0, Math.PI*2); //On trace la courbe d�limitant notre forme
	context.fill(); //On utilise la m�thode fill(); si l'on veut une forme pleine
	context.closePath();
}