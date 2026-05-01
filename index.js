require('dns').setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const submitRouter = require('./API/submit');
const http = require('http');
const server = http.createServer(app);
app.use(cors()); 
app.use(express.json()); 
app.use('/api/talent', submitRouter);



app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Status</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7f6;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .status-container {
            text-align: center;
            background: white;
            padding: 2rem 3rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .status-indicator {
            height: 12px;
            width: 12px;
            background-color: #2ecc71;
            border-radius: 50%;
            display: inline-block;
            margin-right: 8px;
            animation: blink 1.5s infinite;
        }
        h1 {
            color: #2c3e50;
            margin: 0;
            display: flex;
            align-items: center;
            font-size: 1.5rem;
        }
        @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.4; }
            100% { opacity: 1; }
        }
    </style>
</head>
<body>
    <div class="status-container">
        <h1>
            <span class="status-indicator"></span>
            Server is running
        </h1>
    </div>
</body>
</html>`);
});


//middleware
app.use(cors());
app.use(express.json());


//import API folder
const submitTalentForm= require('./API/submit');

//Use API
app.use('/api/submit', submitTalentForm);

// Replace your old mongoose.connect line with this:
const mongoURI = process.env.MONGO_URI || "mongodb+srv://larah_dejan:La%40NdZ4Et_iPqHp@expressnodedb.i6iqx0g.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Successfully'))
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    // Don't use process.exit(1) on Render, let the app stay alive to retry
  });

// IMPORTANT: Use the port Render gives you
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});