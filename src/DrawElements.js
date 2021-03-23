import React from 'react'
const PI = Math.PI;


function DrawElements(props) {
    var step = props.step
    var elements = props.elements
    //console.log(elements)
    if(props.elements.length){
        elements.map((element)=>{
            var x = element.x
            var y = element.y
            var r = element.size
            var color = element.color
            var name  = element.name
            var TxtSize = element.sizeTxt
            return drawElement(x+step,y,r,color,name,TxtSize)
        })
        
    } 
    return (
             <canvas id="canvas" height="800" width="1000"></canvas>
        )
        
    }


 
function drawElement(x,y,r,color,name,TxtSize){  
        const c = document.getElementById("canvas");
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, r, 0, 2 * PI);
        ctx.fill();
        ctx.font = `${TxtSize}px Comic Sans MS`;
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        var txt = name.split("-")
       // for(var i = 0; i<txt.length; i++){  // setup for text in element
            ctx.fillText(name,(x), y+(TxtSize/4));
       // }
    }


    

export default DrawElements
