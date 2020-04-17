import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  max-width: 2000px;
  margin: 3px 20px 50px;
`;

const PageWrapper = props => (
  <Wrapper>
    { props.children}
  </Wrapper>
);
export default PageWrapper;