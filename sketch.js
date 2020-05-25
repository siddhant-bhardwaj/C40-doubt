var drawing = [];
var point;
var currentPath=[];
var database;
var saveButton;
var isDrawing = false;

function setup(){
    var canvas=createCanvas(1200,400);
    canvas.mousePressed(startPath);
    var database = firebase.database();
   // canvas.parent('canvascontainer');
   // canvas.mouseReleased(endPath);
    saveButton = select('#saveButton');
    saveButton.mousePressed(saveDrawing);
    var ref = database.ref('drawings');
    ref.on('value',saveData,errData);
}


function startPath(){
  isDrawing=true;  
currentPath=[];
drawing.push(currentPath);
}

function endPath(){
   isDrawing=false; 
   
}


function draw(){
background("black");



if(isDrawing=true){
var point={
    x: mouseX,
    y:mouseY
    
}
console.log(point);

currentPath.push(point);


stroke(255);
strokeWeight(5);
noFill();

for(var i=0; i< drawing.length; i++){
var path=drawing[i];
beginShape();
for(var j=0; j< path.length; j++){
vertex(path[j].x,path[j].y)


}
endShape();
}



}

}

function saveDrawing(){
var ref = database.ref('drawings');
var data={
    
    drawing:drawing
}
var result=ref.push(data,dataSent);
console.log(result.key);

function dataSent(err,status){
console.log(status);

}


}

function saveData(data){
var drawings = data.val();
var keys = Object.keys(drawimgs);
for(var i =0; i< keys.length; i++){
    var key =keys[i]
}
}


function errData(err){
console.log(err);
}