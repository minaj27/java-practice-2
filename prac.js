function handleDisplay(){
    var H = document.getElementById("h").value;
    var W = document.getElementById("w").value;
    var Border=document.getElementById("border").value;
    document.getElementById("show").style.height=H+"px" 
    document.getElementById("show").style.width=W+"px" 
    document.getElementById("show").style.borderRadius=Border+"%";
    
    var Change=document.getElementById("show2").value;
    document.getElementById("show").style.backgroundColor=Change;
    handleClear(); 
}
function handleClear(){
    document.getElementById("h").value="";
    document.getElementById("w").value="";
    document.getElementById("border").value="";
}