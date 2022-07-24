const RouterUser = require('./components/user/router/router')
const RouterAdmin = require('./components/admin/router/router')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(res => {
//     console.log('database terhubung')
// })
// .catch(err => {
//     console.log(err)
// })

// app.use(cors())
// app.use(bodyParser.json());
// app.use('/', RouterDaftar)

// app.listen(process.env.PORT, (req, res) => {
//     console.log(`server run port ${process.env.PORT}`)
// })

mongoose.connect(process.env.MONGO_URL, function(err, db) {
    if (err) throw err;
    db.collection('wisatas').aggregate([
           { $lookup:
              {
                from: 'kategoris',
                localField: 'kategori_id',
                foreignField: '_id',
                as: 'kategoridetails'
              }
            }
          ]).toArray(function(err, res) {
            if (err) throw err;
            const data = JSON.stringify(res)
            // console.log(data)
            // db.close();
            app.use(cors())
            app.use(bodyParser.json());
            app.use('/kategori', (req, res) => {
              res.send(JSON.parse(data))
            });
          });
    db.collection('ratings').aggregate([
     { $lookup:
        {
          from: 'wisatas',
          localField: 'aid',
          foreignField: '_id',
          as: 'wisatasdetail'
        }
      },
      {
        $lookup:
        {
          from: 'loginusers',
          localField: 'uid',
          foreignField: '_id',
          as: 'usersdetail'
        }
      }
    ]).toArray(function(err, res) {
      if (err) throw err;
      const data = JSON.stringify(res)
      // console.log(data)
      // db.close();
      app.use(cors())
      app.use(bodyParser.json());
      app.use('/rating', (req, res) => {
        res.send(JSON.parse(data))
      });
    });

    app.use(cors())
    app.use(bodyParser.json());
    app.use('/', RouterUser)
    app.use('/admin', RouterAdmin)
  
  
    app.listen(process.env.PORT, (req, res) => {
      console.log(`server run port ${process.env.PORT}`)
    })
  
  });