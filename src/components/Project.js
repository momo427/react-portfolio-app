import React from 'react';
import Container from '@material-ui/core/Container';
import Redirect from '@material-ui/core/Link';
import weatherapp from '../images/weatherapp.png'
import passwordGen from '../images/passwordGenerator.png'
import codeQuiz from '../images/codeQuiz.png'
import './Project.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 449,
   
  },
  cards: {
    height: 489,
    display:'flex',
    alignContent:'center',
    margin:100,
    padding:20,
  },
});
function Project() {
  const classes = useStyles();
  return (
    <Container className={classes.cards}>
    <Card >
      <CardActionArea>

  <Redirect href='https://momo427.github.io/weather/'><img className='pimg' src={weatherapp} alt='weatherapp'></img>
  </Redirect>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      <Card className={classes.root}>
      <CardActionArea>

      <Redirect href='https://momo427.github.io/codequiztake_3/'><img className='pimg'src={codeQuiz} alt='weatherapp'></img>
  </Redirect>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      <Card className={classes.root}>
      <CardActionArea>

      <Redirect href='https://momo427.github.io/password_generate/'><img className='pimg'src={passwordGen} alt='passwordGenerator'></img>
  </Redirect> 

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Container>
  );
}







export default Project
