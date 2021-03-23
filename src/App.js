import React from 'react'
import DrawElements from './DrawElements'


function GenId(){
    var d = new Date();
    var t = d.getTime();
    return t
}



function RandPos(){
    return Math.floor(Math.random() * 720) + 50;
}
function GenChemElemTXT(){
    var e = Math.floor(Math.random() * 10) + 0;
    var eList = ["F","H","O","Au","Co","Mn","N","Li","Na","Mg","Ca"]
    return eList[e]
}

 class App extends React.Component {
     constructor(props){
         super(props)
         this.state = {
              element : {
                  id :  GenId(),
                  name : "Fe",
                  x : 200,
                  y : 200,
                  color : "white",
                  txtColor : "black",
                  sizeTxt : 20,
                  size : 20,
                  step : 1,
                  dX : -1,
                  dY : 1        
              },
              elementList : []
              
         }
         this.addElement = this.addElement.bind(this)
         this.moveElement = this.moveElement.bind(this)
         this.clearCanvas = this.clearCanvas.bind(this)

     }

     addElement(e){
         e.preventDefault()
         var currentElementList = this.state.elementList;
         var element = this.state.element
         var newElementList = [...currentElementList, element]
         this.setState({
             elementList : newElementList,
             element : {
                  id :  GenId(),
                  name : GenChemElemTXT(),
                  x : RandPos(),
                  y : RandPos(),
                  color : "white",
                  txtColor : "black",
                  sizeTxt : 20,
                  size : 20,
                  step : 1,
                  dX : 1,
                  dY : 1       
              },
         })
         //console.log(currentElementList)
     }

     

     moveElement(){
         this.clearCanvas()
         var elements = this.state.elementList;
         for(var i = 0; i<elements.length-1; i++){
             for(var j = i+1; j<elements.length; j++){
                   var a = Math.abs(elements[i].x-elements[j].x)
                   var b = Math.abs(elements[i].y-elements[j].y)
                   var h = Math.sqrt(a**2+b**2)
                if(
                    h <= elements[i].size+elements[j].size &&
                    h <= elements[i].size+elements[j].size)
                    {    
                         var elmSize = 
                                        elements[i].size > elements[j].size? 
                                        elements[i].size + (elements[j].size)/2 :       
                                        elements[j].size + (elements[i].size)/2 
                                       

                         elements[i].size = elmSize
                         elements[i].sizeTxt = elmSize/4
                         elements[i].name += '-'+elements[j].name   
                         console.log(elements.indexOf(elements[j]))
                         elements = elements.filter((element)=>element!==elements[j])
                         console.log(elements)
                         console.log("Collision")
                         elements[i].color = "Red" 
                         break
                    }
            }
         }

         var newPos = elements.map((element)=>{
                if(element.x+element.size>1000){
                    element.dX = -1*element.step    
                }
                 if(element.x-element.size<0){
                    element.dX = element.step
                }
                if(element.y-element.size<0){
                    element.dY = element.step    
                }
                 if(element.y+element.size>800){
                    element.dY = -1*element.step
                }
                  return  element = {
                             id : element.id,
                             name : element.name,
                             x : element.x + element.dX,
                             y : element.y + element.dY,
                             color : element.color,
                             txtColor : element.txtColor,
                             sizeTxt : element.sizeTxt,
                             size : element.size,
                             step : 1,
                             dX : element.dX,
                             dY : element.dY,  
                            }
                        })                  
         this.setState({
                 elementList : newPos
             })   
     }

     clearCanvas(){
         const c = document.getElementById("canvas");
         const ctx = c.getContext("2d");
         ctx.clearRect(0, 0, c.width, c.height);
     }

        componentDidMount() {
                     this.interval = setInterval(this.moveElement, 30);
                }

        componentWillUnmount() {
                     this.interval = setInterval(this.interval);
                }

    render() {
        return (
            <div>
                <h1>
                    Collision of chemical elements
                </h1>
                <button onClick={this.addElement}>Generate element</button>
                <button >MOVE</button>
                <div>
                
                </div>
                <DrawElements 
                    elements = {this.state.elementList} 
                    step = {this.state.element.step} />
            </div>
        )
    }
}

export default App