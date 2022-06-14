import React from "react";
import './Header.css';


export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
           <div className="header--logo">
           <a href="/" ></a>
           <img src = "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"alt="Netflix"></img>
           </div>
           <div className="header--user">
               <a href="/">
                   <img src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg" alt="Usuário"/>
               </a>
           </div>
        </header>
    )
}