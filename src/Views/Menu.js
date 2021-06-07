import React, { Component } from 'react';
//import Cookies from 'universal-cookie';
import style from '../Styles/MenuPrincipal_style.css';

class Menu extends Component {
  constructor(props) {
      super(props);
      this.state = {
        msj:""
      }
      
  }
   
  render() {  
    return (
      <div align="center">
          Menu Principal 
      </div>
    );
  }
}
export default Menu;


