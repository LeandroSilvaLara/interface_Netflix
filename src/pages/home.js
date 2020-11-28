import React from 'react'
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'
import { FaqsContainer } from '../containers/faqs';


export default function Home() {
  return (
    <>
    <HeaderContainer>
    <p>Hello</p>
      </HeaderContainer>
          <JumbotronContainer />
          <FaqsContainer />
          <FooterContainer />
          
      
  </>
  );
}