import React, { useState, Component } from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

const FlexWrapper = styled.div `
  margin: 20px 0 40px;
`;
const Row = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  > label {
    line-height: 34px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.87);
    text-transform: capitalize;
  }
`;
const Right = styled.div `
  display: flex;
  flex-direction: row-reverse;
  margin: 30px 0 60px;
  align-items: baseline;
`;
const Description = styled.div `
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
`;
const Details = styled.div `
  clear: both;
  font-size: 14px;
  margin-top: 20px;
  > ul {
    margin: 0;
    padding: 0 20px 0;
    > li {
      margin-bottom: 10px;
    }
  }
`;

class ProductDetails extends Component{
  constructor(props) {
    super(props);
    this.state = {
      variante: [],
      cantidad: 1,
      indexVariante: 0
    }
  }

  componentWillMount() {
    this.setState({variante: this.props.product.variante})
  }

  actualizarCantidad(event) {
    if ((event.target.value) < 1){
      return;
    } else {
      this.setState({cantidad: event.target.value})
    }
    
  }

  handleChange(event) {
    let opcion = event.target.childNodes[event.target.selectedIndex].getAttribute('value');
  }

  carrito(){
    alert("Falta implementar xD")
  }

  render() {
    if(typeof this.props.product.variante !== "undefined") {
      return (
        <div>
            <h2 style={{ marginTop: "0" }}>{this.props.product.nombre}</h2>
            <Description>{this.props.product.descripcion}</Description>
  
            {this.props.product.variante.length > 0 &&
            <FlexWrapper>
            <label>Modelo: </label>
            <Select
              native
              value={this.selectedOption}
              onChange={this.handleChange.bind(this)}
              style={{ width: "155px", fontSize: "14px", height: "29px" }}
            >
              { this.props.product.variante.map((option,j) => {
                return <option key={j} value={option.etiqueta}
                >
                  {option.etiqueta}</option>
              })}
            </Select>
          </FlexWrapper>}
            

            { this.props.product.detalle &&
              <Details>
                <ul>
                  {this.props.product.detalle.map((detail,i) =>
                    <li key={i}>{detail.infoDetalle}</li>
                  )}
                </ul>
              </Details>
            }
            
  
            <div style={{ fontWeight: "600", textAlign: "right" }}>
              S/ {this.props.product.precio}
            </div>
            <Right>
              <Button variant="contained" color="primary"
                onClick={this.carrito.bind(this)}
              >
                Add To Cart
              </Button>
              <TextField
                value= {this.state.cantidad}
                onChange={this.actualizarCantidad.bind(this)}
                type="number"
                margin="normal"
                style={{ width: "40px", margin: "0 30px 0" }}
              />
            </Right>
            
          </div>
      );

    } else {return <h4>Cargando...</h4>}
    
  }

}

export default ProductDetails;