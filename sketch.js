var c1=0;
var c2=100;
var c3=200;
  var w;
  var h;
function setup() { 
  textSize(22); 
  h=windowHeight;
  w=windowWidth;
  inputArea = createElement("textarea"); 
  inputArea.position(100,55); 
    
  saveBtn = createButton("save as txt"); 
  saveBtn.position(50, 5); 
  saveBtn.mousePressed(saveastxt); 
    
  saveBtn1 = createButton("save as doc"); 
  saveBtn1.position(50+ 80, 5); 
  saveBtn1.mousePressed(saveasdoc); 
    
  saveBtn2 = createButton("save as parascript"); 
  saveBtn2.position(50+80+85, 5); 
  saveBtn2.mousePressed(saveasparascript); 
    
  saveBtn3 = createButton("save as pdf"); 
  saveBtn3.position(50+90+100+100, 5); 
  saveBtn3.mousePressed(saveaspdf); 
    
  saveBtn4 = createButton("save custom"); 
  saveBtn4.position(50+90+100+100, 5); 
  saveBtn4.mousePressed(saveascustom); 
} 
function draw(){
      createCanvas(w,h); 
      inputArea.size(w/1.2,h/1.2); 
    backg();
  fill("red");
   rect(50,5,width/1.2+100,height/1.2+100);  
    fill("green");
  rect(75,30,width/1.2+50,height/1.2+50);
 w=windowWidth;
 h=windowHeight;
  }
  
function saveastxt() { 
//  save_as=prompt("write your custom name then put--> . and type your custom file extention");
  let writer = createWriter('text.txt');
  writer.write(inputArea.value());
  writer.close();
} 
function saveasdoc() { 
//  save_as=prompt("write your custom name then put--> . and type your custom file extention");
  let writer = createWriter('word doc.doc');
  writer.write(inputArea.value());
  writer.close();
} 
function saveasparascript() { 
//  save_as=prompt("write your custom name then put--> . and type your custom file extention");
  let writer = createWriter('custom.parascript');
  writer.write(inputArea.value());
  writer.close();
} 
function saveascustom() { 
save_as=prompt("write your custom name then put--> . and type your custom file extention"); 
  let writer = createWriter(save_as);
  writer.write(inputArea.value());
  writer.close();
} 
function saveaspdf() { 
//  save_as=prompt("write your custom name then put--> . and type your custom file extention");
  stringList = inputArea.value().split("\n"); 
  let writer = createWriter('custom.pdf');
  writer.write([stringList]);
  writer.close();
} 
function backg(){
  background(c1,c2,c3);
  c1+=3;
  c2+=3;
  c3+=3;
  if(c1>250){
  c1=0;
  }
  if(c2>250){
  c2=100;
  }
  if(c3>250){
  c3=200;
  }
}
