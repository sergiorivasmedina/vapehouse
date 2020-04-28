import React, { Component } from 'react';
import styled from 'styled-components';
import PageWrapper from '../ui/PageWrapper';
import Paper from '@material-ui/core/Paper';
import Breadcrumb from '../ui/Breadcrumb';
import ProductDetails from './ProductDetails';
import axios from '../../axios';

const Wrapper = styled.div `
  padding: 40px;
  @media (max-width: 650px) {
    padding: 20px;
  }
`;

const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 40px 0;
  }
`;

class Producto extends Component {
    constructor(props) {
        super(props);
        this.state = {
          idProducto: -1,
          producto: ''
        }
        
    }

    componentWillMount() {
      const { id } = this.props.match.params;

      axios.get('/producto/'+id).then(res => {
        this.setState({ producto: res.data });
      })
    }

    render() {
        return (
            <PageWrapper>
                <Paper>
                    <Wrapper>
                    <Breadcrumb product={this.state.producto} />
                    <Grid>
                        {/* {photos} */}
                        <div style={{ gridColumn: "span 2" }}>
                        <ProductDetails
                          product={this.state.producto}
                          // quantity='1'
                          // setQuantity='2'
                          // variants='3'
                          // price='12'
                          // updateSkuPrice='4'
                          // addToCart='5'
                          />
                        
                        </div>
                    </Grid>
                    </Wrapper>
                </Paper>
            </PageWrapper>
        );
    }
}

export default Producto;