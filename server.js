require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const Client = require('@line/bot-sdk').Client;

const app = express();

const listenIP = process.env.listenIP;
const listenPort = process.env.listenPort;

const client = new Client({
  channelAccessToken: process.env.channelAccessToken,
  channelSecret: process.env.channelSecret
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.disable('x-powered-by');

app.use('/public', express.static('public'));

app.use('/linebot', function (req, res, next) {

  const event = req.body.events[0];
  const message = event.message;

  var replyText = '';

  if(message.type == 'text') {
    if(raceName = (message.text.match(/^!raceinfo\s+(\S+)/)[1]).toLowerCase()) {
      switch(raceName) {
        case 'occ':
          replyText = "Distance: 56 km\nTotal Ascent: 3,500 m\nCut off time: 14h30";
          break;

        case 'ccc':
          replyText = "Distance: 101 km\nTotal Ascent: 6,100 m\nCut off time: 26h30";
          break;

        case 'tds':
          replyText = "Distance: 119 km\nTotal Ascent: 7,200 m\nCut off time: 33h00";
          break;

        case 'utmb':
          replyText = "Distance: 171 km\nTotal Ascent: 10,000 m\nCut off time: 46h30";
          break;

        case 'hk100':
          replyText = "Distance: 100 km\nTotal Ascent: 4,500 m\nCut off time: 30h";
          break;

      }
    }
  }

  if(replyText !== '') {
    client.replyMessage(event.replyToken, {
      type: 'text',
      text: replyText
    });
  }

  res.sendStatus(200);
});

app.listen(listenPort, listenIP, function () {
  console.log('Chilling Trail Bot Listening on ' + listenIP + ':' + listenPort);
});
