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
      <div align="center" class="MenuMainContainer">
          
          <h1 class = "oblique"> Cambio de clave </h1> 
        
      <hr></hr>
      <br/>
      <br/>

      <view>
        <form  class="capa" >
          <label  >
            <h4 >Correo de Usuario:  </h4>
            <input type="text" name="name" required/>
          </label>
          <input type="submit" value="Cargar" />
    

          <br/>
          <br/>
          <label>
              <h4> Ingresar clave anterior:  </h4>
              <input type="text" name="name" required/>
          </label>

          <label>
              <h4> Ingresar nueva clave:  </h4>
              <input type="text" name="name" />
            
          </label>
          
          <br/>
          <br/>
          <input type="submit" value="Guardar" />

        </form>
      </view>
      </div>
    );
  }
}
export default Menu;

