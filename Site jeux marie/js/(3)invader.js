const invader = document.getElementById('invader');





let gridSize = 8;
let pixelSize = 30;
let pixel = 'pixelwhite';
let previousPixelClassName = '';

let changeButton = document.getElementById('changeButton');
let gridSizeInput = document.getElementById('gridSizeInput');
let pixelSizeInput = document.getElementById('pixelSizeInput');
console.dir(pixelSizeInput);

changeButton.addEventListener('click', function(){
    gridSize = parseInt(gridSizeInput.value);
    pixelSize = parseInt(pixelSizeInput.value);
    invader.innerHTML = "";
    generateGrid(gridSize, pixelSize);
});

function generateGrid(gridSize, pixelSize){
for (let columnIndex = 0; columnIndex < gridSize; columnIndex++) {
    const column = document.createElement('div');
    column.classList.add('column');

    for (let lineIndex = 0; lineIndex < gridSize; lineIndex++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel')

      pixel.style.width = `${pixelSize}px`;
      pixel.style.height = `${pixelSize}px`;

      column.appendChild(pixel);

      let currentColor = 'white';
      pixel.classList.add('pixelwhite');
      previousPixelClassName = 'pixelwhite';

      pixel.addEventListener('click', function() {


        pixel.classList.remove(previousPixelClassName);

        if (currentColor === 'white') {
            pixel.classList.add('pixelgrey');
            currentColor = 'grey';
            previousPixelClassName = 'pixelgrey';
        } else if (currentColor === 'grey'){
            pixel.classList.add('pixelblack');
            currentColor = 'black';
            previousPixelClassName = 'pixelblack';
        } else {
            pixel.classList.add('pixelwhite');
            currentColor = 'white';
            previousPixelClassName = 'pixelwhite';
        }

      });

    }

    // function(help){
    //     demander à laurent
    // }

  const invaderContainer = document.querySelector('#invader');
  invaderContainer.appendChild(column);

}
}

generateGrid(gridSize, pixelSize);

/*
-----------------------------
let span = document.querySelector("span");
let classes = span.classList;

span.addEventListener("click", function () {
  let result = classes.toggle("c");

  if (result) {
    span.textContent = `'c' ajouté ; classList vaut désormais "${classes}".`;
  } else {
    span.textContent = `'c' retiré ; classList vaut désormais "${classes}".`;
  }
}); */

/*
DONE :
1. div html
2. style.css du html de base
3. Récupérer l'ID de  invader et faire un max de grid size

TO DO :
4. créer une boucle qui injecte des lignes
5. créer une boucle qui injecte dans chaque ligne 8 éléments
6. ajouter la classe ligne à la ligne
7. 

*/ 





// * Pour cela il faudra exploiter les boucles et ajouter des élements au DOM
// * On ajoute ensuite les styles qu'on souhaite


// * On va d'abord créer des élements en Javascript pour créer une grille de 8 cases x 8 cases avec taille des pixels de 25px

// * La première boucle génère 8 lignes

// * On créé une div container de pixels
// * ajoute la classe line à la ligne 
// * pour chaque ligne, on créé 8 pixels
// * Chaque pixel doit être cliquable
// * on ajoute une classe
// * On attribue une largeur et une hauteur
// TODO ajouter un event listener ici (classList.toggle)
// * On ajoute un pixel dans la ligne
// * ajouter une ligne sur le DOM
// * 2. gérer les styles, etc...
// * 3. lorsqu'on est satisfait, on essaie alors d'obtenir cette même structure mais uniquement à l'aide du code JS, en insérant les éléments dans le DOM.