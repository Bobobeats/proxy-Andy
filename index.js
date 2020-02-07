const express = require('express');
const axios = require('axios').default;
const path = require('path');

const port = 3420;
const app = express();

const commentsIp = 'http://44.233.138.125:4001';
const playerIp = 'http://44.232.36.205:3002';
const relatedTracksIp = 'http://44.226.147.90:1000';

app.get('/player_bundle', (req, res) => {
  axios.get(`${playerIp}/player_bundle`)
  .then(data => {
    res.send(data.data);
  })
  .catch(err => {
    console.log('ERROR RETRIEVING PLAYER BUNDLE', err);
    res.send(err);
  });
})

app.get('/api/player/songs/:songId', (req, res) => {
  const { songId } = req.params;
  axios.get(`${playerIp}/api/player/songs/${songId}`)
  .then(data => res.send(data.data))
  .catch(err => {
    console.log('ERROR RETRIEVING PLAYER FOR SONG', err);
    res.send(err);
  })
})

app.get('/relatedTracks_bundle', (req, res) => {
  axios.get(`${relatedTracksIp}/relatedTracks_bundle`)
  .then(data => res.send(data.data))
  .catch(err => {
    console.log('ERROR RETRIEVING RELATED TRACKS BUNDLE', err);
    res.send(err);
  })
});

app.get('/api/relatedTracks/songs/:songId', (req, res) => {
  const { songId } = req.params;
  axios.get(`${relatedTracksIp}/api/relatedTracks/songs/${songId}`)
  .then(data => res.send(data.data))
  .catch(err => {
    console.log('ERROR RETRIEVING RELATED TRACKS FOR SONG', err);
    res.send(err);
  })
})

app.get('/comments_bundle', (req, res) => {
  axios.get(`${commentsIp}/relatedTracks_bundle`)
  .then(data => res.send(data.data))
  .catch(err => {
    console.log('ERROR RETRIEVING COMMENTS BUNDLE FOR SONG', err)
    res.send(err);
  })
})

app.get('/api/comments/songs/:songId', (req, res) => {
  const { songId } = req.params;
  axios.get(`${commentsIp}/api/comments/songs/${songId}`)
  .then(data => res.send(data.data))
  .catch(err => {
    console.log('ERROR RETRIEVING COMMENTS FOR SONG', err)
    res.send(err);
  })
})

app.use(express.static(path.join(__dirname, './dist')));

app.listen(port, () => console.log('listening on port 3420'));
