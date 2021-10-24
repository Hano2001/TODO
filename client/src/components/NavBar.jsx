import React from 'react'
import { Link } from 'react-router-dom';
import { StyledNav } from './Styled';

export default function NavBar() {
    const navItems = [
        {
            name: "Home",
            path: "/home"
        },
    
        {
            name: "List Page",
            path: "/listpage"
        },
    
        {
            name: "Create New List",
            path: "/createlist"
        },
        {
            name:"TEST",
            path:"TEST"
        }
    ];
    return (
    <StyledNav>
        
        <div>
      { navItems.map((item) =>(
           
            <Link key={item.name} to={item.path}><button>
                {item.name}
                </button></Link>
                
      ))}
      </div>
    </StyledNav>
    )
    
}
