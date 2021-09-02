
function submit(){
    document.getElementById("BDY").style.display = "block";
    var a = document.getElementById("B").value; 
    

}
function BD(){
    var a = document.getElementById("B").value; 
    alert("Happy Birthday To " + a ) 
    document.getElementById("Birth").style.display = "block";
    document.getElementById("BDY").style.display = "none";
    document.getElementById("hey").style.display = "none";
    document.getElementById("B").style.display = "none";
    document.body.style.backgroundImage = "url('hOye.gif')"
    var a = document.getElementById("song");
    a.play();
   
    
}