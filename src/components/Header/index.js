import React from 'react';
import {useSelector} from 'react-redux';
import './header.css';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export default function Header() {
 
  const reserveSize = useSelector(state => state.reserve.length);

 return (
   <header className="container">
     <Link to="/">
       <img  className="logo"src={Logo} alt="logo"/>
     </Link>
    
     <Link to="/reservas" className="reserva">
       <div>
         <strong>Minhas reservas</strong>
         <span> {reserveSize} reservas</span>
       </div>
     </Link>
      
   </header>
 );
}