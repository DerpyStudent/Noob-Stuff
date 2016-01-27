function rightRed(){
  right();
  right();
  if (getColor()=="red"){
    up();
  }
  else {
    down();
  }
}

for (var i=0;i<3;i++){
  rightRed();
}

right();
right();
right();
