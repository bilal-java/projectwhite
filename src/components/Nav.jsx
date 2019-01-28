
import React, {Component} from 'react';
 import {Link} from "react-router-dom";

class Nav extends Component {
 state={

    navbar:[{to:"/",listitem:"Home"},
            {to:"/home1",listitem:"Destinations"},
    {to:"/home2",
            listitem:"Discount"
    },
    {to:"/home3",
            listitem:"Blog"
    },
    {to:"/home4",
            listitem:"Contact"
    },
    ]
 }
    render(){

        var reponse= this.state.navbar.map(
            (index,i)=>{
                return(
                    <ul className="nav" key={i}>
    <li className="nav-items"> <Link className="link" to={index.to}>{index.listitem}</Link></li> 
 </ul>
                )


            }

        )
        return(
        <nav className="navbar">
            <div className="logo"> Eternal Travellers</div>
        <div className="nav-right">
        {reponse}
                   </div>
           
        </nav>
        )

    }
}

export default Nav;