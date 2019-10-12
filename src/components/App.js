import React,{Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component{
  CotizarSeguro=(r)=>{
console.log(r);
  }
  render() {
    return (
      <div className="contenedor">
        <Header
        titulo='Cotizador de seguro de auto'
         />
  
         <div className='contenedor-formulario'>
      <Formulario
      CotizarSeguro={this.CotizarSeguro}
      />
  
         </div>
      </div>
  
    );
  }
}



export default App;
