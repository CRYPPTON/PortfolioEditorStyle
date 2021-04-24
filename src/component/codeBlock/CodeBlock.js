import React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import './styleCodeBlock/codeBlock.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-darker.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'


function setEditorFont(fontSize,e){
    var fontSize  = +fontSize.match(/\d+/)[0];
    if(e.keyCode === 107 ){
        fontSize++;
        document.querySelector('.code-block').style.fontSize = `${fontSize}px`
    }
    if(e.keyCode === 109 ){
        fontSize--;
        document.querySelector('.code-block').style.fontSize = `${fontSize}px`
    }
}


document.body.onkeydown = function(e){
    var element = document.querySelector('.code-block')   
    var fontSize = getComputedStyle(element)['font-size']
    setEditorFont(fontSize,e)
}


function CodeBlock() {
    return (
        <div className="code-block">
            <CodeMirror
                value=' // ABOUT ME :
    //  

                    const firstName   =   "NIKOLA",
                       /**/  secondName  =   "NIKOLIĆ";
                    var   age         =   "25",
                        /**/  education   =   "Faculty Of Engineering",
                        /**/  place       =   "Kragujevac",
                        /**/  modul       =   "Informatic in Engineering",
        	            /**/  skils       =   [ "HTML", "JavaScript", "CSS", "reactJS", "jQuery", "BootStrap"],
                         
                 ' 

                options={{
                mode: 'xml',
                theme: 'material-darker',
                lineNumbers: true,
                mode: 'javascript',
                lineWrapping: true,
                    }}
                
                onChange={(editor, data, value) => {

                }}
                
            />
        </div>
    )
}




export default CodeBlock
