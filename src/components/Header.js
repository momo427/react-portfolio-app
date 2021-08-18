import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


export default function Portfolio(){
    return (
        <>
<Jumbotron fluid>
  <Container className='intro'>
    <h1>About me</h1>
    <p id='aboutme'>A junior developer building modern digital products and experiences</p>
  </Container>
</Jumbotron>

    </>
    )
}