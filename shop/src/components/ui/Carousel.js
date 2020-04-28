import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const IMG = styled.div `
  background-image: url(${props => props.img});
  background-color: #eee;
  width: 75%;
  padding-bottom: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: 10px;
  background-position: 50%;
  cursor: pointer;
`;
const LargeIMG = styled.div `
  background-image: url(${props => props.img});
  background-color: #eee;
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  display: inline-block;
  grid-column: span 3;
`;


class Carousel extends Component {

  constructor(props){
    super(props);
    this.state= {
      index: 0
    }
    
  }

  setImg(idFoto) {
    this.setState({ index: idFoto-1 })
  }

  render() {
    if(typeof this.props.photos !== "undefined") {
      
      return (
        <Wrapper>
          <div>
            {this.props.photos.map((p,i) => {
              return <IMG
                onClick={this.setImg.bind(this,p.idFoto)}
                img={p.urlFoto} key={i}
              />
            })}
          </div>
          <LargeIMG img={this.props.photos[this.state.index].urlFoto} />
        </Wrapper>
      );
    } else {
      return <h4>Cargando...</h4>
    }
    
  }
}

export default Carousel;