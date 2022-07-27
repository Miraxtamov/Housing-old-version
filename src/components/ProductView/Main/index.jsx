import React from 'react'
import { Container, ProductViewLeft, Wrapper } from './style'

const Main = ({house}) => {
  return (
    <Container>
      <Wrapper>
        <ProductViewLeft>
          <ProductViewLeft.Wrapper>
            <ProductViewLeft.Title>{house?.address}</ProductViewLeft.Title>
          </ProductViewLeft.Wrapper>
        </ProductViewLeft>
      </Wrapper>
    </Container>
  )
}

export default Main