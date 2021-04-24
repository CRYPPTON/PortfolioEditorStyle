import React from 'react'
import './styleTerminal/terminal.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/ayu-dark.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/powershell/powershell'
import 'codemirror/mode/css/css'

function Terminal() {
    return (
        <div className="terminal">
           <CodeMirror
                value='C:\Users\nikola.nikkolic@gmail.com\'

                options={{
                mode: 'xml',
                theme: 'ayu-dark',
                lineNumbers: true,
                mode: 'powershell',
                lineWrapping: true,
                lineNumbers: false,
                    }}
                
                onChange={(editor, data, value) => {

                }}
                
            />
        </div>
    )
}

export default Terminal
