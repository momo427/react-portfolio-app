import React from 'react';
import Container from '@material-ui/core/Container';
import Redirect from '@material-ui/core/Link';
import weatherapp from '../images/weatherapp.png'
import passwordGen from '../images/passwordGenerator.png'
import codeQuiz from '../images/codeQuiz.png'
import ListGroup from 'react-bootstrap/ListGroup'
import { Card } from "react-bootstrap";



;
function Project() {

  return (
    <Container className='cards' >
<ListGroup horizontal className='proList'>
<ListGroup.Item className='listItem'>
  <Redirect className='box' href='https://momo427.github.io/weather/'>
<Card className="bg-dark text-white ">
<Card.Img  src={weatherapp} className='pimg' alt='weatherapp' />
  <Card.ImgOverlay>
    <Card.Title>Weather App</Card.Title>
    <Card.Text>
    This weather app allows the user to check the current weather, five day forecast, wind speed, UV index, and humidity of any city. 
    </Card.Text>
  
  </Card.ImgOverlay>
</Card>
</Redirect>
</ ListGroup.Item>


<ListGroup.Item className='listItem'>
<Redirect className='box' href='https://momo427.github.io/weather/'>
<Card className="bg-dark text-white ">
<Card.Img  src={codeQuiz} className='pimg' alt='code quiz' />
  <Card.ImgOverlay>
    <Card.Title>Code Quiz</Card.Title>
    <Card.Text>
    This application uses JavaScript to build a quiz that can be used by developers to study JavaScript.
    </Card.Text>
   
  </Card.ImgOverlay>
</Card>
</Redirect>
</ListGroup.Item>

<ListGroup.Item className='listItem'>
<Redirect className='box' href='https://momo427.github.io/weather/'>
<Card className="bg-dark text-white ">
<Card.Img  src={passwordGen} className='pimg' alt='passwordGenerator' />
  <Card.ImgOverlay>
    <Card.Title>Password Generator</Card.Title>
    <Card.Text>
    Generate your next password with just a few clicks. 
    </Card.Text>
  
  </Card.ImgOverlay>
</Card>
</Redirect>
</ListGroup.Item>
</ListGroup>
    </Container>
  );
}







export default Project
