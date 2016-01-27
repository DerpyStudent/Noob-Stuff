function colorDown(){
  right();
var c=getColor();
down();

setColor(c);
right();
}

for(var i=0; i<4; i++){
  down();
}
colorDown();
right();
up();
colorDown();

right();
