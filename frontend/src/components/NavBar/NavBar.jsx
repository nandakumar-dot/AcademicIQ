import React,{useState} from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const [extended,setExtended] = useState(false)
    const [selected,setSelected] = useState(false)

  return (
    <div className='navBar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
            <div className="extraspace"></div>
            <NavLink to="/home">
            <div onClick={()=>setSelected(prev=!prev)} className="home recent-entry" >

              <img src={assets.home_icon} alt="" />
              {extended?<p>Home</p>:null}

            </div>
            </NavLink>

            <NavLink to='/profile'>
            <div className="Profile recent-entry">
              
              <img src={assets.user} alt="" />
              {extended?<p>Profile</p>:null}
              
            </div>
            </NavLink>

            <NavLink to='roadmap'>
            <div className="roadmap recent-entry">
              
              <img src={assets.book_icon} alt="" />
              {extended?<p>Roadmap</p>:null}
              
            </div>
            </NavLink>
            <hr className="solid"/>

            <div className="smallspace"></div>

            <NavLink to='inbox'> 
            <div className="inbox recent-entry">
               
              <img src={assets.inbox_icon} alt="" />
              {extended?<p>inbox</p>:null}
              
            </div>
            </NavLink>
            
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended?<p>Help</p>:null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Settings</p>:null}
          </div>
        </div>
    </div>
  )
}

export default NavBar