const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const { HoldingsModel } = require('./models/HoldingsModel');


const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;


// Connect to MongoDB
mongoose.connect(MONGO_URL).then(()=> {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
    console.log('Server is running on port 3000');
    })
})

app.get('/addHoldings', (req, res) => {
    res.send('Holdings added successfully');
    let Holdings = [
        {
            name:"Tata Steel",
            qty:10,
            avg:102.2,
            price:2,
            net:"19.2",
            day:"0.24%",
        },{
            name:"Tata Steel",
            qty:10,
            avg:102.2,
            price:2,
            net:"19.2",
            day:"0.24%",
        },{
            name:"Tata Steel",
            qty:10,
            avg:102.2,
            price:2,
            net:"19.2",
            day:"0.24%",
        }
    ]

    Holdings.forEach((holding) => {
        const newHolding = new HoldingsModel(
            {
                name: holding.name,
                qty: holding.qty,
                avg: holding.avg,
                price: holding.price,
                net: holding.net,
                day: holding.day
            }
        );
        newHolding.save()
            .then(() => {
                console.log('Holding saved successfully');
            })
            .catch((err) => {
                console.error('Error saving holding:', err);
            });
    })
})