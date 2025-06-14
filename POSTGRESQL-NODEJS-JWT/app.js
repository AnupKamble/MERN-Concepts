
const express = require('express');
const app = express();
require('dotenv').config();



app.use(express.json())

app.get('/home', (req, res) => {
    res.status(200).json({ status: 'OK' });
  });
  


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running on port http://localhost:${PORT}`)) 