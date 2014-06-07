/* Point d'entrée de l'application */
function init(){
    
    /*
     *¨Partie de traitement des fichiers sample de code JS.
     * Les fichiers sont ajoutés un à un, pour enfin lancer
     * un eval sur la totalité.
     * 
     */
    function execCanvasCode(){
        var _mainCanvasScript = "";
    
        function scriptMerging(sampleFileName,callback) {
            for(var i = 0; i < sampleFileName.length ; i++) {
                var request = new XMLHttpRequest();
                request.open("GET", sampleFileName[i], false);
                request.send(null);
                if(request.status !== 200) throw new Error(request.statusText);
    
                callback(request.responseText);
            }
        }

        function addScript(newScript) {
            _mainCanvasScript += newScript;
        }

        scriptMerging(["sample.js","sample1.js",'sample2.js'],addScript);
        
        var scriptElement = document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.textContent = _mainCanvasScript;
        document.getElementsByTagName("head")[0].appendChild(scriptElement);
    }    
    execCanvasCode();
}

/* 
* Quand toutes les données sont chargées ( DOM, Images, Sons, Vidéos etc ... )
* On démarre l'application par la fonction init
*/
window.onload = init;