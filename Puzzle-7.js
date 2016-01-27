function redRight() {
  if (getColor()=="red"){
    for(var i=0;i<2;i++){
      right();
    }
  }
}
  function below() {
while (getColor()=="") {
  down();
}
  }
function above() {
  while (getColor()==""){
    up();
  }
}
//done setting functions, time to call them

while (remainingDots()==1){
  below();
  redRight();
  above();
  redRight();
}
