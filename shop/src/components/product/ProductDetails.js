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
      variante: []
    }
  }

  componentWillMount() {
    console.log("variante: "+this.props.product)
    this.setState({variante: this.props.product.variante})
  }

  render() {
    if(typeof this.props.product.variante !== "undefined") {

      return (
        <div>
            <h2 style={{ marginTop: "0" }}>{this.props.product.nombre}</h2>
            <Description>{this.props.product.descripcion}</Description>
      <label>{this.props.product.variante[0].etiqueta}</label>
  
            {/* <FlexWrapper>
            { this.props.product.variante.map((variant,i) => {
                  return <Row key={i}>
                    <label>{variant.etiqueta}</label>
                    <Select
                      native
                      value={product[variant.etiqueta]}
                      onChange={handleChange(variant.name)}
                      style={{ width: "155px", fontSize: "14px", height: "29px" }}
                    >
                      { variant.options.map((option,j) => {
                        if (isNaN(option.label)) {
                          option.label = option.label.charAt(0).toUpperCase() + option.label.slice(1);
                        }
                        return <option key={j} value={option.label}
                          sku_id={option.sku_id} price={option.price}
                        >{option.label}</option>
                      })}
                    </Select>
                  </Row>
                })
            }
            </FlexWrapper> */}
  
            <div style={{ fontWeight: "600", textAlign: "right" }}>
              S/ {this.props.product.precio}
            </div>
            {/* <Right>
              <Button variant="contained" color="primary"
                onClick={() => props.addToCart(product)}
              >
                Add To Cart
              </Button>
              <TextField
                value={props.quantity}
                onChange={e => props.setQuantity(e.target.value)}
                type="number"
                margin="normal"
                style={{ width: "40px", margin: "0 30px 0" }}
              />
            </Right> */}
            {/* { product.details &&
              <Details>
                <ul>
                  {product.details.map((detail,i) =>
                    <li key={i}>{detail}</li>
                  )}
                </ul>
              </Details>
            } */}
          </div>
      );

    } else {return <h1>Cargando...</h1>}
    
  }

}

export default ProductDetails;