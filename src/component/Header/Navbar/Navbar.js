import React from 'react'
import './styleNavbar/navbar.css'

function Navbar(props) {
    var navbarList = props.menuItems
    return (
        <div className="nav-bar">
            <ul className="nav-bar-ul">
                {
                    navbarList.map((item,i)=>{
                        return (
                            <li key={i} className={item.cName}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar
