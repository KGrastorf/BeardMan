var growBeard = function(){

     document.getElementById("tape").style.paddingTop = "15px";
  return function(time){
    var beardLength = 0;
    var count = 0;
    var callback = function(){
      beardLength += 5;
      count++;
      document.getElementById("beard").style.height = beardLength+"px";
      document.getElementById("tape").style.height = beardLength+"px";
      if(beardLength%50 == 0){
        document.getElementById("tape").append(beardLength/50+'\"');
        document.getElementById("tape").append(document.createElement("hr"));
      }
      if(count >= time){
        clearInterval(interval);
      }
    }
    var interval = setInterval(callback,500);

  }
};

var growing = growBeard();


var beardGrowth;
var setup = function(robg){
  document.getElementById('modal1').style.display = "none";
    document.getElementById('modal2').style.display = "block";
  return function(time){
    document.getElementById("lengthdisplay").textContent = (robg*time)+"mm";
    growing(time);
  };
};
