import React from 'react';
import styled from 'styled-components';

import PageWrapper from './ui/PageWrapper';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ProductList from './product/ProductList';

const Hero = styled.div `
  height: 300px;
  background-image: url("https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-9/71242309_729936210784589_4771595630906703872_n.png?_nc_cat=107&_nc_sid=dd9801&_nc_eui2=AeGoUxyMbwOhlXRcsHNmsAnK6ko9z2G-MWbqSj3PYb4xZrOhwP37IamOr-VEIHSQ5mw&_nc_ohc=VMImlDZ9sVkAX-ebYlg&_nc_ht=scontent.ftru1-1.fna&oh=244c7ceaa4239e556fcf691977850857&oe=5EB95907");
  background-repeat: no-repeat;
  background-position: center;
  background-color: #cccccc;
  background-size: cover;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -40px -40px 60px;
`;

const Landing = ({ config }) => (
  <PageWrapper>
    <Paper style={{ padding: "40px" }}>
      <Hero>
        <div style={{ display: "inline-block", maxWidth: "80%"}}>
          <h1>Los mejores vapes y líquidos del mercado Sergio R</h1>
        </div>
      </Hero>
      <Divider style={{ margin: "40px 0" }}/>
      <ProductList config={config} />
    </Paper>
  </PageWrapper>
);

export default Landing;