import React, { Component } from 'react';
//import Cookies from 'universal-cookie';
import '../Styles/MenuPrincipal_style.css';

class Menu extends Component {
  constructor(props) {
      super(props);
      this.state = {
          correo: '',
          passAnterior: '',
          passNueva:''
      }
      
  }

  ir_historial = async () => {
    window.location.href = "./Shopping_history";
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
            <h4> Correo de Usuario:  </h4>
            <input type="text" name="correo"/>
          </label>
          <input type="submit" value="Cargar" />
    
          <br/>
          <br/>
          <label>
              <h4> Ingresar clave anterior:  </h4>
              <input type="text" name="passAnterior"/>
          </label>

          <label>
              <h4> Ingresar nueva clave:  </h4>
              <input type="text" name="passNueva"  />
            
          </label>
          
          <br/>
          <br/>
          <input type="submit" value="Guardar"/>

        </form>
      </view>

      <div className="MenuBtns" >
          <button  onClick={() => this.ir_historial() }> Ver Historial </button>
         
      </div>

      </div>

    );
  }

  ver (){
    console.log(this.props.passNueva);
  }
}
export default Menu;

