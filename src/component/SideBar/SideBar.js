import React from 'react'
import SideBarNav from './sideBarList/sideBarNav.js'
import {SideBarList} from './sideBarList/side_bar_list.js'
import './sideBarList/styleSideBar/sidebar.css'
import './sideBarList/styleSideBar/sideBarContent.css'
import SideBarContent from './sideBarList/sideBarContent.js'

function SideBar() {
    return (
       <div className="Left-conteiner">  
        <div className="sideBar-container">
           <SideBarNav sideBarList = {SideBarList}/>
        </div>
        <div className="Right-conteiner">
            <SideBarContent />
        </div>  
      </div>
    )
}

export default SideBar
