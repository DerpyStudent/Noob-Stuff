right();
if (getColor()=="red") {
  for (var i=0;i<3;i++){
  up();
  }
  if (getColor()=="red"){
    left();
    up();
  }
  else {
    right();
    up();
  }
  
}
else {
  for (var i=0;i<3;i++){
    down();
  }
  if (getColor()=="red"){
    left();
    down();
  }
  else {
    right();
    down();
  }
}
