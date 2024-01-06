import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pig from '../assets/images/pig side.png'
import pizza from '../assets/images/pizza.jpeg'
import cards from '../assets/images/cards.avif'

export const CodingProjects = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <hr className='line'></hr>
        <Card sx={{ maxWidth: 380 }} className='card' >
          <CardMedia
            sx={{ height: 140 }}
            image={pizza}
            title="pizza"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Word Pizza
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hangman-style word game with easy mode, hard mode, and 2
              player mode
            </Typography>
          </CardContent>
          <CardActions>
            <a href='https://github.com/NoahKise/word-puzzle'>
              <Button size="small">Github Repo</Button>
            </a>
            <Button size="small">Live Site</Button>
          </CardActions>
        </Card>
        <hr className='line'></hr>
        <Card sx={{ maxWidth: 380 }} className='card'>
          <CardMedia
            sx={{ height: 140 }}
            image={pig}
            title="music piggy"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Music Piggy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Web application that lets users create accounts, sign in, create
              and post playlists, and view playlists other users have created
            </Typography>
          </CardContent>
          <CardActions>
            <a href='https://github.com/NoahKise/playlist-app'>
              <Button size="small">Github Repo</Button>
            </a>
            <Button size="small">Live Site</Button>
          </CardActions>
        </Card>
        <hr className='line'></hr>
        <Card sx={{ maxWidth: 380 }} className='card' >
          <CardMedia
            sx={{ height: 140 }}
            image={cards}
            title="playing cards"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cribbage
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Web application that allows two users to play cribbage against eachother, and to play rock paper scissors to determine who deals first.
            </Typography>
          </CardContent>
          <CardActions>
            <a href='https://github.com/NoahKise/api-react-gabe-noah'>
              <Button size="small">Github Repo</Button>
            </a>
            <Button size="small">Live Site</Button>
          </CardActions>
        </Card>
        <hr className='line'></hr>
      </div>
    </>
  );
}