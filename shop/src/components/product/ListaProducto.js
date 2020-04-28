import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import LandingProductImage from './LandingProductImage';


const Wrapper = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  > a {
    text-decoration: none;
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`;

const Title = styled.div `
  color: black;
  text-decoration-color: #FF7400;
  margin-top: 10px;
  @media (max-width: 650px) {
    font-size: 14px;
  }
`;
const Price = styled.span `
  display: block;
  color: #888;
  font-size: 14px;
  margin-top: 5px;
`;

class ListaProducto extends Component {
    constructor(props){
        super(props);
        this.state={
            productos: []
        }
    }

    componentDidMount() {
        
        axios.get('/productos/activos').then(res => {
            this.setState({productos: res.data});
        })
    }

    render() {
        return (
            <Wrapper>
                { this.state.productos.map((product,i) => {
                    return <Link key={i} to={"/product/detalle/" + product.idProducto}>
                      {product.foto.length > 0 && <LandingProductImage fotoPrincipal={product.foto[0].urlFoto}></LandingProductImage>}
                    
                    <Title>
                        {product.nombre}
                        <Price>S/. {product.precio}</Price>
                    </Title>
                    </Link>
                })}
            </Wrapper>
        );
    }
}

export default ListaProducto;