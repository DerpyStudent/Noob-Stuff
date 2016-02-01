function below(){
  for(var i=0;i<8;i++){
    down();}
}
function northEast(){
  right();
  right();
  for(var i=0;i<8;i++){
    up();}
  right();
  right();
}
//done setting functions, time to call them

while (remainingDots()==1){
  below();
  northEast();
}

