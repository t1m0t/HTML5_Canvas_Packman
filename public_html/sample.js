

/*
* Création de l'élément canvas dans le DOM
*/
function getCanvas() {
   return document.getElementsByTagName("canvas")[0];
}

function createCanvas (fatherElement,name,width,height) {
   var canvas = document.createElement("canvas");
   var body = document.getElementsByTagName(fatherElement)[0];
   //var head = document.getElementsByTagName("head")[0];
   body.appendChild(canvas);

   getCanvas().id     = name;
   getCanvas().height = height;
   getCanvas().width  = width;
}

createCanvas("body","tomahawk","800","600");
