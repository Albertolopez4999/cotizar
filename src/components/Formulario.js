import React,{Component} from 'react';


class Formulario extends Component{

    //refs son para leer los valores de los campos
    MarcaRef=React.createRef();
    AñoRef=React.createRef();
    BasicoRef=React.createRef();
    CompletoRef=React.createRef(); 
    handlecotizar(e){
        e.preventDefault();

        const plan =this.BasicoRef.current.checked ? 'basico':'coompleto';
       // console.log(this.MarcaRef.current.value);
        //obtener los datos
       // console.log(this.MarcaRef.current.value);
        //crear el objeto
        
        const infoAuto ={
            marca:this.MarcaRef.current.value,
            año:this.AñoRef.current.value,
            plan:plan
        }
        //enviarlo al componente principal

        this.props.CotizarSeguro(infoAuto);
        e.currentTarget.reset();
    }
  render() {
    return (
        <form className="cotizar-auto"  onSubmit={this.handlecotizar.bind(this)}>
        <div className="campo">
            <label>Marca</label>
            <select name="marca" ref={this.MarcaRef}>
                <option value="americano">Americano</option>
                <option value="europeo">Europeo</option>
                <option value="asiatico">Asiatico</option>
            </select>
        </div>

        <div className="campo">
            <label>Año</label>
            <select name="year" ref={this.AñoRef}>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
            </select>
        </div>
        <div className="campo">
            <label>Plan:</label>
            <input type="radio" name="plan" value="basico" ref={this.BasicoRef}/> Básico
            <input type="radio" name="plan" value="completo" ref={this.CompletoRef}/> Completo
        </div>

        <button type="submit" className="boton">Cotizar</button>
    </form>
  
    );
  }
}



export default Formulario;
