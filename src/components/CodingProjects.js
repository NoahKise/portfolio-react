import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CodingProjects = () => {
  return (
    <>
      <hr className='line'></hr>
      <Card sx={{ maxWidth: 380 }} className='card' >
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
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
          <Button size="small">Github Repo</Button>
          <Button size="small">Live Site</Button>
        </CardActions>
      </Card>
      <hr className='line'></hr>
      <Card sx={{ maxWidth: 380 }} className='card'>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
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
          <Button size="small">Github Repo</Button>
          <Button size="small">Live Site</Button>
        </CardActions>
      </Card>
      <hr className='line'></hr>
    </>
  );
}