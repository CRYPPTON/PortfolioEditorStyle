import React from 'react'


function SideBarNav(props) {
    var sideBarList = props.sideBarList
    return (
        <div className="side-bar">
            <ul>
                {
                    sideBarList.map((item)=>{
                        return ( 
                            <li className = {item.cName} key={item.id}>
                                <a href={item.url} id={item.id} >
                                    {item.title}
                                </a>
                            </li>
                        )             
                    })
                }
            </ul>
        </div>
    )
}

export default SideBarNav
