import React, { Component } from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.div `
  border-bottom: 3px solid ${props => props.borderColor};
  display: flex;
  max-width: 260px
`;

const LargeIMG = styled.div `
  background-image: url(${props => props.img});
  background-color: #ddd;
  width: 100%;
  padding-bottom: 133%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  display: inline-block;
  @media (min-width: 650px) {
    filter: grayscale(90%);
    transition: filter .5s;
    &:hover {
      filter: grayscale(0);
    }
  }
`;

class LandingProductImage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <ImgWrapper>
                <LargeIMG img={this.props.fotoPrincipal}/>
            </ImgWrapper>
        );
    }

}

export default LandingProductImage;