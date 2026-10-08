import React, { useState } from "react";
import {IoMdMenu} from "react-icons/io";
import{MdOutlineArrowDropDown} from "react-icons/md"
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {PiSignInBold} from "react-icons/pi";
import {FaUserPlus} from "react-icons/fa6"
const NavLinks=[
    {title:"Home",link:"/"},
    {title:"About",link:"/about"},
    {title:"Accessories",link:"/accessories"},
    {title:"Blog",link:"/blog"},
    {title:"Contact",link:"/contact"},
]
export default function BottomHeader(){
    const location=useLocation();
    const[categories,setCategories]=useState([]);
    const [IscategorieOpen,setIscategorieOpen]=useState(false);
    useEffect(()=>{
        fetch("https://dummyjson.com/products/categories")
        .then((res)=>res.json())
        .then((data)=>setCategories(data))
    },[])

    useEffect(()=>{

     setIscategorieOpen(false)   
     
    },[location])
    console.log(categories)
    console.log(IscategorieOpen)
    return(
        
        <div className="btm-header">
          <div className="container">
            <nav className="nav">

              <div className="category-nav">
                <div className="category-btn" onClick={()=>{
                    setIscategorieOpen(!IscategorieOpen)
                }}>
                  <IoMdMenu/>
                  <p>Browse Category</p>
                  <MdOutlineArrowDropDown/>
                </div>
                <div className={`category-nav-list ${IscategorieOpen ? "active":""}`}>
                    {categories.map((cat)=>(
                        <Link key={cat.slug} to={`category/${cat.slug}`}>{cat.name}</Link>
                    ))}
                </div>
               </div>

                <div className="nav-links">
                    {NavLinks.map((item)=>(
                     <li key={item.link} className={location.pathname === item.link ? "active":""}> <Link to={item.link}>{item.title} </Link></li>
                    ))}
                    
                  </div>
                 
            </nav>
            <div className="Sign-regs-icons">
               <Link to="/"><PiSignInBold/></Link>
               <Link to="/"><FaUserPlus/></Link>
            </div>
          </div>
        </div>
        
    )
}