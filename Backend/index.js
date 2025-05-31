const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const { HoldingsModel } = require('./models/HoldingsModel');
const { PositionsModel } = require('./models/PositionModel');
const { OrdersModel } = require('./models/OrderModel');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());


const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;


// Connect to MongoDB
mongoose.connect(MONGO_URL).then(()=> {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
    console.log('Server is running on port 3000');
    })
})

//used to add data to collections
// app.get('/addHoldings', (req, res) => {
//     res.send('Holdings added successfully');
//     let Holdings = [
//         {
//             name:"Tata Steel",
//             qty:10,
//             avg:102.2,
//             price:2,
//             net:"19.2",
//             day:"0.24%",
//         },{
//             name:"Tata Steel",
//             qty:10,
//             avg:102.2,
//             price:2,
//             net:"19.2",
//             day:"0.24%",
//         },{
//             name:"Tata Steel",
//             qty:10,
//             avg:102.2,
//             price:2,
//             net:"19.2",
//             day:"0.24%",
//         }
//     ]

//     Holdings.forEach((holding) => {
//         const newHolding = new HoldingsModel(
//             {
//                 name: holding.name,
//                 qty: holding.qty,
//                 avg: holding.avg,
//                 price: holding.price,
//                 net: holding.net,
//                 day: holding.day
//             }
//         );
//         newHolding.save()
//             .then(() => {
//                 console.log('Holding saved successfully');
//             })
//             .catch((err) => {
//                 console.error('Error saving holding:', err);
//             });
//     })
// })

// app.get("/addPositions" , (req, res) => {
//     res.send("Positions added successfully");
//     let Positions = [
//         {
//             product: "Equity",
//             name: "Tata Steel",
//             qty: 10,
//             avg: 102.2,
//             price: 2,
//             net: "19.2",
//             day: "0.24%",
//             isLoss: false
//         },
//         {
//             product: "Equity",
//             name: "Tata Steel",
//             qty: 10,
//             avg: 102.2,
//             price: 2,
//             net: "19.2",
//             day: "0.24%",
//             isLoss: false
//         },
//         {
//             product: "Equity",
//             name: "Tata Steel",
//             qty: 10,
//             avg: 102.2,
//             price: 2,
//             net: "19.2",
//             day: "0.24%",
//             isLoss: false
//         }
//     ];

//     Positions.forEach((position) => {
//         const newPosition = new PositionsModel(position);
//         newPosition.save()
//             .then(() => {
//                 console.log('Position saved successfully');
//             })
//             .catch((err) => {
//                 console.error('Error saving position:', err);
//             });
//     });
// })

//get the data in frontend now
app.get('/allHoldings', async (req, res) => {
    try {
        const holdings = await HoldingsModel.find();
        res.json(holdings);
    } catch (error) {
        console.error('Error fetching holdings:', error);
    }
});

app.get("/allOrders",async(req,res)=>{
    try{
        const orders = await OrdersModel.find();
        res.json(orders);
    }
    catch(error){
        console.error('Error fetching orders:', error);
    }
})

app.get("/allPositions", async(req,res)=>{
    try{
        const positions = await PositionsModel.find();
        res.json(positions);
    }
    catch(error){
        console.error('Error fetching positions:', error);
    }
});

app.post("/newOrder",(req, res) => {
    const newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save()
        .then(() => {
            res.status(201).json({ message: 'Order created successfully' });
        })
        .catch((err) => {
            console.error('Error creating order:', err);
            res.status(500).json({ error: 'Failed to create order' });
        });
})