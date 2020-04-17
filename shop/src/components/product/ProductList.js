import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';

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
const ImgWrapper = styled.div `
  border-bottom: 3px solid ${props => props.borderColor};
  display: flex;
  max-width: 260px
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

function ProductList(props) {
  const [products, setProducts] = useState(props.config.products);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('/product-info/')
      .then(res => res.json())
      .then(skus => {
        let newProducts = [...products]
        newProducts.forEach(product => {
          let skuList = [...skus]
          skuList = skuList.filter(s => s.product === product.stripe_id)
            .map(s => s.price / 100)
          if (skuList.length === 1) {
            product["price"] = skuList[0];
          } else {
            let min = Math.min(...skuList),
              max = Math.max(...skuList);
            if (min === max) product["price"] = skuList[0];
            else product["price"] = `${min} - $${max}`;
          }
        })
        setProducts(newProducts)
      }).catch(error => console.error('Error:', error))
  }

  return (
    <Wrapper>
      { products.map((product,i) => {
        return <Link key={i} to={`/product/${product.url}`}>
          <ImgWrapper borderColor={props.theme.palette.secondary.main}>
            <LargeIMG img="https://images-na.ssl-images-amazon.com/images/I/51ZAEutpmQL._SX425_.jpg"/>
          </ImgWrapper>
          <Title>
            {product.name}
            {/* <Price>${product.price}</Price> */}
            <Price>S/. 1500</Price>
          </Title>
        </Link>
      })}

{ products.map((product,i) => {
        return <Link key={i} to={`/product/${product.url}`}>
          <ImgWrapper borderColor={props.theme.palette.secondary.main}>
            <LargeIMG img="https://cdn.shopify.com/s/files/1/0333/4001/products/lucky-8-vapes-vancouver-canada-free-shipping-voopoo-drag-2-177w-uforce-t2-starter-kit-vape-kits_600x.jpg?v=1586039673"/>
          </ImgWrapper>
          <Title>
            {product.name}
            {/* <Price>${product.price}</Price> */}
            <Price>S/. 1500</Price>
          </Title>
        </Link>
      })}
      { products.map((product,i) => {
        return <Link key={i} to={`/product/${product.url}`}>
          <ImgWrapper borderColor={props.theme.palette.secondary.main}>
            <LargeIMG img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTIkPDat56h38UhJ8e6J56_FsRnY6iCU0FtE2WgC8gjc4Qk3oS&usqp=CAU"/>
          </ImgWrapper>
          <Title>
            {product.name}
            {/* <Price>${product.price}</Price> */}
            <Price>S/. 1500</Price>
          </Title>
        </Link>
      })}
      { products.map((product,i) => {
        return <Link key={i} to={`/product/${product.url}`}>
          <ImgWrapper borderColor={props.theme.palette.secondary.main}>
            <LargeIMG img="https://cdn.shopify.com/s/files/1/2233/7575/products/v8-baby-core-coils-_resistencias_-by-smok-t8-core-vapormex-01_1024x1024.jpg?v=1506321006"/>
          </ImgWrapper>
          <Title>
            {product.name}
            {/* <Price>${product.price}</Price> */}
            <Price>S/. 1500</Price>
          </Title>
        </Link>
      })}
      { products.map((product,i) => {
        return <Link key={i} to={`/product/${product.url}`}>
          <ImgWrapper borderColor={props.theme.palette.secondary.main}>
            <LargeIMG img="https://tranzaxvapors.pk/wp-content/uploads/2019/07/geek_vape_aegis_legend_200w_kit_1.jpg"/>
          </ImgWrapper>
          <Title>
            {product.name}
            {/* <Price>${product.price}</Price> */}
            <Price>S/. 1500</Price>
          </Title>
        </Link>
      })}
      { products.map((product,i) => {
        return <Link key={i} to={`/product/${product.url}`}>
          <ImgWrapper borderColor={props.theme.palette.secondary.main}>
            <LargeIMG img="https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-9/p960x960/75614082_767866926991517_1873517803131109376_o.jpg?_nc_cat=102&_nc_sid=9e2e56&_nc_ohc=0SLxCzaqdfoAX8QcO_0&_nc_ht=scontent.ftru1-1.fna&_nc_tp=6&oh=873412cc649a6438b8c9893eb3c0200a&oe=5EBECA2E"/>
          </ImgWrapper>
          <Title>
            {product.name}
            {/* <Price>${product.price}</Price> */}
            <Price>S/. 1500</Price>
          </Title>
        </Link>
      })}
    </Wrapper>
  );
};
export default withTheme(ProductList);