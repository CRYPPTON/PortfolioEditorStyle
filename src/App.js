import React from 'react'
import Header from './component/Header/Header.js';
import SideBar from './component/SideBar/SideBar.js';
import CodeBlock from './component/codeBlock/CodeBlock.js'
import Terminal from './component/terminal/Terminal.js'
function App() {
    return (
        <div>
             <Header />
             <SideBar />
             <CodeBlock />
             <Terminal />
        </div>
       
    )
}

export default App