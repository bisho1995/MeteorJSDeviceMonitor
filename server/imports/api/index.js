import { Meteor } from 'meteor/meteor';  
const express = require('express');
var bodyParser = require('body-parser')
import { Data, Id } from '../../../imports/collections/data';

export function setupApi() {  
  const app = express()
  app.use(bodyParser.urlencoded({ extended: false }))

  app.post('/api/cc/device/:id', (req, res) => {
    const id = req.params.id
    const temp =req.body.temperature
    const humidity = req.body.humidity

    if (Id.find({id}).fetch().length == 0) {
        Id.insert({id})
    } 
    Data.insert({
        id,
        data: { temp, humidity },
        createdAt: Date.now()
    })
    res.status(200).json({ message: 'recorded'});
  });


  app.get('/api/get/devices', (req, res) => {
      const ids = Id.find().fetch().map(id => id.id)
      res.status(200).json({devices: ids})
  })

  app.get('/api/get/data/:id', (req, res) => {
      // clearDb()
    const id = req.params.id;
    const datas = Data.find({id}, {sort: {createdAt: -1}}).fetch().map(data => data.data)
    console.log(datas)
    res.status(200).json({datas})
  })

  WebApp.connectHandlers.use(app);
}

function clearDb() {
    Data.remove({})
    Id.remove({})
}