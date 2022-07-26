var mouseEvent="empty" ;
var ultima_posicion_x, ultima_posicion_y ;
canvas=document.getElementById("myCanvas") ;
ctx=canvas.getContext("2d") ; 
color="red" ;
Width_of_line=2 ;
canvas.addEventListener("mousedown",my_mousedown) ; 
function my_mousedown(e) {
    color=document.getElementById("color").value ;
    Width_of_line=document.getElementById("width_of_line").value ;
    mouseEvent="mouseDown" ;
}
canvas.addEventListener("mousemove",my_mousemove) ; 
function my_mousemove(e) {
current_position_of_mouse_x=e.clientX-cavas.offsetLeft ;
current_position_of_mouse_y=e.clientY-cavas.offsetTop ; 
if(mouseEvent=="mousedown") {
    ctx.beginPath() ;
    ctx.strokeStyle=color ; 
    ctx.lineWidth=Width_of_line ;
    console.log("Cordenadas X y Y") ;
    console.log("X="+ultima_posicion_x+"Y="+ultima_posicion_y) ;
    ctx.moveTo(ultima_posicion_x,ultima_posicion_y) ;
    console.log("posicion_actualXY") ;
    console.log("X="+current_position_of_mouse_x+"y="+current_position_of_mouse_y) ;




    
}
}