(function () {
document.getElementById("btn").addEventListener("click", function(){
    var hexa= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    var hexaCode = "#";
    for (var i=0;i<6;i++){
    var code = Math.floor(Math.random() * hexa.length) ;
    hexaCode += hexa[code];
   
    }
    document.getElementById("hex-value").innerHTML = hexaCode;
    document.body.style.backgroundColor = hexaCode;
});
})();